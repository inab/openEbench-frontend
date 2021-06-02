import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { Observable, of } from 'rxjs';
import {
  debounceTime,
  distinctUntilChanged,
  tap,
  switchMap,
  catchError,
} from 'rxjs/operators';
import { ElasticsearchService } from './elasticsearch.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  providers: [ElasticsearchService],
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {
  model: any;
  searching = false;
  searchFailed = false;
  pageTitle = 'OpenEBench';

  constructor(
    private elasticsearchService: ElasticsearchService,
    private router: Router,
    private titleService: Title
  ) {}

  ngOnInit() {
    this.titleService.setTitle(this.pageTitle);
  }

  /**
   * Search for elasticsearch.
   */
  search = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      tap(() => (this.searching = true)),
      switchMap((term) =>
        this.elasticsearchService.search(term).pipe(
          tap(() => (this.searchFailed = false)),
          catchError(() => {
            this.searchFailed = true;
            return of([]);
          })
        )
      ),
      tap(() => (this.searching = false))
    );

  /**
   * Naviage to searched tool via URL
   */
  private goToToolsPage(term: string) {
    this.router.navigate(['/tool'], {
      queryParams: { search: term },
      queryParamsHandling: '',
    });
  }

  public submitForm() {
    this.goToToolsPage(this.model);
  }
}
