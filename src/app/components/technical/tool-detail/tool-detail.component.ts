import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToolService } from '../../../services/tool.service';
import { MatDialog } from '@angular/material/dialog';
import { Title } from '@angular/platform-browser';
import { Tool, Filter, Metrics } from 'src/app/interfaces';
import uptime from 'src/app/external/uptime';
import citation from 'src/app/external/citation';

@Component({
  selector: 'app-tool-detail',
  templateUrl: './tool-detail.component.html',
  styleUrls: ['./tool-detail.component.css'],
})
export class ToolDetailComponent implements OnInit {
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
  panelOpenState = true;
  tools: Tool[];
  filter: Filter;
  id: string;
  instance: string;
  version: string;
  selectedValue: any;
  metrics: Metrics[];
  charts: string;
  sources = [];

  constructor(
    private toolService: ToolService,
    private route: ActivatedRoute,
    public dialog: MatDialog,
    private titleService: Title
  ) {}

  ngOnInit() {
    this.id = this.getParam('id');
    this.titleService.setTitle(this.id);
    this.getToolById();
  }

  public getParam(param: string): string {
    return this.route.snapshot.paramMap.get(param);
  }

  private getToolById(): void {
    this.toolService.getToolById(this.id).subscribe((tools) => {
      this.tools = tools;
      if (this.tools.length !== 0) {
        this.getSources(this.tools);
        this.selectInitialValue(1);
      }
    });
  }

  /**
   * Source of the info (Bio.tools, Galaxy, Biocontainers, etc.).
   */
  private getSources(tools) {
    let i = 0;
    tools.forEach((tool) => {
      tool.entities.forEach((entity) => {
        entity.tools.forEach((element) => {
          const str = element['@id'];
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
   * Helper function for getSource.
   */
  private sourceHref(source, tool) {
    switch (source) {
      case 'biotools':
        window.open(`https://bio.tools/${tool}`, '_blank');
        break;
      case 'bioconda':
        window.open(`https://anaconda.org/bioconda/${tool}`, '_blank');
        break;
      case 'galaxy':
        // TODO
        break;
      default:
        break;
    }
  }

  /**
   * Metrics that load the graphs.
   */
  private getMetrics() {
    this.selectedValue['metrics'] = this.selectedValue['@id'].replace(
      '/tool/',
      '/metrics/'
    );
    this.toolService
      .getToolMetricsById(this.selectedValue.metrics)
      .subscribe((response) => (this.metrics = response));
    setTimeout(() => {
      this.loadCharts();
    }, 1000);
  }

  /**
   * Helper function for loading the charts.
   */
  private loadCharts() {
    citation.loadCitationChart();
    uptime.loadChart();
  }

  /**
   * Set which version of tool to be shown first.
   */
  private selectInitialValue(i) {
    this.selectedValue = this.tools[0].entities[i].tools[0];
    this.getMetrics();
  }

  /**
   * Managing the tab change.
   */
  private onTabChange(e) {
    this.selectInitialValue(e.index + 1);
  }

  /**
   * Managing the versions.
   */
  private onVersionChange(e) {
    this.metrics = null;
    this.getMetrics();
  }
}
