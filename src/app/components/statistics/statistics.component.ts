import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import * as c3 from 'c3';
import * as d3 from 'd3';
import { Statistics } from 'src/app/interfaces';
import { StatisticsService } from '../../services/statistics.service';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css'],
})
export class StatisticsComponent implements OnInit {
  pageTitle = 'Statistics';
  loading = true;

  constructor(
    private statsService: StatisticsService,
    private titleService: Title
  ) {}

  ngOnInit() {
    this.titleService.setTitle(`${this.pageTitle} | OpenEBench`);
    this.fetchdata();
  }

  /**
   * Fetch the data and generates the statistics charts.
   */
  private fetchdata() {
    this.statsService.getStats().subscribe((response) => {
      this.generateChart({
        tools: response['/@timestamp'],
        publications: response['/project/publications'],
        bioschemas: response['/project/website/bioschemas:true'],
        opensource: response['/project/license/open_source:true'],
      });
    });
  }

  /**
   * Helper method for the fetchdata method.
   */
  private generateChart({
    tools,
    publications,
    bioschemas,
    opensource,
  }: Statistics) {
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
          ['Tools with no publications ', tools - publications],
          ['Tools with publications', publications],
        ],
        type: 'pie',
      },
      tooltip: {
        format: {
          value: (value) =>
            `${d3.format(',')(Number(value))} / ${d3.format(',')(tools)}`,
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
          ['Tools with bioschemas', bioschemas],
          ['Tools without bioschemas ', tools - bioschemas],
        ],
        type: 'pie',
      },
      tooltip: {
        format: {
          value: (value) =>
            `${d3.format(',')(Number(value))} / ${d3.format(',')(tools)}`,
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
          ['Tools with opensource license', opensource],
          ['Tools without opensource license ', tools - opensource],
        ],
        type: 'pie',
      },
      title: {
        text: 'Open Source',
      },
      tooltip: {
        format: {
          value: (value) =>
            `${d3.format(',')(Number(value))} / ${d3.format(',')(tools)}`,
        },
      },
      bindto: '#toolsopensource',
    });

    this.loading = false;
  }
}
