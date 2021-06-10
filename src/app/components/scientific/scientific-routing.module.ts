import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommunityListComponent } from './community-list/community-list.component';
import { BenchmarkingListComponent } from './benchmarking-list/benchmarking-list.component';
import { BenchmarkingDetailComponent } from './benchmarking-detail/benchmarking-detail.component';
import { BenchmarkingChallengeListComponent } from './benchmarking-challenge-list/benchmarking-challenge-list.component';

export const AllScientificRoutingComponents = [
  CommunityListComponent,
  BenchmarkingListComponent,
  BenchmarkingChallengeListComponent,
  BenchmarkingDetailComponent,
];

const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: CommunityListComponent },
      { path: ':id', component: BenchmarkingListComponent },
      {
        path: ':id/:bchallengeid',
        component: BenchmarkingDetailComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ScientificRoutingModule { }
