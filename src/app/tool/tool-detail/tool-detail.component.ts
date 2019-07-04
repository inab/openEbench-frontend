import { Component, OnInit, AfterViewInit, AfterViewChecked } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable, bindCallback } from 'rxjs';
import { ToolTableComponent } from '../tool-table/tool-table.component';

import { Filter } from '../shared/filter';
import { Tool } from '../shared/tool';
import { Metrics } from '../shared/metrics';
import { ToolService } from '../shared/tool.service';
import uptime from '../shared/uptime.js';
import citation from '../shared/citation.js';
import { Input } from '@angular/core';

// <script src="https://rawgit.com/vsundesha/Widget-Template/master/build/build.js"></script>
//     <script src="https://rawgit.com/vsundesha/citations-widget/master/build/build.js"></script>



/**
* Component for tool details
*/
@Component({
  selector: 'app-tool-detail',
  templateUrl: './tool-detail.component.html',
  styleUrls: ['./tool-detail.component.css']
})
export class ToolDetailComponent implements OnInit {

  tableOfContent= [ 'Metrics', 'Uptime', 'Publication'];

  /**
   *  panelOpenState
  */
  panelOpenState = true;
  /**
   *  tools
  */
  tools: Tool[];
  /**
   *  filter
  */
  filter: Filter;
  /**
   *  id
  */
  id: string;
  /**
   *  instance
  */
  instance: string;
  /**
   *  version
  */
  version: string;
  /**
   *  selectedValue
  */
  selectedValue: any;
  /**
   *  metrics
  */
  metrics: Metrics[];
  /**
   *  charts
  */
  charts: string;
  /**
   *  sources
  */
  sources: any = [];

  /**
  * Constructor
  */
  constructor(
    private toolService: ToolService,
    private route: ActivatedRoute,
    private router: Router,
  ) {}


  /**
  * Initializer
  */
  ngOnInit() {
    this.id = this.getParam('id');
    this.getToolById();
  }

  /**
  * Get param from url
  */
  public getParam(param: string): string {
    return this.route.snapshot.paramMap.get(param);
  }


  /**
  * Find tool by id
  */
  private getToolById(): void {
    this.toolService.getToolById(this.id).subscribe(tools => {
      this.tools = tools;
      if (this.tools.length !== 0) {
        this.getSources(this.tools);
        this.selectInitialValue(1);
      }
    });
  }


  /**
  * Source of info (Bio.tools, Galaxy, Biocontainers etc .... )
  */
  private getSources(tools) {

    let i = 0;
    tools.forEach(tool => {
      tool.entities.forEach(entity => {
        entity.tools.forEach(element => {
          const str = element['@id'];
          // console.log(element['xid']);
          // console.log(element);
          const s = str.split('/tool/')[1].split(':')[0];
          if (i > 0) {
            if (!this.sources.includes(s)) {
              this.sources.push(s);
            }
          }
          i++;
        });
      });
    });
  }
  /**
  * Helper function for getSource
  */
  private sourceHref(source, tool) {
    switch (source) {
      case 'biotools':
        window.open('https://bio.tools/' + tool, '_blank');
        break;
      case 'bioconda':
        window.open('https://anaconda.org/bioconda/' + tool, '_blank');
        break;
      case 'galaxy':

      default:
        break;
    }
  }
  /**
  * metrics that loads the graphs
  */
  private getMetrics() {
    this.selectedValue['metrics'] = this.selectedValue['@id'].replace('/tool/', '/metrics/');
    this.toolService.getToolMetricsById(this.selectedValue.metrics).subscribe(
      (res) => { this.metrics = res; });
      setTimeout(() => {
        this.loadCharts();
      }, 1000);
  }

  /**
  * helper function for loading the charts
  */
  private loadCharts() {
    citation.loadCitationChart();
    uptime.loadChart();
  }

  /**
  * setting whcih version of tool to be shown first
  */
  private selectInitialValue(i) {
    this.selectedValue = this.tools[0].entities[i].tools[0];
    this.getMetrics();
  }

  /**
  * Managing the tab change
  */
  private onTabChange(e) {
    this.selectInitialValue(e.index + 1);
  }

  /**
  * Managing the versoions
  */
  private onVersionChange(e) {
    this.metrics = null;
    this.getMetrics();
  }




}
