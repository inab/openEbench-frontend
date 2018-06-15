import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';


import { Filter } from '../shared/filter';
import { Tool } from '../shared/tool';
import { Metrics } from '../shared/metrics';
import { ToolService } from '../shared/tool.service';
import uptime from '../../../../../../Widget-Template/build/build.js';
import OpEB from '../../../../../../openEBench-widgets/dev/OpEB-widgets.js';



@Component({
  selector: 'app-tool-detail',
  templateUrl: './tool-detail.component.html',
  styleUrls: ['./tool-detail.component.css']
})
export class ToolDetailComponent  {
  panelOpenState = true;
  tools: Tool[];
  filter: Filter;
  id: string;
  instance: string;
  version: string;
  selectedValue: any;
  metrics: Metrics[];


  constructor(
    private toolService: ToolService,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  // tslint:disable-next-line:use-life-cycle-interface
  public ngAfterViewInit(): void  {
    OpEB.OpEB_widgets.OpEB.apply();
    uptime.loadChart();
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
        this.selectInitialValue(0);
        this.getMetrics();
      });
  }

  private getMetrics() {
    this.selectedValue['metrics'] = this.selectedValue['@id'].replace('/tool/', '/metrics/');
    this.toolService.getToolMetricsById(this.selectedValue.metrics).subscribe(res => {
      this.metrics = res;
    });

  }

  private selectInitialValue(i) {
    this.selectedValue = this.tools[0].entities[i].tools[0];
    this.getMetrics();
  }

  private onTabChange(e) {
    this.selectInitialValue(e.index);
  }

  private onVersionChange(e) {
    this.metrics = null;
    this.getMetrics();
  }




}
