import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { environment } from '../../../environments/environment';

@Injectable()
export class ScientificRestApiService {
  private communities: Observable<any[]>;
  private datasets: Observable<any[]>;
  private url = environment.OPENEBENCH_REST_API_URL;

  constructor(private http: HttpClient) {}

  getCommunities(): Observable<any[]> {
    this.communities = this.http.get<any[]>(this.url + '/Community.json');
    return this.communities.pipe(
      catchError(this.errorHandler('getCommunities', []))
    );
  }

  getDatasets(): Observable<any[]> {
    this.datasets = this.http.get<any[]>(this.url + '/Dataset.json');
    return this.datasets.pipe(catchError(this.errorHandler('getDatasets', [])));
  }

  getBenchmarkingEvents(id: string): Observable<any[]> {
    this.communities = this.http.get<any[]>(
      this.url + '/BenchmarkingEvent?query=' + id + '&fmt=json'
    );
    return this.communities.pipe(
      catchError(this.errorHandler('getBenchmarkingEvents', []))
    );
  }

  getChallenge(id: string): Observable<any[]> {
    this.communities = this.http.get<any[]>(
      this.url + '/Challenge?query=' + id + '&fmt=json'
    );
    return this.communities.pipe(
      catchError(this.errorHandler('getChallenge', []))
    );
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
