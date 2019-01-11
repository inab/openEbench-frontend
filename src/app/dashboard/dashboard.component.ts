import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import * as $ from 'jquery';


import {Observable, of} from 'rxjs';
import {debounceTime, distinctUntilChanged, map, tap, switchMap, catchError} from 'rxjs/operators';
import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


/**
 * Elastic search url to server
 */
const ES_URL = 'https://dev-openebench.bsc.es/esapi/filter';

/**
 * http params for the search
 */
const PARAMS = new HttpParams({});

/**
 * Injectable
 */
@Injectable()
export class OpebService {
  /**
   * Constructor for the injectable class
   */
  constructor(private http: HttpClient) {}

  /**
   * Serch function
   */
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

/**
 * Dashboard component
 */
@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    providers: [OpebService],
    styleUrls: ['./dashboard.component.css']
  })

export class DashboardComponent {
  /**
   * model
   */
  model: any;
  /**
   * searching
   */
  searching = false;
  /**
   * searchFailed
   */
  searchFailed = false;

  /**
   * Constructor
   */
  constructor(private _service: OpebService, private router: Router) { }
/**
 * search for elastic search
 */
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

/**
 * Naviage to searched tool via URL
 */
  private goToToolsPage(term: string) {
    this.router.navigate(['/tool'], { queryParams: {search: term}, queryParamsHandling: '' });
  }
/**
 * Submit the search
 */
  public submitForm() {
    this.goToToolsPage(this.model);
  }



}
