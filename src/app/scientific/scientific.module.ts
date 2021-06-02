import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ScientificRoutingModule,
  AllScientificRoutingComponents,
} from './scientific-routing.module';
import { ScientificComponent } from './scientific.component';
import { MaterialModule } from '../material.module';
import { DataTablesModule } from 'angular-datatables';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ScientificComponent, AllScientificRoutingComponents],
  imports: [
    CommonModule,
    ScientificRoutingModule,
    MaterialModule,
    DataTablesModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [ScientificComponent],
})
export class ScientificModule {}
