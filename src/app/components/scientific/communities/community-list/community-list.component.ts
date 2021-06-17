import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Community } from 'src/app/interfaces';
import { AllComunitiesGQL } from 'src/app/services/graphql.service';

@Component({
  selector: 'app-community-list',
  templateUrl: './community-list.component.html',
  styleUrls: ['./community-list.component.css'],
})
export class CommunityListComponent implements OnInit {
  communities: Observable<Community[]>;
  public data = [];
  public loading = true;
  public error: any;

  constructor(private allCommunitiesGQL: AllComunitiesGQL) {}

  ngOnInit() {
    this.communities = this.allCommunitiesGQL.watch()
      .valueChanges
      .pipe(
        map(result => result.data.getCommunities)
      );
  }
}
