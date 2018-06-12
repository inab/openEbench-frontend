import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AboutComponent } from './about/about.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

export const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  { path: 'dashboard',  component: DashboardComponent },
  { path: 'about', component: AboutComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  // This is a root module so we use forRoot, ,  { enableTracing: true }  is for debuging
  imports: [ RouterModule.forRoot(routes)],
  exports: [ RouterModule ]

})
export class AppRoutingModule { }

// so we dont have to import everything in the module.ts again
export const routingComponents = [DashboardComponent, AboutComponent, PageNotFoundComponent];
