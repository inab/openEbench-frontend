import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Apollo, gql } from 'apollo-angular';
import { Subject } from 'rxjs';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-benchmarking-list',
  templateUrl: './benchmarking-list.component.html',
  styleUrls: ['./benchmarking-list.component.css'],
})
export class BenchmarkingListComponent implements OnInit {
  public datasetTrigger = new Subject();
  public toolTrigger = new Subject();
  public dtOptions: DataTables.Settings = {};
  private id: string;
  public bm: any[];
  public bEventsGraphql: any; // BenchmarkingEvents by community id using Graphql
  public datasetsGraphql: any;
  public toolsGraphql: any;
  public communitiesGraphql: any;
  public loading = true;
  public error: any;
  public currentUrl: string;
  public getCommunities = gql`
    query getCommunities($community_id: String!) {
      getCommunities(communityFilters: { id: $community_id }) {
        name
        acronym
        description
        status
        links {
          uri
          comment
        }
      }
    }
  `;
  public getBenchmarkingEvents = gql`
    query getBenchmarkingEvents($community_id: String!) {
      getBenchmarkingEvents(
        benchmarkingEventFilters: { community_id: $community_id }
      ) {
        _id
        dates {
          creation
        }
        name
        url
        challenges {
          _id
          name
          url
        }
      }
    }
  `;
  public getDatasets = gql`
    query getDatasets($community_id: String!) {
      getDatasets(
        datasetFilters: { community_id: $community_id, visibility: "public" }
      ) {
        name
        type
        datalink {
          uri
        }
      }
    }
  `;
  public getTools = gql`
    query getTools($community_id: String!) {
      getTools(toolFilters: { community_id: $community_id }) {
        _id
        name
        status
        description
        registry_tool_id
      }
    }
  `;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private apollo: Apollo,
    private titleService: Title
  ) {}

  ngOnInit() {
    this.id = this.getParam('id');
    this.dtOptions = {
      pagingType: 'full_numbers',
    };
    this.apollo
      .watchQuery({
        query: this.getBenchmarkingEvents,
        variables: { community_id: this.id },
      })
      .valueChanges.subscribe((result) => {
        this.bEventsGraphql = result.data;
        this.loading = result.loading;
        this.error = result.errors;
        this.bEventsGraphql['getBenchmarkingEvents'].sort(this.compare);
      });
    this.apollo
      .watchQuery({
        query: this.getCommunities,
        variables: { community_id: this.id },
      })
      .valueChanges.subscribe((result) => {
        this.communitiesGraphql = result.data;
        this.loading = result.loading;
        this.error = result.errors;
        this.titleService.setTitle(result.data['getCommunities'][0].name);
      });
    this.apollo
      .watchQuery({
        query: this.getDatasets,
        variables: { community_id: this.id },
      })
      .valueChanges.subscribe((result) => {
        this.datasetsGraphql = result.data;
        this.loading = result.loading;
        this.error = result.errors;
        setTimeout(() => {
          this.datasetTrigger.next();
        });
      });
    this.apollo
      .watchQuery({
        query: this.getTools,
        variables: { community_id: this.id },
      })
      .valueChanges.subscribe((result) => {
        this.toolsGraphql = result.data;
        this.loading = result.loading;
        this.error = result.errors;
        setTimeout(() => {
          this.toolTrigger.next();
        });
      });
    this.currentUrl = this.router.url;
  }

  compare(a, b) {
    if (a.dates.creation < b.dates.creation) {
      return 1;
    }
    if (a.dates.creation > b.dates.creation) {
      return -1;
    }
    return 0;
  }

  private getParam(param: string): string {
    return this.route.snapshot.paramMap.get(param);
  }
}
