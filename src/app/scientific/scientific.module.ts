import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScientificRoutingModule, AllScientificRoutingComponents } from './scientific-routing.module';
import { ScientificService } from './shared/scientific.service';
import { ScientificComponent } from './scientific.component';
import { MaterialModule } from '../material.module';
import { DataTablesModule } from 'angular-datatables';
import {FormsModule} from '@angular/forms';





/**
 * imports and declaration for the scientific component
 */
@NgModule({
  declarations: [
    ScientificComponent,
    AllScientificRoutingComponents
  ],
  imports: [
    CommonModule,
    ScientificRoutingModule,
    MaterialModule,
    DataTablesModule,
    FormsModule
  ],
  providers: [ScientificService],
  bootstrap: [ScientificComponent]
})
export class ScientificModule { }
