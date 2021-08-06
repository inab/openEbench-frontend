import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AboutComponent } from './about/about.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { DocsComponent } from './docs/docs.component';
import { PrivateComponent } from './private/private.component';
import { AppAuthGuard } from './app.authguard';
import { BDMCreatorComponent } from './BDMCreator/BDMCreator.component';
// import { ToolModule } from './tool/tool.module';
// import { ScientificModule } from './scientific/scientific.module';

/**
 * Routes to componentes, ToolComponent and Scientific component have there own specific routeing.modules
 */
export const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  { path: 'dashboard', component: DashboardComponent, },
  { path: 'tool', loadChildren: () => import('./tool/tool.module').then(m => m.ToolModule), },
  { path: 'scientific', loadChildren: () => import('./scientific/scientific.module').then(m => m.ScientificModule) },
  { path: 'stats', component: StatisticsComponent, },
  { path: 'about', component: AboutComponent , } ,
  { path: 'docs', component: DocsComponent , } ,
  { path: 'private', component: PrivateComponent, canActivate: [AppAuthGuard]},
  { path: 'private/BDMCreator', component: BDMCreatorComponent },
  { path: '**', component: PageNotFoundComponent }
];

/**
 * root module for routing
 */
@NgModule({
  // This is a root module so we use forRoot, ,  { enableTracing: true }  is for debuging
  imports: [ RouterModule.forRoot(routes, {
    onSameUrlNavigation: 'reload',
    anchorScrolling: 'enabled',
  }),
    ],
  exports: [ RouterModule ],
  providers: [AppAuthGuard],
})

/**
 * export routing module
 */
export class AppRoutingModule { }

/**
 *  routing component
 *  so we dont have to import everything in the module.ts again
 */
export const routingComponents = [DashboardComponent, StatisticsComponent, AboutComponent, PrivateComponent, PageNotFoundComponent];
