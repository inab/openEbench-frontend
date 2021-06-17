import { Component, Input, OnInit, AfterViewInit } from '@angular/core';
import { run_summary_table } from 'src/app/components/scientific/shared/benchmarkingTable';
import { Apollo, gql } from 'apollo-angular';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-challenge-list',
  templateUrl: './challenge-list.component.html',
  styleUrls: ['./challenge-list.component.css'],
})
export class ChallengeListComponent
  implements OnInit, AfterViewInit
{
  @Input() beventsid: string;
  public challengeTrigger = new Subject();
  public dtOptions: DataTables.Settings = {};
  private selectedChallenges = [];
  public challengeGraphql: any;
  public loading = true;
  public error: any;
  public classifier: any;
  public getChallenges = gql`
    query getChallenges($benchmarking_event_id: String!) {
      getChallenges(
        challengeFilters: { benchmarking_event_id: $benchmarking_event_id }
      ) {
        _id
        name
        orig_id
        acronym
      }
    }
  `;

  constructor(private apollo: Apollo) {}

  ngOnInit() {
    this.apollo
      .watchQuery({
        query: this.getChallenges,
        variables: { benchmarking_event_id: this.beventsid },
      })
      .valueChanges.subscribe((result) => {
        this.challengeGraphql = result.data;
        this.loading = result.loading;
        this.error = result.errors;
        setTimeout(() => {
          this.challengeTrigger.next();
        });
      });
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      run_summary_table();
    }, 1000);
  }

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
  }

  filterChallenges(id: any) {
    run_summary_table(this.selectedChallenges, id);
  }

  deselectAll() {
    this.selectedChallenges = [];
  }
}
