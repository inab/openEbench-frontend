import { Component, OnInit } from '@angular/core';
import { ScientificService } from '../shared/scientific.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-benchmarking-challenge-list',
  templateUrl: './benchmarking-challenge-list.component.html',
  styleUrls: ['./benchmarking-challenge-list.component.css']
})
export class BenchmarkingChallengeListComponent implements OnInit {

  private beventsid: string;
  private bm: any[];

  constructor(
    private scientificService: ScientificService,
    private route: ActivatedRoute,
    ) { }

  ngOnInit() {
    this.beventsid = this.getParam('beventsid');
    this.scientificService.getChallenge(this.beventsid).subscribe(event => {this.bm = event; });
  }

  private getParam(param: string): string {
    return this.route.snapshot.paramMap.get(param);
  }
}
