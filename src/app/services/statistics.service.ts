import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable()
export class StatisticsService {
  public count: string;
  private URL = environment.METRICS_STATISTICS_URL;

  constructor(private http: HttpClient) { }

  getStats(): Observable<any> {
    return this.http.get(this.URL);
  }
}
