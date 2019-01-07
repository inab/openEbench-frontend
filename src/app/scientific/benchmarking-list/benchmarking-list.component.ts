import { Component, OnInit } from '@angular/core';
import { ScientificService } from '../shared/scientific.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

/**
 * component
 */
@Component({
  selector: 'app-benchmarking-list',
  templateUrl: './benchmarking-list.component.html',
  styleUrls: ['./benchmarking-list.component.css']
})
export class BenchmarkingListComponent implements OnInit {
/**
 * id
 */
  private id: string;
  /**
   * bm
   */
  public bm: any[];
/**
 * constructor
 */
  constructor(
    private scientificService: ScientificService,
    private route: ActivatedRoute,
    private router: Router,
  ) { }
/**
 * initializer
 */
  ngOnInit() {
    this.id = this.getParam('id');
    this.scientificService.getBenchmarkingEvents(this.id).subscribe(event => {this.bm = event; });
  }
/**
 * helper method to get params
 */
  private getParam(param: string): string {
    return this.route.snapshot.paramMap.get(param);
  }


}
