import { Component, OnInit } from '@angular/core';
import * as chartb from '../shared/benchmarkingChart.js';
import { ScientificService } from '../shared/scientific.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';



@Component({
  selector: 'app-benchmarking-detail',
  templateUrl: './benchmarking-detail.component.html',
  styleUrls: ['./benchmarking-detail.component.css']
})
export class BenchmarkingDetailComponent implements OnInit {
  private id: string;
  constructor(
    private scientificService: ScientificService,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit() {
    this.id = this.getParam('bmid');
    setTimeout(() => {
      chartb.loadurl();
    }, 300);
  }

  click(): void {
    setTimeout(() => {
      chartb.onQuartileChange();
    }, 300);

  }
  private getParam(param: string): string {
    return this.route.snapshot.paramMap.get(param);
  }
}
