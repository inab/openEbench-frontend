import { Component, OnInit } from '@angular/core';
import { ScientificService } from '../shared/scientific.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { Subject } from 'rxjs';


/**
 * component
 */
@Component({
  selector: 'app-benchmarking-list',
  templateUrl: './benchmarking-list.component.html',
  styleUrls: ['./benchmarking-list.component.css']
})
export class BenchmarkingListComponent implements OnInit {

  public datasetTrigger = new Subject();
  public toolTrigger = new Subject();


  public dtOptions: DataTables.Settings = {};
  /**
   * id
   */
  private id: string;
  /**
   * bm
   */
  public bm: any[];
  /**
   * constructor
   */
  /**
   * BenchmarkingEvents by community id using Graphql
   */
  public bEventsGraphql: any;

  public datasetsGraphql: any;

  public toolsGraphql: any;

  public communitiesGraphql: any;
  /**
   * loading property for graphql
   */
  public loading = true;
  /**
   * error property for graphql
   */
  public error: any;

  public currentUrl;

  public getCommunities = gql`
    query getCommunities($community_id: String!){
      getCommunities (communityFilters:{id:$community_id}){
        name
        acronym
        description
        status
      }
    }
  `;

  public getBenchmarkingEvents = gql`
    query getBenchmarkingEvents($community_id: String!){
      getBenchmarkingEvents(benchmarkingEventFilters: {community_id: $community_id}) {
        _id
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

  // public getBenchmarkingEvents = gql`
  //   query getBenchmarkingEvents {
  //     getBenchmarkingEvents {
  //       _id
  //       name
  //       url
  //       challenges {
  //         _id
  //         name
  //         url
  //       }
  //     }
  //   }
  // `;

  public getDatasets = gql`
    query getDatasets($community_id: String!){
      getDatasets (datasetFilters: {community_id: $community_id , visibility: "public"}) {
        name
        type
      }
    }
  `;


  public getTools = gql`
  query getTools($community_id: String!){
    getTools(toolFilters:{community_id: $community_id}) {
      _id
      name
      status
      description
    }
  }
`;



  constructor(
    private scientificService: ScientificService,
    private route: ActivatedRoute,
    private router: Router,
    private apollo: Apollo,
  ) { }
  /**
   * initializer
   */
  ngOnInit() {
    this.id = this.getParam('id');
    this.dtOptions = {
      pagingType: 'full_numbers',

    };
    this.apollo.watchQuery({
        query: this.getBenchmarkingEvents,
        variables: { community_id:  this.id }
      })
      .valueChanges.subscribe(result => {
        this.bEventsGraphql = result.data;
        this.loading = result.loading;
        this.error = result.errors;
      });

    this.apollo.watchQuery({
      query: this.getCommunities,
      variables: { community_id:  this.id }
    })
    .valueChanges.subscribe(result => {
      this.communitiesGraphql = result.data;
      this.loading = result.loading;
      this.error = result.errors;
    });


    this.apollo.watchQuery({
        query: this.getDatasets,
        variables: { community_id: this.id }
      })
      .valueChanges.subscribe(result => {
        this.datasetsGraphql = result.data;
        this.loading = result.loading;
        this.error = result.errors;
        setTimeout(() => {
          this.datasetTrigger.next();
        });
      });


      this.apollo.watchQuery({
        query: this.getTools,
        variables: { community_id: this.id }
      })
      .valueChanges.subscribe(result => {
        this.toolsGraphql = result.data;
        this.loading = result.loading;
        this.error = result.errors;
        setTimeout(() => {
          this.toolTrigger.next();
        });
      });
    // this.scientificService.getBenchmarkingEvents(this.id).subscribe(event => { this.bm = event; });
    this.currentUrl = this.router.url;
  }
  /**
   * helper method to get params
   */
  private getParam(param: string): string {
    return this.route.snapshot.paramMap.get(param);
  }

  openChallenges(id) {
    this.router.navigate([this.currentUrl, id], { skipLocationChange: true });
  }

  closeChallenges() {
    this.router.navigate([this.currentUrl], { skipLocationChange: true });
  }


}
