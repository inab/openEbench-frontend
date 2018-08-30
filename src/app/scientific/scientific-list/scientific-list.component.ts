import { Component, OnInit, Injectable } from '@angular/core';
import { ScientificService } from '../shared/scientific.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { HttpParams, HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-scientific-list',
  templateUrl: './scientific-list.component.html',
  styleUrls: ['./scientific-list.component.css']
})
export class ScientificListComponent implements OnInit {

  public communities: any[];
  public datasets: any[];
  public data = [];
  // public datasets = {
  //   'datasets' : [{
  //     '_id': 'QfO:QfO4_ECtest_OMA-GETHOGs_output',
  //     'title' : 'ECtest OMA GETHOGs output',
  //     // tslint:disable-next-line:max-line-length
  //     'description' : 'Output dataset for the OMA-GETHOGs tool in the "Enzyme Classification Conservation Test
  // " benchmark event with the correspondent metrics generated from it',
  //     'types' : [
  //       'Output', 'Participant'
  //     ]
  //   },
  //   {
  //     '_id': 'QfO:QfO4_GOtest_EggNOG_input',
  //     'title' : 'GOtest EggNOG input',
  //     // tslint:disable-next-line:max-line-length
  //     'description' : 'Input dataset for the EggNOG tool in the "Gene Ontology Conservation Test" benchmark event',
  //     'types' : [
  //       'Input', 'Participant'
  //     ]
  //   },
  //   {
  //     '_id': 'QfO:QfO4_ECtest_RBH-BBH_ref',
  //     'title' : 'ECtest RBH BBH ref',
  //     // tslint:disable-next-line:max-line-length
  //     'description' : 'Reference dataset for the RBH-BBH tool in the "Enzyme Classification Conservation Test" benchmark event',
  //     'types' : [
  //       'Reference'
  //     ]
  //   }]
  // };



  constructor(
    private scientificService: ScientificService,

  ) { }

  ngOnInit() {
    this.scientificService.getCommunities().subscribe(event => {this.communities = event; });
    this.scientificService.getDatasets().subscribe(event => { this.datasets = event ;
        for (const a of this.datasets['Dataset']) {
          if (a.type === 'metrics_reference') {
            this.data.push(a);
          }
        }
        // console.log(this.data);
    });

  // check(id) {
  //   return id.split(':')[1] === 'CAMEO' ? true : false;
  // }


  }
}
