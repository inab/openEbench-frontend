import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable, bindCallback } from 'rxjs';


import { Filter } from '../shared/filter';
import { Tool } from '../shared/tool';
import { Metrics } from '../shared/metrics';
import { ToolService } from '../shared/tool.service';
import uptime from '../shared/uptime.js';
import citation from '../shared/citation.js';
// import uptime from '../../../../../../Widget-Template/build/build.js';
// import OpEB from '../../../../../../openEBench-widgets/dev/OpEB-widgets.js';
// <script src="https://rawgit.com/vsundesha/Widget-Template/master/build/build.js"></script>
//     <script src="https://rawgit.com/vsundesha/citations-widget/master/build/build.js"></script>




@Component({
  selector: 'app-tool-detail',
  templateUrl: './tool-detail.component.html',
  styleUrls: ['./tool-detail.component.css']
})
export class ToolDetailComponent implements OnInit {

  panelOpenState = true;
  tools: Tool[];
  filter: Filter;
  id: string;
  instance: string;
  version: string;
  selectedValue: any;
  metrics: Metrics[];
  charts: string;
  sources: any = [];


  constructor(
    private toolService: ToolService,
    private route: ActivatedRoute,
    private router: Router,
  ) { }


  ngOnInit() {
    // setTimeout(() => {
    // }, 200);
    this.getToolById();
    // this.instance = this.getParam('instance');
    // this.version = this.getParam('version');
  }

  private getParam(param: string): string {
    return this.route.snapshot.paramMap.get(param);
  }

  private getToolById(): void {
    this.id = this.getParam('id');
    this.toolService.getToolById(this.id).subscribe(tools => {
        this.tools = tools;
        if ( this.tools.length !== 0 ) {
          this.getSources(this.tools);
          this.selectInitialValue(1);
        }
      });
  }

  private getSources(tools) {

    let i = 0;
    tools.forEach(tool => {
      tool.entities.forEach(entity => {
        entity.tools.forEach(element => {
          const str = element['@id'];
          const s = str.split('/tool/')[1].split(':')[0];
          if (i > 0) {
            if ( !this.sources.includes(s)) {
              this.sources.push(s);
            }
          }
          i++;
        });
      });
    });
  }

  private getMetrics() {
    this.selectedValue['metrics'] = this.selectedValue['@id'].replace('/tool/', '/metrics/');
    this.toolService.getToolMetricsById(this.selectedValue.metrics).subscribe(res => {
      this.metrics = res;
      setTimeout(() => {
        this.loadCharts();
      }, 500);
    });

  }

  private loadCharts() {
      citation.loadCitationChart();
      uptime.loadChart();
  }

  private selectInitialValue(i) {
    this.selectedValue = this.tools[0].entities[i].tools[0];
    this.getMetrics();
  }

  private onTabChange(e) {
    this.selectInitialValue(e.index + 1);
  }

  private onVersionChange(e) {
    this.metrics = null;
    this.getMetrics();
  }




}
