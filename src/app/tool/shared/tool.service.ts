import { Injectable } from '@angular/core';
import { Observable ,  of } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { catchError } from 'rxjs/operators';

import { Tool } from './tool';
import { Metrics } from './metrics';

import { Filter } from './filter';


@Injectable()
export class ToolService {

  public tool: Observable<Tool[]>;
  public metrics: Observable<any[]>;
  public res;


  public count: string;
  private production = 'openebench';
  private dev = 'dev-openebench';
  private toolUrl = 'https://' + this.dev + '.bsc.es/monitor/rest/aggregate';

  constructor(private http: HttpClient) { }

  getToolById(id: string): Observable<Tool[]> {
    this.tool = this.http.get<Tool[]>(this.toolUrl, {
      params: new HttpParams()
        .set('id', id)
    });
    return this.tool

    .pipe(
      catchError(this.handleError('getToolById', []))
    );
  }

  getToolMetricsById(url: string): Observable<Metrics[]> {
  this.metrics = this.http.get<Metrics[]>(url);
  return this.metrics
    .pipe(
      catchError(this.handleError('getToolMetricsById', []))
    );
  }

  getToolWithFilters(filter: Filter, skip: number, limit: number) {
    const headers = new HttpHeaders().set('Range' , 'items=' + skip + '-' + limit);
    let params = new HttpParams().set('projection', 'description').append('projection' , 'web');
    if ( filter.type != null) {
      for ( const x of filter.type) {
        params = params.append('type', x);
      }
    }
    switch (filter.filter) {
      case 'Name':
        this.res = this.http.get(this.toolUrl, {
          headers: headers,
          params: params = params.set('name', filter.text),
          observe: 'response',
        });
        break;
      case 'Description':
        this.res = this.http.get(this.toolUrl, {
          headers: headers,
          params: params = params.set('description', filter.text),
          observe: 'response',
        });
        break;
      default:
        this.res = this.http.get(this.toolUrl, {
          headers: headers,
          params: params = params.set('text', filter.text),
          observe: 'response',
        });
        break;
    }
    return this.res
    .pipe(
      catchError(this.handleError('getToolById', []))
    );
  }

  getStats(): Observable <any> {
    return this.http.get('https://' + this.dev + '.bsc.es/monitor/rest/statistics');
  }


  private handleError<T> (operation = 'operation', result?: T) {
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
