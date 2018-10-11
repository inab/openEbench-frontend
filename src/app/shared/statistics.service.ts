import { Injectable } from '@angular/core';
import { Observable ,  of } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { AppModule } from '../app.module';

// import { Statistics } from './statistics';


@Injectable()

export class StatisticsService {




  public count: string;
  private production = 'openebench';
  private dev = 'dev-openebench';
  private URL = 'https://' + this.dev + '.bsc.es/monitor/rest/metrics/statistics';

  constructor(private http: HttpClient) { }


  getStats(): Observable <any> {
    return this.http.get(this.URL);
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
