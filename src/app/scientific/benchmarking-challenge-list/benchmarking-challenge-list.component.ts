import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ScientificService } from '../shared/scientific.service';
import { ActivatedRoute } from '@angular/router';
import { load_table } from '../shared/benchmarkingTable.js';

/**
 * benchmarking challenge list component
 */
@Component({
  selector: 'app-benchmarking-challenge-list',
  templateUrl: './benchmarking-challenge-list.component.html',
  styleUrls: ['./benchmarking-challenge-list.component.css']
})
export class BenchmarkingChallengeListComponent implements OnInit, AfterViewInit {
  /**
   * beventsid
   */
  public beventsid: string;
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
  ) { }

  /**
   * initializer
   */
  ngOnInit() {
    this.beventsid = this.getParam('beventsid');
    this.scientificService.getChallenge(this.beventsid).subscribe(event => { this.bm = event; });
  }

  /**
   * after view init life cycle
   */
  ngAfterViewInit(): void {
    load_table();
  }

  /**
   * helper method to get params
   */
  private getParam(param: string): string {
    return this.route.snapshot.paramMap.get(param);
  }
}
