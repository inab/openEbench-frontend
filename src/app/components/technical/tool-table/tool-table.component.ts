import { Component, OnInit, ViewChild } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { ToolService } from '../../../services/tool.service';
import { Filter, Tool, Metrics } from 'src/app/interfaces';

interface Response {
  body: Tool[];
}

@Component({
  selector: 'app-tool-table',
  templateUrl: './tool-table.component.html',
  styleUrls: ['./tool-table.component.css'],
})
export class ToolTableComponent implements OnInit {
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  pageTitle = 'Technical monitoring';
  coreDataResources = [
    'ensembl',
    'ensembl_genomes',
    'europe_pmc',
    'proteinatlas',
    'intact',
    'mint',
    'interpro',
    'orphadata',
    'pdbe',
    'pride',
    'silva',
    'string',
  ];
  private options: string[];
  private filter: Filter;
  private filterValue: string | null;
  private edamFilterValue: string;
  private search: FormGroup;
  public tools: Tool[];
  public metrics: Metrics[];
  private skip: number;
  private limit: number;
  public optionss: FormGroup;

  constructor(
    private toolService: ToolService,
    private route: ActivatedRoute,
    private router: Router,
    private titleService: Title,
    fb: FormBuilder
  ) {
    this.optionss = fb.group({
      bottom: 0,
      fixed: false,
      top: 100,
    });
  }

  /**
   * On init method checks for search param in the url or filters applied.
   */
  ngOnInit() {
    this.titleService.setTitle(this.pageTitle);
    this.filterValue = this.getQueryParam('search');
    this.filter = {
      text:
        this.getQueryParam('search') != null
          ? this.getQueryParam('search')
          : '',
      filter:
        this.getQueryParam('filter') != null
          ? this.getQueryParam('filter')
          : '',
      type:
        this.getQueryParam('type') != null ? this.getQueryParam('type') : '',
      label:
        this.getQueryParam('label') != null ? this.getQueryParam('label') : '',
    };
    this.skip = 0;
    this.limit = 10;
    this.initializeForm();
  }

  /**
   * Helper method to get the query param.
   */
  private getQueryParam(param: string): string | null {
    return this.route.snapshot.queryParamMap.get(param);
  }

  private getTools(): void {
    this.toolService
      .getToolWithFilters(this.filter, this.skip, this.limit)
      .subscribe((response: Response) => {
        this.tools = response.body;
      });
  }

  private initializeForm() {
    this.options = ['Name', 'Name & Description', 'Description'];
    this.search = new FormGroup(
      (this.filter = {
        text: new FormControl(this.filterValue),
        filter: new FormControl(this.options[0]),
        type: new FormControl(),
        label: new FormControl(this.edamFilterValue),
      })
    );
    this.submitForm();
  }

  private submitForm() {
    this.filter = {
      text: this.search.value.text == null ? '' : this.search.value.text,
      filter: this.search.value.filter,
      type: this.search.value.type,
      label: this.search.value.label,
    };
    this.router.navigate([], {
      queryParams: { search: this.filter.text },
      queryParamsHandling: 'merge',
    });
    if (this.paginator) {
      this.paginator.firstPage();
    }
    this.getTools();
  }

  /**
   * Url Metrics for tools
   */
  public getMetricsForTool(id: any) {}

  public onActivate($event: any) {
    console.log($event);
  }
  public onDeactivate($event: any) {
    console.log($event);
  }
}
