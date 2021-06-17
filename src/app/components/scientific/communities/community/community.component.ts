import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Community } from 'src/app/interfaces';
import {
  CommunityByIdGQL,
  DatasetsOfCommunityGQL,
  EventsOfCommunityGQL,
  ToolsOfCommunityGQL,
} from 'src/app/services/graphql.service';

@Component({
  selector: 'app-community',
  templateUrl: './community.component.html',
  styleUrls: ['./community.component.css'],
})
export class CommunityComponent implements OnInit {
  id: string;
  communitiesById: Observable<Community[]>;
  community: Community;
  vreLink: string;
  events: any;
  datasets: any;
  tools: any;
  datasetTrigger = new Subject();
  toolTrigger = new Subject();
  dtOptions: DataTables.Settings = {};
  communitiesGraphql: any;
  loading = true;

  constructor(
    private route: ActivatedRoute,
    private titleService: Title,
    private communityByIdGQL: CommunityByIdGQL,
    private eventsOfCommunityGQL: EventsOfCommunityGQL,
    private datasetsOfCommunityGQL: DatasetsOfCommunityGQL,
    private toolsOfCommunityGQL: ToolsOfCommunityGQL
  ) {}

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.dtOptions = {
      pagingType: 'full_numbers',
    };
    this.getCommunity();
    this.getBenchmarkingEvents();
    this.getDatasets();
  }

  getCommunity() {
    this.communityByIdGQL
      .watch({ community_id: this.id })
      .valueChanges.pipe(map((result) => result.data.getCommunities))
      .subscribe((filteredCommunities) => {
        this.community = filteredCommunities[0];
        this.titleService.setTitle(`${this.community.name} | OpenEBench`);
        this.vreLink = this.community.links.find(
          (link) => link.comment === '@VRE_link'
        )?.uri;
        this.loading = false;
      });
  }

  getBenchmarkingEvents() {
    this.eventsOfCommunityGQL
      .watch({ community_id: this.id })
      .valueChanges.pipe(map((result) => result.data.getBenchmarkingEvents))
      .subscribe((events) => {
        this.events = events;
        this.loading = false;
      });
  }

  getDatasets() {
    this.datasetsOfCommunityGQL
      .watch({ community_id: this.id })
      .valueChanges.pipe(map((result) => result.data.getDatasets))
      .subscribe((datasets) => {
        this.datasets = datasets;
        setTimeout(() => {
          this.datasetTrigger.next();
        });
        this.loading = false;
      });
  }

  getTools() {
    this.toolsOfCommunityGQL
      .watch({ community_id: this.id })
      .valueChanges.pipe(map((result) => result.data.getTools))
      .subscribe((datasets) => {
        this.datasets = datasets;
        setTimeout(() => {
          this.toolTrigger.next();
        });
        this.loading = false;
      });
  }
}
