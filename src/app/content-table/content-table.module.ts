import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentTableComponent } from './content-table.component';
import { RouterModule } from '@angular/router'
import { MaterialModule } from '../material.module';
@NgModule({
    declarations: [
        ContentTableComponent
    ],
    imports: [
      CommonModule,
      RouterModule,
      MaterialModule
    ],
    exports: [
        ContentTableComponent
    ],
    providers: [
 
    ]
  })
  export class ContentTableModule { }