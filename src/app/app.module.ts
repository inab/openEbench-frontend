import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { KeycloakService, KeycloakAngularModule } from 'keycloak-angular';
import { initializer } from './utils/app-init';

import { AppRoutingModule, routingComponents } from './app-routing.module';
// Material designe
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { StatisticsService } from './shared/statistics.service';

import { AppComponent } from './app.component';

import { ToolModule } from './tool/tool.module';
import { ScientificModule } from './scientific/scientific.module';

import { TopMenuComponent } from './top-menu/top-menu.component';
import { FooterComponent } from './footer/footer.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import { PrivateComponent } from './private/private.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { ApolloModule, APOLLO_OPTIONS } from 'apollo-angular';
import { HttpLinkModule, HttpLink } from 'apollo-angular-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
// import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';







/**
 * Main app module
 */
@NgModule({
  declarations: [
    AppComponent,
    TopMenuComponent,

    // all the pages that are in top menu
    routingComponents,
    FooterComponent,
    PageNotFoundComponent,
    // BreadcrumbsComponent,

  ],
  imports: [
    BrowserModule,
    // toolModule is a complete seperate module on its on it is injected here
    // because it is a child module of appModule
    ToolModule,
    ScientificModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    NgbModule.forRoot(),
    ReactiveFormsModule,
    MaterialModule,
    KeycloakAngularModule,
    HttpClientModule,
    ApolloModule,
    HttpLinkModule
  ],
  providers: [StatisticsService , {
    provide: APP_INITIALIZER,
    useFactory: initializer,
    multi: true,
    deps: [KeycloakService]
  }, {
    provide: APOLLO_OPTIONS,
    useFactory(httpLink: HttpLink) {
      return {
        cache: new InMemoryCache(),
        link: httpLink.create({
          uri: 'https://dev-openebench.bsc.es/sciapi/graphql'
        })
      };
    },
    deps: [HttpLink]
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
