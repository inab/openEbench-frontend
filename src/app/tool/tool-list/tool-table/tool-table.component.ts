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




@Component({
  selector: 'app-tool-table',
  templateUrl: './tool-table.component.html',
  styleUrls: ['./tool-table.component.css']
})

export class ToolTableComponent implements OnInit {

  private options: string[];
  private filter: Filter;
  private filterValue: string;
  private search: FormGroup;
  private tools: Tool[];
  private skip: number;
  private limit: number;
  private stats: any;
  private length: number;
  private pageIndex: number;
  private pageSize: number;
  private typeList = ['cmd', 'web', 'db', 'app', 'lib', 'ontology', 'workflow', 'plugin', 'sparql',
   'soap', 'script', 'rest', 'workbench', 'suite'];

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    private toolService: ToolService,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit() {
    this.filterValue = this.getQueryParam('search');
    this.filter = {
      text: this.getQueryParam('search') != null ? this.getQueryParam('search') : '',
      filter: '',
      type: ''
    };
    this.skip = 0;
    this.limit = 10;

    this.getTools();
    this.initializeForm();
  }
  private getStats() {
   this.toolService.getStats().subscribe(tmpStats => this.stats = tmpStats);
  }

  private getQueryParam(param: string): string {
    return this.route.snapshot.queryParamMap.get(param);
  }

  private getTools(): void {
    this.toolService.getToolWithFilters(this.filter , this.skip , this.limit)
      .subscribe(res => {
          this.length = res.headers.get('Content-Range').split('/')[1];
          this.tools = res.body;
          console.log(this.tools);
        }
    );
    this.pageIndex = 0;
    this.pageSize = 10;
  }

  private initializeForm() {
    this.options = ['Name & Description', 'Name', 'Description'];
    this.search = new FormGroup (this.filter = {
      text: new FormControl(this.filterValue),
      filter: new FormControl(this.options[0]),
      type: new FormControl(),
    });
  }

  private submitForm() {
    this.filter = {
      text: this.search.value.text == null ? '' : this.search.value.text,
      filter: this.search.value.filter,
      type: this.search.value.type,
    };
    this.router.navigate([], {queryParams: {search: this.filter.text}, queryParamsHandling: 'merge'});
    this.getTools();
  }

  private changePage( event ) {
    // console.log('pageSize', event.pageSize);
    // console.log('skip', event.pageIndex * event.pageSize);
    // console.log('limit', ( event.pageIndex * event.pageSize) + event.pageSize);
    this.skip = event.pageIndex * event.pageSize;
    this.limit = (event.pageIndex * event.pageSize) + event.pageSize;
    this.getTools();
  }

}




