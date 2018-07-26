import { Injectable } from '@angular/core';
import { Observable ,  of } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { catchError } from 'rxjs/operators';


import { Communities } from './communities';

@Injectable()
export class ScientificService {

  private  communities: Observable<any[]>;
  private production = 'openebench';
  private dev = 'dev-openebench';
  private communityUrl = 'https://' + this.production + '.bsc.es/api/scientific';

  constructor(private http: HttpClient) { }

  getCommunities(): Observable<any[]> {
    this.communities = this.http.get<any[]>(this.communityUrl + '/Community.json');
    return this.communities
    .pipe(
      catchError(this.handleError('getCommunities', []))
    );
  }

  getBenchmarkingEvents(id: string): Observable<any[]> {
    this.communities = this.http.get<any[]>(this.communityUrl + '/BenchmarkingEvent?query=' + id + '&fmt=json');
    return this.communities

    .pipe(
      catchError(this.handleError('getBenchmarkingEvents', []))
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
