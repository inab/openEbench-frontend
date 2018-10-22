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


  constructor( private statsService: StatisticsService) { }

  ngOnInit() {
    // this.keycloakService.keycloakEvents$.subscribe(keycloakEvent => {
        // Add event handler
        // this.keycloakService.login();

    //   });
      this.fetchdata();
  }

  private fetchdata() {
    this.statsService.getStats().subscribe(data => {
      this.data = data;
      this.statistics = {
          'tools' : this.data['/@timestamp'],
          'publications' : this.data['/project/publications'],
          'bioschemas' : this.data['/project/website/bioschemas:true'],
          'opensource' : this.data['/project/license/open_source:true'],
      };
    this.generateChart(this.statistics);
    });
  }

  private generateChart(data) {
      this.event = true;
    c3.generate({
        size: {
            height: 500
        },
        title: {
            show: false,
            text: 'Tools with publications',
            position: 'top-center',   // top-left, top-center and top-right
            padding: {
                top: 0,
                right: 0,
                bottom: 0,
                left: 0
            }
        },
        data: {
            columns: [
                ['Tools with publications', data.publications],
                ['Tools with no publications ', data.tools - data.publications]
            ],
            type : 'pie',
        },
        pie: {
            label: {
              format: function(value, ratio, id) {
                return value + '';
              }
            }
          },
        bindto: '#toolspublications',
    });
    c3.generate({
        size: {
            height: 500
        },
        title: {
            show: false,
            text: 'Tools with bioschemas',
            position: 'top-center',   // top-left, top-center and top-right
            padding: {
                top: 0,
                right: 0,
                bottom: 0,
                left: 0
            }
        },
        data: {
            columns: [
                ['Tools with bioschemas', data.bioschemas],
                ['Tools without bioschemas ', data.tools - data.bioschemas]
            ],
            type : 'pie',
        },
        pie: {
            label: {
              format: function(value, ratio, id) {
                return value + '';
              }
            }
          },
        bindto: '#toolsopensource',
    });
  c3.generate({
        size: {
            height: 500
        },
        title: {
            show: false,
            text: 'Tools with opensource license',
            position: 'top-center',   // top-left, top-center and top-right
            padding: {
                top: 0,
                right: 0,
                bottom: 0,
                left: 0
            }
        },
        data: {
            columns: [
                ['Tools with opensource license', data.opensource],
                ['Tools without opensource license ', data.tools - data.opensource]
            ],
            type : 'pie',
        },
        pie: {
            label: {
              format: function(value, ratio, id) {
                return value + '';
              }
            }
          },

        bindto: '#toolsbioschemas',
    });
  }

}
