import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScientificRoutingModule } from './scientific-routing.module';

import { ScientificListComponent } from './scientific-list/scientific-list.component';

import { ScientificService } from './shared/scientific.service';

import { ScientificComponent } from './scientific.component';

import { MaterialModule } from '../material.module';
import { BenchmarkingListComponent } from './benchmarking-list/benchmarking-list.component';
import { BenchmarkingDetailComponent } from './benchmarking-detail/benchmarking-detail.component';

@NgModule({
  declarations: [
    ScientificComponent,
    ScientificListComponent,
    BenchmarkingListComponent,
    BenchmarkingDetailComponent
  ],
  imports: [
    CommonModule,
    ScientificRoutingModule,
    MaterialModule
  ],
  providers: [ScientificService],
  bootstrap: [ScientificComponent]
})
export class ScientificModule { }
