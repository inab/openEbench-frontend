import { Injectable } from '@angular/core';
import { Observable ,  of } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { catchError } from 'rxjs/operators';


import { Communities } from './communities';

@Injectable()
export class ScientificService {

  private  communities: Observable<any[]>;
  private  datasets: Observable<any[]>;
  private production = 'openebench';
  private dev = 'dev-openebench';
  private communityUrl = 'https://' + this.dev + '.bsc.es/api/scientific';
  private datasetUrl = 'https://' + this.dev + '.bsc.es/api/scientific';

  constructor(private http: HttpClient) { }

  getCommunities(): Observable<any[]> {
    this.communities = this.http.get<any[]>(this.communityUrl + '/Community.json');
    return this.communities
    .pipe(
      catchError(this.handleError('getCommunities', []))
    );
  }

  getDatasets(): Observable<any[]> {
    this.datasets = this.http.get<any[]>(this.datasetUrl + '/Dataset.json');
    return this.datasets
    .pipe(
      catchError(this.handleError('getDatasets', []))
    );
  }

  getBenchmarkingEvents(id: string): Observable<any[]> {
    console.log(this.communityUrl + '/BenchmarkingEvent?query=' + id + '&fmt=json');
    this.communities = this.http.get<any[]>(this.communityUrl + '/BenchmarkingEvent?query=' + id + '&fmt=json');
    return this.communities

    .pipe(
      catchError(this.handleError('getBenchmarkingEvents', []))
    );
  }

  getChallenge(id: string): Observable<any[]> {
    console.log(this.communityUrl + '/Challenge?query=' + id + '&fmt=json');
    this.communities = this.http.get<any[]>(this.communityUrl + '/Challenge?query=' + id + '&fmt=json');
    return this.communities

    .pipe(
      catchError(this.handleError('getChallenge', []))
    );
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
