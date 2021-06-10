import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {
  ToolRoutingModule,
  AllToolRoutingComponents,
} from './tool-routing.module';
import { MaterialModule } from '../../material.module';
import { ToolComponent } from './tool.component';
import { ToolService } from '../../services/tool.service';
import { KeyValuePipe } from '../../pipes/key-value.pipe';
import { ChartIdPipe } from '../../pipes/chart-id.pipe';
import { SourceBadgeClassPipe } from '../../pipes/source-badge-class.pipe';

@NgModule({
  declarations: [
    ToolComponent,
    KeyValuePipe,
    ChartIdPipe,
    SourceBadgeClassPipe,
    AllToolRoutingComponents,
  ],
  imports: [
    HttpClientModule,
    CommonModule,
    ToolRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
  ],
  providers: [ToolService],
  bootstrap: [ToolComponent],
  exports: [],
})
export class ToolModule {}
