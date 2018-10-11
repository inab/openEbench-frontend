import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import * as $ from 'jquery';


import {Observable, of} from 'rxjs';
import {debounceTime, distinctUntilChanged, map, tap, switchMap, catchError} from 'rxjs/operators';
import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


//   fromObject: {
//     action: 'opensearch',
//     format: 'json',
//     origin: '*'
//   }
// });
const ES_URL = 'http://localhost:8080/filter';
const PARAMS = new HttpParams({});

@Injectable()
export class OpebService {
  constructor(private http: HttpClient) {}

  search(term: string) {
    if (term === '') {
      return of([]);
    }

    return this.http
      .get(ES_URL, {params: PARAMS.set('text', term)}).pipe(
        map(response =>
          $.map(response['hits'].hits, function(tool) {
            const t = [];
            t.push(tool['_source'].name);
            return t;
          }
        )
      ));
  }
}

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    providers: [OpebService],
    styleUrls: ['./dashboard.component.css']
  })

export class DashboardComponent {
  model: any;
  searching = false;
  searchFailed = false;

  constructor(private _service: OpebService, private router: Router) { }

  search = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      tap(() => this.searching = true),
      switchMap(term =>
        this._service.search(term).pipe(
          tap(() => this.searchFailed = false),
          catchError(() => {
            this.searchFailed = true;
            return of([]);
          }))
      ),
      tap(() => this.searching = false)
    )


  private goToToolsPage(term: string) {
    this.router.navigate(['/tool'], { queryParams: {search: term}, queryParamsHandling: '' });
  }

  public submitForm() {
    this.goToToolsPage(this.model);
  }



}
