import { Injectable } from '@angular/core';
import { Observable ,  of } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { AppModule } from '../app.module';


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
   * production
   */
  private production = 'openebench';
  /**
   * development
   */
  private dev = 'dev-openebench';

  /**
   * url
   */
  private URL = 'https://' + this.dev + '.bsc.es/monitor/rest/metrics/statistics';
/**
 * constructor
 */
  constructor(private http: HttpClient) { }

/**
 * get stats from server
 */
  getStats(): Observable <any> {
    return this.http.get(this.URL);
  }

/**
 * error handle
 */
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
