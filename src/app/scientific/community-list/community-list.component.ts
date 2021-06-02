import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Community, GetComunitiesGQL } from '../../services/scientific.service';

@Component({
  selector: 'app-community-list',
  templateUrl: './community-list.component.html',
  styleUrls: ['./community-list.component.css'],
})
export class CommunityListComponent implements OnInit {
  pageTitle = 'Scientific benchmarking';
  communities: Observable<Community[]>;
  public data = [];
  public loading = true;
  public error: any;

  constructor(private titleService: Title, private getCommunitiesGQL: GetComunitiesGQL) {}

  ngOnInit() {
    this.titleService.setTitle(this.pageTitle);
    this.communities = this.getCommunitiesGQL.watch()
      .valueChanges
      .pipe(
        map(result => result.data.getCommunities)
      );
  }
}
