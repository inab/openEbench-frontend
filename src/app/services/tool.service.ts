import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Tool, Metrics, Filter } from '../interfaces';

@Injectable()
export class ToolService {
  public count: string;

  constructor(private http: HttpClient) {}

  getToolById(id: string): Observable<Tool[]> {
    return this.http.get<Tool[]>(`${environment.TOOL_SERVICE_URL}?id=${id}`);
  }

  getToolMetricsByUrl(metricsUrl: string): Observable<Metrics[]> {
    return this.http.get<Metrics[]>(metricsUrl);
  }

  getToolWithFilters(filter: Filter, skip: number, limit: number): any {
    const headers = new HttpHeaders().set('Range', `items=${skip}-${limit}`);
    const params = new HttpParams();
    params.set('projection', 'description');
    params.append('projection', 'web');
    filter.type?.forEach((type) => {
      params.append('type', type);
    });
    const filterParam = filter.filter.toString().toLowerCase() || 'text';
    return this.http.get<any>(environment.TOOL_SEARCH_URL, {
      headers: headers,
      params: params.set(filterParam, filter.text).set('label', filter.label),
      observe: 'response',
    });
  }

  getGlobalStats(): Observable<any> {
    return this.http.get(environment.TOOL_STATISTICS_URL);
  }
}
