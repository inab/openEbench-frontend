import { Component, OnInit, Input, ViewChild, AfterViewInit } from '@angular/core';
import { Tool } from '../shared/tool';
import {  MatPaginator } from '@angular/material';
import { BehaviorSubject } from 'rxjs';
import { ToolService } from '../shared/tool.service';

import { tap } from 'rxjs/operators';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { Filter } from '../shared/filter';
// import { Stats } from '../../shared/stats';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Metrics } from '../shared/metrics';
import { Directive, Output, EventEmitter, SimpleChange } from '@angular/core';
import { ToolDetailComponent } from '../tool-detail/tool-detail.component';



/**
* Component to list the tools
*/
@Component({
  selector: 'app-tool-table',
  templateUrl: './tool-table.component.html',
  styleUrls: ['./tool-table.component.css'],
})

/**
* Class ToolTable Component
*/
export class ToolTableComponent implements OnInit {


  /**
   * options
   */
  private options: string[];
  /**
   * filter
   */
  private filter: Filter;
  /**
   * filterValue
   */
  private filterValue: string;
  private edamFilterValue: string;
  /**
   * search
   */
  private search: FormGroup;
  /**
   * tools
   */
  public tools: Tool[];
  /**
   * metrics
   */
  public metrics: Metrics[];
  /**
   * skip
   */
  private skip: number;
  /**
   * limit
   */
  private limit: number;
  /**
   * stats
   */
  private stats: any;
  /**
   * length
   */
  private length: number;
  /**
   * pageIndex
   */
  private pageIndex: number;
  /**
   * pageSize
   */
  private pageSize: number;
  /**
   * typeList
   */
  private typeList = ['cmd', 'web', 'db', 'app', 'lib', 'ontology', 'workflow', 'plugin', 'sparql',
   'soap', 'script', 'rest', 'workbench', 'suite'];

   private edamSubOntologyList = ['topic', 'operation', 'format', 'data' ];


   private toolId: string;
   /**
    * ViewChild for paginator
    */
  private opened: Boolean;
  private toogle = false;


  public optionss: FormGroup;
  @ViewChild(MatPaginator) paginator: MatPaginator;



  /**
  * Construtor for the tool table;
  */
  constructor(
    private toolService: ToolService,
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
  ) {
    this.optionss = fb.group({
      bottom: 0,
      fixed: false,
      top: 100
    });
   }

  /**
  * On init method checks for search param in the url or filters applied
  */
  ngOnInit() {
    this.filterValue = this.getQueryParam('search');
    this.filter = {
      text: this.getQueryParam('search') != null ? this.getQueryParam('search') : '',
      filter: this.getQueryParam('filter') != null ? this.getQueryParam('filter') : '',
      type: this.getQueryParam('type') != null ? this.getQueryParam('type') : '',
      label: this.getQueryParam('label') != null ? this.getQueryParam('label') : '',
    };
    this.skip = 0;
    this.limit = 10;

    this.initializeForm();
    // this.submitForm();
    this.opened = true;
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
      label: new FormControl(this.edamFilterValue),
    });
    console.log(this.search);
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
      label: this.search.value.label
    };
    this.router.navigate([], {queryParams: {search: this.filter.text}, queryParamsHandling: 'merge'});
    if (this.paginator) {
      this.paginator.firstPage();
    }
    console.log(this.search);
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

  public onActivate($event) {
    console.log($event);
  }
  public onDeactivate($event) {
    console.log($event);
  }

}




