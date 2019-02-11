import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
// import { Communities } from './communities';

/**
 * scinetific service
 */
@Injectable()
export class ScientificService {

  /**
   * communities
   */
  private communities: Observable<any[]>;
  /**
   * datasets
   */
  private datasets: Observable<any[]>;
  /**
   * production
   */
  private production = 'openebench';
  /**
   * development
   */
  private dev = 'dev-openebench';
  /**
   * community url
  */
  private url = 'https://' + this.production + '.bsc.es/api/scientific';

  /**
   * constructor
   */
  constructor(private http: HttpClient) { }

  /**
   * gets the communities
   */
  getCommunities(): Observable<any[]> {
    this.communities = this.http.get<any[]>(this.url + '/Community.json');
    return this.communities
      .pipe(
        catchError(this.handleError('getCommunities', []))
      );
  }
  /**
   * gets datasets
   */
  getDatasets(): Observable<any[]> {
    this.datasets = this.http.get<any[]>(this.url + '/Dataset.json');
    return this.datasets
      .pipe(
        catchError(this.handleError('getDatasets', []))
      );
  }
  /**
   * gets benchmakring events
   */
  getBenchmarkingEvents(id: string): Observable<any[]> {
    this.communities = this.http.get<any[]>(this.url + '/BenchmarkingEvent?query=' + id + '&fmt=json');
    return this.communities

      .pipe(
        catchError(this.handleError('getBenchmarkingEvents', []))
      );
  }
  /**
   * gets challenges
   */
  getChallenge(id: string): Observable<any[]> {
    this.communities = this.http.get<any[]>(this.url + '/Challenge?query=' + id + '&fmt=json');
    return this.communities

      .pipe(
        catchError(this.handleError('getChallenge', []))
      );
  }

  /**
   * error handleing
   */
  private handleError<T>(operation = 'operation', result?: T) {
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
