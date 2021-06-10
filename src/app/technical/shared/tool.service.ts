import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Tool } from './tool';
import { Metrics } from './metrics';
import { environment } from '../../../environments/environment';
import { Filter } from './filter';

@Injectable()
export class ToolService {
  private toolUrl = environment.TOOL_SERVICE_URL;
  private toolSearchUrl = environment.TOOL_SEARCH_URL;
  private toolStats = environment.TOOL_STATISTICS_URL;
  public count: string;
  public tool: Observable<Tool[]>;
  public metrics: Observable<Metrics[]>;
  public response: any;

  constructor(private http: HttpClient) {}

  getToolById(id: string): Observable<Tool[]> {
    this.tool = this.http.get<Tool[]>(this.toolUrl, {
      params: new HttpParams().set('id', id),
    });
    return this.tool.pipe(catchError(this.errorHandler('getToolById', [])));
  }

  getToolMetricsById(url: string): Observable<Metrics[]> {
    this.metrics = this.http.get<Metrics[]>(url);
    return this.metrics.pipe(
      catchError(this.errorHandler('getToolMetricsById', []))
    );
  }

  getToolWithFilters(filter: Filter, skip: number, limit: number) {
    const headers = new HttpHeaders().set(
      'Range',
      'items=' + skip + '-' + limit
    );
    let params = new HttpParams()
      .set('projection', 'description')
      .append('projection', 'web');
    if (filter.type != null) {
      for (const x of filter.type) {
        params = params.append('type', x);
      }
    }
    switch (filter.filter) {
      case 'Name':
        this.response = this.http.get(this.toolSearchUrl, {
          headers: headers,
          params: (params = params
            .set('name', filter.text)
            .set('label', filter.label)),
          observe: 'response',
        });
        break;
      case 'Description':
        this.response = this.http.get(this.toolSearchUrl, {
          headers: headers,
          params: (params = params
            .set('description', filter.text)
            .set('label', filter.label)),
          observe: 'response',
        });
        console.log(params);
        break;
      default:
        this.response = this.http.get(this.toolSearchUrl, {
          headers: headers,
          params: (params = params
            .set('text', filter.text)
            .set('label', filter.label)),
          observe: 'response',
        });
        break;
    }
    return this.response.pipe(catchError(this.errorHandler('getToolById', [])));
  }

  getGlobalStats(): Observable<any> {
    return this.http.get(this.toolStats);
  }

  private errorHandler<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      // this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
