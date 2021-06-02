import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';
import * as $ from 'jquery';

@Injectable()
export class ElasticsearchService {
  public ES_URL = environment.ES_URL;
  public PARAMS = new HttpParams({});

  constructor(private http: HttpClient) {}

  search(term: string) {
    if (term === '') {
      return of([]);
    }
    return this.http
      .get(this.ES_URL, { params: this.PARAMS.set('text', term) })
      .pipe(
        map((response) =>
          $.map(response['hits'].hits, function (tool) {
            const t = [];
            t.push(tool['_source'].name);
            return t;
          })
        )
      );
  }
}
