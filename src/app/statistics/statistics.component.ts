import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import * as c3 from 'c3';
import * as d3 from 'd3';
import { StatisticsService } from '../services/statistics.service';

export interface Statistics {
  tools: any;
  publications: any;
  bioschemas: any;
  opensource: any;
}

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css'],
})
export class StatisticsComponent implements OnInit {
  pageTitle = 'Statistics';
  private data: any;
  public loading = false;

  constructor(
    private statsService: StatisticsService,
    private titleService: Title
  ) {}

  ngOnInit() {
    this.titleService.setTitle(this.pageTitle);
    this.fetchdata();
  }

  /**
   * Fetch the data and generates the statistics charts.
   */
  private fetchdata() {
    this.loading = true;
    this.statsService.getStats().subscribe(
      // 1
      (data) => {
        this.data = data;
      },
      // 2
      (err) => console.log(err),
      // 3
      () => {
        const statistics: Statistics = {
          tools: this.data['/@timestamp'],
          publications: this.data['/project/publications'],
          bioschemas: this.data['/project/website/bioschemas:true'],
          opensource: this.data['/project/license/open_source:true'],
        };
        this.generateChart(statistics);
      }
    );
  }

  /**
   * Helper method for the fetchdata method.
   */
  private generateChart(data: Statistics) {
    this.loading = false;

    // Publications chart
    c3.generate({
      size: {
        height: 340,
        width: 680,
      },
      title: {
        text: 'Publications',
      },
      data: {
        columns: [
          ['Tools with no publications ', data.tools - data.publications],
          ['Tools with publications', data.publications],
        ],
        type: 'pie',
      },
      tooltip: {
        format: {
          value: (value) =>
            `${d3.format(',')(Number(value))} / ${d3.format(',')(data.tools)}`,
        },
      },
      bindto: '#toolspublications',
    });

    // Bioschemas chart
    c3.generate({
      size: {
        height: 340,
        width: 680,
      },
      title: {
        text: 'Bioschemas',
      },
      data: {
        columns: [
          ['Tools with bioschemas', data.bioschemas],
          ['Tools without bioschemas ', data.tools - data.bioschemas],
        ],
        type: 'pie',
      },
      tooltip: {
        format: {
          value: (value) =>
            `${d3.format(',')(Number(value))} / ${d3.format(',')(data.tools)}`,
        },
      },
      bindto: '#toolsbioschemas',
    });

    // Opensource tools chart
    c3.generate({
      size: {
        height: 340,
        width: 680,
      },
      data: {
        columns: [
          ['Tools with opensource license', data.opensource],
          ['Tools without opensource license ', data.tools - data.opensource],
        ],
        type: 'pie',
      },
      title: {
        text: 'Open Source',
      },
      tooltip: {
        format: {
          value: (value) =>
            `${d3.format(',')(Number(value))} / ${d3.format(',')(data.tools)}`,
        },
      },
      bindto: '#toolsopensource',
    });
  }
}
