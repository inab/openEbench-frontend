import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {
  ToolRoutingModule,
  AllToolRoutingComponents,
} from './tool-routing.module';
import { MaterialModule } from '../material.module';
import { ToolComponent } from './tool.component';
import { ToolService } from './shared/tool.service';
import { KeyValuePipe } from './shared/pipes/key-value.pipe';
import { ChartIdPipe } from './shared/pipes/chart-id.pipe';
import { SourceBadgeClassPipe } from './shared/pipes/source-badge-class.pipe';
import { UptimeComponent } from '../uptime/uptime.component';

@NgModule({
  declarations: [
    ToolComponent,
    KeyValuePipe,
    ChartIdPipe,
    SourceBadgeClassPipe,
    UptimeComponent,
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
