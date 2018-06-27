import { Component, OnInit } from '@angular/core';
import * as c3 from 'c3';
import * as d3 from 'd3';
import { StatisticsService } from '../shared/statistics.service';
import { Statistics } from '../shared/statistics';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent implements OnInit {

  private data: any;

  public statistics = new Statistics;


  constructor(
    private statsService: StatisticsService,
  ) { }

  ngOnInit() {
  this.fetchdata();
  }

  private fetchdata() {
    this.statsService.getStats().subscribe(data => {
      this.data = data;
    //   console.log(this.data);
      this.statistics.tools = this.data['/@timestamp/'];
      this.statistics.publications  = this.data['/project/publications/'];
      this.statistics.bioschemas = this.data['/project/website/bioschemas/'];
      this.statistics.opensource = this.data['/project/license/open_source/'];
      this.generateChart(this.statistics);
    });
  }

  private generateChart(data) {
    c3.generate({
        /* tslint:disable */
        // title: {
        //     text : '% of tools with Publications'
        // },
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
        // title: {
        //     text : '% of tools with bioschemas'
        // },
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
       
        // title: {
        //     text : '% of tools with open sorce license'
        // },
        data: {
            columns: [
                ['Tools with opensource license', data.opensource],
                ['Tools without opensource license ', data.tools - data.opensource]
            ],
            type : 'pie',
            // pie : {
            //     tooltip: {
            //         format: {
            //             name: function (name, ratio, id, index) {
            //                 console.log("aa")
            //                 // if (id === "data1") {
            //                 //    * return "afsdf"*;
            //                 // } else {
            //                 //     *return "rwrer";*
            //                 // }
            //             }
            //         }
            //     }
            // }
        },
        bindto: '#toolsbioschemas',
    });
  }

}
