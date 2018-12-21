import { Component, OnInit, Input, ViewChild, AfterViewInit } from '@angular/core';
import { Tool } from '../../shared/tool';
import {  MatPaginator } from '@angular/material';
import { BehaviorSubject } from 'rxjs';
import { ToolService } from '../../shared/tool.service';
import { tap } from 'rxjs/operators';
import { FormGroup, FormControl } from '@angular/forms';
import { Filter } from '../../shared/filter';
import { Stats } from '../../shared/stats';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Metrics } from '../../shared/metrics';
import { Directive, Output, EventEmitter, SimpleChange } from '@angular/core';


/**
* Component to list the tools
*/
@Component({
  selector: 'app-tool-table',
  templateUrl: './tool-table.component.html',
  styleUrls: ['./tool-table.component.css']
})

/**
* Class ToolTable Component
*/
export class ToolTableComponent implements OnInit {


  /**
   * options
   */
  private options: string[];
  private filter: Filter;
  private filterValue: string;
  private search: FormGroup;
  public tools: Tool[];
  public metrics: Metrics[];
  private skip: number;
  private limit: number;
  private stats: any;
  private length: number;
  private pageIndex: number;
  private pageSize: number;
  private typeList = ['cmd', 'web', 'db', 'app', 'lib', 'ontology', 'workflow', 'plugin', 'sparql',
   'soap', 'script', 'rest', 'workbench', 'suite'];

   /**
    * ViewChild for paginator
    */
  @ViewChild(MatPaginator) paginator: MatPaginator;

  /**
  * Construtor for the tool table;
  */
  constructor(
    private toolService: ToolService,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  /**
  * On init method checks for search param in the url or filters applied
  */
  ngOnInit() {
    this.filterValue = this.getQueryParam('search');
    this.filter = {
      text: this.getQueryParam('search') != null ? this.getQueryParam('search') : '',
      filter: '',
      type: ''
    };
    this.skip = 0;
    this.limit = 10;

    this.initializeForm();
    // this.submitForm();
  }

  /**
  * Calls tool service to retrive stats from tool
  */
  private getStats() {
   this.toolService.getStats().subscribe(tmpStats => this.stats = tmpStats);
  }

  /**
   * Helper method to get the query param
   */
  private getQueryParam(param: string): string {
    return this.route.snapshot.queryParamMap.get(param);
  }

  /**
   * Gets the tools
  */
  private getTools(): void {
    this.toolService.getToolWithFilters(this.filter , this.skip , this.limit)
      .subscribe(res => {
          this.length = res.headers.get('Content-Range').split('/')[1];
          this.tools = res.body;
        }
    );
    this.pageIndex = 0;
    this.pageSize = 10;

  }

  /**
   * Initialize search from
  */
  private initializeForm() {
    this.options = ['Name', 'Name & Description',  'Description'];
    this.search = new FormGroup (this.filter = {
      text: new FormControl(this.filterValue),
      filter: new FormControl(this.options[0]),
      type: new FormControl(),
    });
    this.submitForm();
  }

  /**
   * Submit search form
  */
  private submitForm() {
    this.filter = {
      text: this.search.value.text == null ? '' : this.search.value.text,
      filter: this.search.value.filter,
      type: this.search.value.type,
    };
    this.router.navigate([], {queryParams: {search: this.filter.text}, queryParamsHandling: 'merge'});
    if (this.paginator) {
      this.paginator.firstPage();
    }
    this.getTools();
  }

  /**
   * Change page (Paginator)
  */
  private changePage( event ) {
    this.skip = event.pageIndex * event.pageSize;
    this.limit = (event.pageIndex * event.pageSize) + event.pageSize;
    this.getTools();
  }

  /**
   * Url Metrics for tools
  */
  public getMetricsForTool(id) {
    const url = id.replace('/tool/', '/metrics/');
  }

}




