import { Component, OnInit } from '@angular/core';
import * as c3 from 'c3';
import * as d3 from 'd3';
import { StatisticsService } from '../shared/statistics.service';
// import { Statistics } from '../shared/statistics';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent implements OnInit {

private data: any;
public statistics: any;
public event = false;


  constructor(
    private statsService: StatisticsService,
  ) { }

  ngOnInit() {
  this.fetchdata();
  }

  private fetchdata() {
    this.statsService.getStats().subscribe(data => {
      this.data = data;

      this.statistics = {
          'tools' : this.data['/@timestamp/'],
          'publications' : this.data['/project/publications/'],
          'bioschemas' : this.data['/project/website/bioschemas/'],
          'opensource' : this.data['/project/license/open_source/'],
      };
    this.generateChart(this.statistics);
    });
  }

  private generateChart(data) {
      this.event = true;
    c3.generate({

        data: {
            columns: [
                ['Tools with publications', data.publications],
                ['Tools with no publications ', data.tools - data.publications]
            ],
            type : 'pie',
        },
        bindto: '#toolspublications',
    });
    c3.generate({

        data: {
            columns: [
                ['Tools with bioschemas', data.bioschemas],
                ['Tools without bioschemas ', data.tools - data.bioschemas]
            ],
            type : 'pie',
        },
        bindto: '#toolsopensource',
    });
  c3.generate({

        data: {
            columns: [
                ['Tools with opensource license', data.opensource],
                ['Tools without opensource license ', data.tools - data.opensource]
            ],
            type : 'pie',
        },
        bindto: '#toolsbioschemas',
    });
  }

}
