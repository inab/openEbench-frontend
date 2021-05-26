import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { KeycloakService, KeycloakAngularModule } from 'keycloak-angular';
import { DataTablesModule } from 'angular-datatables';
import { APOLLO_NAMED_OPTIONS, NamedOptions } from 'apollo-angular';
import { HttpLink } from 'apollo-angular/http';
import { InMemoryCache } from '@apollo/client/core';
import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './material.module';
import { initializer } from './utils/app-init';
import { StatisticsService } from './shared/statistics.service';
import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { TopMenuComponent } from './top-menu/top-menu.component';
import { FooterComponent } from './footer/footer.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DocsComponent } from './docs/docs.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AboutComponent } from './about/about.component';
import { PrivateComponent } from './private/private.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { GraphQLModule } from './graphql.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

export function createApollo(httpLink: HttpLink) {
  return {
    link: httpLink.create({ uri: environment.SCIENTIFIC_SERVICE_URL }),
    cache: new InMemoryCache(),
  };
}

@NgModule({
  declarations: [
    AppComponent,
    TopMenuComponent,
    DashboardComponent,
    StatisticsComponent,
    AboutComponent,
    PrivateComponent,
    FooterComponent,
    PageNotFoundComponent,
    DocsComponent,
  ],
  imports: [
    BrowserModule,
    DataTablesModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    KeycloakAngularModule,
    HttpClientModule,
    GraphQLModule,
    NgbModule,
  ],
  providers: [
    StatisticsService,
    {
      provide: APP_INITIALIZER,
      useFactory: initializer,
      multi: true,
      deps: [KeycloakService],
    },
    {
      provide: APOLLO_NAMED_OPTIONS,
      useFactory(httpLink: HttpLink): NamedOptions {
        return {
          productionGraphqlClient: {
            cache: new InMemoryCache(),
            link: httpLink.create({
              uri: 'https://openebench.bsc.es/sciapi/graphql',
            }),
          },
        };
      },
      deps: [HttpLink],
    },
    {
      provide: APOLLO_NAMED_OPTIONS,
      useFactory(httpLink: HttpLink): NamedOptions {
        return {
          developmentGraphqlClient: {
            cache: new InMemoryCache(),
            link: httpLink.create({
              uri: 'https://dev-openebench.bsc.es/sciapi/graphql',
            }),
          },
        };
      },
      deps: [HttpLink],
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
