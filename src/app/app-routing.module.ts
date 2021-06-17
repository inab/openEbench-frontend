import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { HomeComponent } from './components/home/home.component'
import { AboutComponent } from './components/about/about.component'
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component'
import { StatisticsComponent } from './components/statistics/statistics.component'
import { PrivateComponent } from './components/private/private.component'
import { AppAuthGuard } from './app.authguard'

/**
 * ToolComponent and ScientificComponent have their own specific routing module.
 */
export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'tool', loadChildren: () => import('./components/technical/tool.module').then(m => m.ToolModule) },
  { path: 'scientific', loadChildren: () => import('./components/scientific/scientific.module').then(m => m.ScientificModule) },
  { path: 'statistics', component: StatisticsComponent },
  { path: 'about', component: AboutComponent },
  { path: 'user-private-area', component: PrivateComponent, canActivate: [AppAuthGuard] },
  { path: '**', component: PageNotFoundComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    onSameUrlNavigation: 'reload',
    anchorScrolling: 'enabled',
  })],
  exports: [RouterModule],
  providers: [AppAuthGuard],
})
export class AppRoutingModule { }
