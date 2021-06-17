import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommunityListComponent } from './communities/community-list/community-list.component';
import { CommunityComponent } from './communities/community/community.component';
import { ChallengeComponent } from './challenges/challenge/challenge.component';
import { ChallengeListComponent } from './challenges/challenge-list/challenge-list.component';

export const AllScientificRoutingComponents = [
  CommunityListComponent,
  CommunityComponent,
  ChallengeListComponent,
  ChallengeComponent,
];

const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: CommunityListComponent },
      { path: ':id', component: CommunityComponent },
      {
        path: ':id/:bchallengeid',
        component: ChallengeComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ScientificRoutingModule { }
