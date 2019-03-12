import { Component, OnInit } from '@angular/core';
import { ScientificService } from '../shared/scientific.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';

/**
 * component
 */
@Component({
  selector: 'app-benchmarking-list',
  templateUrl: './benchmarking-list.component.html',
  styleUrls: ['./benchmarking-list.component.css']
})
export class BenchmarkingListComponent implements OnInit {
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
  /**
   * loading property for graphql
   */
  public loading = true;
  /**
   * error property for graphql
   */
  public error: any;

  public getBEventsByCommunityId = gql`
    query getBEventsByCommunityId($community_id: String!){
      getBEventsByCommunityId (community_id: $community_id) {
        _id
        name
        url
        challenges {
          _id
          url
        }
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
    this.apollo
      .watchQuery({
        query: this.getBEventsByCommunityId,
        variables: { community_id: this.id}
      })
      .valueChanges.subscribe(result => {
        this.bEventsGraphql = result.data;
        this.loading = result.loading;
        this.error = result.errors;
      });


    this.scientificService.getBenchmarkingEvents(this.id).subscribe(event => { this.bm = event; });
  }
  /**
   * helper method to get params
   */
  private getParam(param: string): string {
    return this.route.snapshot.paramMap.get(param);
  }


}
