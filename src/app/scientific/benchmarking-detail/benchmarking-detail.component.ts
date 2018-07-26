import { Component, OnInit } from '@angular/core';
import { loadurl } from '../shared/benchmarkingChart.js';
import { ScientificService } from '../shared/scientific.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';



@Component({
  selector: 'app-benchmarking-detail',
  templateUrl: './benchmarking-detail.component.html',
  styleUrls: ['./benchmarking-detail.component.css']
})
export class BenchmarkingDetailComponent implements OnInit {
  public id: string;
  constructor(
    private scientificService: ScientificService,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit() {
    this.id = this.getParam('bmid');
   setTimeout(() => {
    loadurl();
   }, 50);

  }

  private getParam(param: string): string {
    return this.route.snapshot.paramMap.get(param);
  }
}
