import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScientificRoutingModule } from './scientific-routing.module';
import { routingComponents } from './scientific-routing.module';
import { ScientificService } from './shared/scientific.service';
import { ScientificComponent } from './scientific.component';
import { MaterialModule } from '../material.module';


/**
 * imports and declaration for the scientific component
 */
@NgModule({
  declarations: [
    ScientificComponent,
    routingComponents
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
