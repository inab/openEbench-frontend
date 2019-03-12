import { Component, OnInit, Injectable } from '@angular/core';
import { ScientificService } from '../shared/scientific.service';
import {Apollo} from 'apollo-angular';
import gql from 'graphql-tag';

/**
 * scientific list
 */
@Component({
  selector: 'app-scientific-list',
  templateUrl: './scientific-list.component.html',
  styleUrls: ['./scientific-list.component.css']
})
export class ScientificListComponent implements OnInit {
/**
 * communities
 */
  public communities: any[];
  /**
   * datasets
   */
  public datasets: any[];
  /**
   * data
   */
  public data = [];

  /**
   * Communities using Graphql
   */
  public communitiesGraphql: any;
  /**
   * loading property for graphql
   */
  public loading = true;
  /**
   * error property for graphql
   */
  public error: any;


  public getAllCommunities = gql`
  {
    getAllCommunities {
      _id
      name
      acronym
      links{
        label
        uri
      }
    }
  }
` ;

/**
 * constructor
 */
  constructor(
    private scientificService: ScientificService,
    private apollo: Apollo,

  ) { }
/**
 * initializer
 */
  ngOnInit() {
    this.apollo
      .watchQuery({
        query: this.getAllCommunities
      })
      .valueChanges.subscribe(result => {
        this.communitiesGraphql = result.data;
        this.loading = result.loading;
        this.error = result.errors;
      });


    // this.scientificService.getCommunities().subscribe(event => {this.communities = event;  console.log(event); });
    this.scientificService.getDatasets().subscribe(event => { this.datasets = event ;
        for (const a of this.datasets['Dataset']) {
          if (a.type === 'metrics_reference') {
            this.data.push(a);
          }
        }
        // console.log(this.data);
    });

  // check(id) {
  //   return id.split(':')[1] === 'CAMEO' ? true : false;
  // }


  }
}
