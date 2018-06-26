import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routingComponents } from './app-routing.module';
// Material designe
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { StatisticsService } from './shared/statistics.service';

import { AppComponent } from './app.component';
import { ToolModule } from './tool/tool.module';
import { TopMenuComponent } from './top-menu/top-menu.component';
import { FooterComponent } from './footer/footer.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { StatisticsComponent } from './statistics/statistics.component';





@NgModule({
  declarations: [
    AppComponent,
    TopMenuComponent,

    // all the pages that are in top menu
    routingComponents,
    FooterComponent,
    PageNotFoundComponent,
    StatisticsComponent,

  ],
  imports: [
    BrowserModule,
    // toolModule is a complete seperate module on its on it is injected here
    // because it is a child module of appModule
    ToolModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    // FormsModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  providers: [StatisticsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
