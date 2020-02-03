import { BrowserModule } from '@angular/platform-browser'
import { NgModule, APP_INITIALIZER } from '@angular/core'
import { KeycloakService, KeycloakAngularModule } from 'keycloak-angular'
import { initializer } from './utils/app-init'

import { AppRoutingModule, routingComponents } from './app-routing.module'
// Material designe
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MaterialModule } from './material.module'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { StatisticsService } from './shared/statistics.service'
import * as c3 from 'c3'
import * as d3 from 'd3'
import { AppComponent } from './app.component'

import { TopMenuComponent } from './top-menu/top-menu.component'
import { FooterComponent } from './footer/footer.component'
import { PageNotFoundComponent } from './page-not-found/page-not-found.component'

import { DataTablesModule } from 'angular-datatables'

import { HttpClientModule } from '@angular/common/http'
import { ApolloModule, APOLLO_OPTIONS } from 'apollo-angular'
import { HttpLinkModule, HttpLink } from 'apollo-angular-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { environment } from '../environments/environment'
import { DocsComponent } from './docs/docs.component'
import { FlexLayoutModule } from '@angular/flex-layout';
import { MenuItemComponent } from './top-menu/menu-item/menu-item.component'

// env variable to a local variable
const envurl = environment.SCIENTIFIC_SERVICE_URL

// function to create apollo client
export function createApollo(httpLink: HttpLink) {
    return {
        link: httpLink.create({ uri: envurl }),
        cache: new InMemoryCache()
    }
}

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
        DocsComponent,
        MenuItemComponent
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
        ApolloModule,
        HttpLinkModule,
        FlexLayoutModule
    ],
    providers: [
        StatisticsService,
        {
            provide: APP_INITIALIZER,
            useFactory: initializer,
            multi: true,
            deps: [KeycloakService]
        },
        {
            provide: APOLLO_OPTIONS,
            useFactory: createApollo,
            deps: [HttpLink]
        }
    ],
    bootstrap: [AppComponent]
})
export class AppModule {}
