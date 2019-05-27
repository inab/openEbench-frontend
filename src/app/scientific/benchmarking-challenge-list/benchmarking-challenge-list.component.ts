import { Component, Input, OnInit, AfterViewInit } from '@angular/core';
import { ScientificService } from '../shared/scientific.service';
import { ActivatedRoute } from '@angular/router';
// import { load_table } from '../shared/benchmarkingTable.js';
import { load_table } from '/home/vsundesh/public_html/bench_event_table/build/build.js';
// declare let load_table: any;
import { MatPaginator } from '@angular/material';
import { ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormsModule } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { SourceListMap } from 'source-list-map';
import { timeout } from 'q';
import { Subject } from 'rxjs';


/**
 * benchmarking challenge list component
 */
@Component({
  selector: 'app-benchmarking-challenge-list',
  templateUrl: './benchmarking-challenge-list.component.html',
  styleUrls: ['./benchmarking-challenge-list.component.css']
})
export class BenchmarkingChallengeListComponent implements OnInit, AfterViewInit {

  public challengeTrigger = new Subject();


  public dtOptions: DataTables.Settings = {};
  /**
   * beventsid
   */
  @Input() beventsid: string;
  /**
   * selected challanges array
   */
  private selectedChallenges: any;

  public getChallenges = gql`
  query getChallenges($benchmarking_event_id: String!){
    getChallenges(challengeFilters:{benchmarking_event_id: $benchmarking_event_id}) {
     _id
     name
     orig_id
     acronym
    }
  }
`;

  public challengeGraphql: any;

  /**
   * loading property for graphql
   */
  public loading = true;
  /**
   * error property for graphql
   */
  public error: any;

  public classifier: any;
  /**
   * constructor
   */
  constructor(
    private scientificService: ScientificService,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private apollo: Apollo,
  ) { }

  /**
   * initializer
   */
  ngOnInit() {
    this.selectedChallenges = [];
    // console.log(this.testid);
    // this.beventsid = this.getParam('beventsid');

    this.apollo.watchQuery({
      query: this.getChallenges,
      variables: { benchmarking_event_id:  this.beventsid }
    })
    .valueChanges.subscribe(result => {
      this.challengeGraphql = result.data;
      this.loading = result.loading;
      this.error = result.errors;
      setTimeout(() => {
        this.challengeTrigger.next();
      });
    });
  }

  /**
   * toogle sellec<
   */
  toogle(event, value) {
    if (event.checked) {
      this.selectedChallenges.push(value);
    }
    if (!event.checked) {
      const index = this.selectedChallenges.indexOf(value);
      if (index > -1) {
        this.selectedChallenges.splice(index, 1);
      }
    }
    // console.log(this.selectedChallenges);
    this.classifier = document.getElementById('bench_dropdown_list')['value'];
  }

  filterChallenges() {
    load_table(this.selectedChallenges, this.classifier);
  }
  /**
   * after view init life cycle
   */
  ngAfterViewInit(): void {
    load_table();
  }

  deselectAll() {
    this.selectedChallenges = [];
  }
  /**
   * helper method to get params
   */
  private getParam(param: string): string {
    return this.route.snapshot.paramMap.get(param);
  }
}
