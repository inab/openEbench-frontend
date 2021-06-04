import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { AppModule } from '../app.module';
import { environment } from '../../environments/environment';


/**
 * injectable statistics
 */
@Injectable()
export class StatisticsService {

  /**
   * count
   */
  public count: string;
  /**
   * url
   */
  private URL = environment.METRICS_STATISTICS_URL;
  /**
   * constructor
   */
  constructor(private http: HttpClient) { }

  /**
   * get stats from server
   */
  getStats(): Observable<any> {

    return this.http.get(this.URL);
  }

  /**
   * error handle
   */
  private errorHandler<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure

      console.error(error); // log to console instead
      return of(result as T);
    };
  }
}
