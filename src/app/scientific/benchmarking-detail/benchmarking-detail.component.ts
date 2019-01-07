import { Component, OnInit, AfterViewInit, EventEmitter, DoCheck } from '@angular/core';
import { loadurl } from '../shared/benchmarkingChart.js';
import { ScientificService } from '../shared/scientific.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';


/**
 * benchmarking details
 */
@Component({
  selector: 'app-benchmarking-detail',
  templateUrl: './benchmarking-detail.component.html',
  styleUrls: ['./benchmarking-detail.component.css']
})
export class BenchmarkingDetailComponent implements OnInit {
/**
 * htmlToAdd
 */
  public htmlToAdd;
  /**
   * id
   */
  public id: string;
  /**
   * bm
   */
  public bm: any[];
  // stateChanged: EventEmitter <any[]> = new EventEmitter();

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
    this.id = this.getParam('bchallengeid');
    this.scientificService.getChallenge(this.id).subscribe(res => this.bm = res);
    setTimeout(() => {
      loadurl();
    }, 500);
  }

  // set state(val) {
  //   this.bm = val;
  //   this.stateChanged.emit(this.bm);
  // }

  // get state() {
  //   return this.bm;
  // }

  // stateChangedEmitter() {
  //   console.log(this.stateChanged);
  //   return this.stateChanged;
  // }

  // ngDoCheck() {
    // loadurl();
    // console.log("Docheck")
  // }
  /**
   * helper method get param
   */
  private getParam(param: string): string {
    return this.route.snapshot.paramMap.get(param);
  }
}
