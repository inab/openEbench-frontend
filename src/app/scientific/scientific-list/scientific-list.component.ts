import { Component, OnInit } from '@angular/core';
import { ScientificService } from '../shared/scientific.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';


@Component({
  selector: 'app-scientific-list',
  templateUrl: './scientific-list.component.html',
  styleUrls: ['./scientific-list.component.css']
})
export class ScientificListComponent implements OnInit {

  private communities: any[];

  constructor(
    private scientificService: ScientificService,

  ) { }

  ngOnInit() {

    this.scientificService.getCommunities().subscribe(event => {this.communities = event;
      console.log(this.communities);
    });
  }


}
