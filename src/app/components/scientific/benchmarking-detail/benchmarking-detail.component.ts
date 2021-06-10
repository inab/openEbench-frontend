import { Component, OnInit } from '@angular/core';
import { load_scatter_visualization } from '../shared/benchmarkingChart_scatter';
import { load_bars_visualization } from '../shared/benchmarkingChart_bar';
import { ActivatedRoute } from '@angular/router';
import { Apollo, gql } from 'apollo-angular';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-benchmarking-detail',
  templateUrl: './benchmarking-detail.component.html',
  styleUrls: ['./benchmarking-detail.component.css'],
})
export class BenchmarkingDetailComponent implements OnInit {
  data: any;
  challengesGraphql: any;
  datasetsGraphql: any;
  public htmlToAdd: any;
  public id: string;
  public bm: any[];
  public loading = true;
  public error: any;
  public getChallenges = gql`
    query getChallenges($id: String!) {
      getChallenges(challengeFilters: { id: $id }) {
        _id
        name
        acronym
        metrics_categories {
          metrics {
            metrics_id
            tool_id
          }
        }
      }
    }
  `;
  public getDatasets = gql`
    query getDatasets($id: String!) {
      getDatasets(datasetFilters: { challenge_id: $id, type: "aggregation" }) {
        datalink {
          inline_data
        }
        _id
      }
    }
  `;

  constructor(
    private route: ActivatedRoute,
    private apollo: Apollo,
    private titleService: Title
  ) {}

  ngOnInit() {
    this.id = this.getParam('bchallengeid');
    this.apollo
      .watchQuery({
        query: this.getChallenges,
        variables: { id: this.id },
      })
      .valueChanges.subscribe((result) => {
        this.challengesGraphql = result.data;
        this.loading = result.loading;
        this.error = result.errors;
        this.titleService.setTitle(result.data['getChallenges'][0].name);
      }),
      this.apollo
        .watchQuery({
          query: this.getDatasets,
          variables: { id: this.id },
        })
        .valueChanges.subscribe((result) => {
          this.datasetsGraphql = result.data;
          this.loading = result.loading;
          this.error = result.errors;
        });
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.loadCharts(this.datasetsGraphql);
    }, 500);
  }

  private loadCharts(data) {
    switch (data.getDatasets[0].datalink.inline_data.visualization.type) {
      case '2D-plot':
        load_scatter_visualization();
        break;
      case 'bar-plot':
        load_bars_visualization();
        break;
      default:
        break;
    }
  }

  private getParam(param: string): string {
    return this.route.snapshot.paramMap.get(param);
  }

  public tabClick(event: Object): void {
    $('.benchmarkingChart_scatter').html('');
    $('.benchmarkingChart_bars').html('');
    this.loadCharts(this.datasetsGraphql);
  }
}
