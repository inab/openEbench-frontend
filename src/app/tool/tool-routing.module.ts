import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ToolTableComponent } from './tool-table/tool-table.component';
import { ToolDetailComponent } from './tool-detail/tool-detail.component';




const routes: Routes = [
  {
    path: 'tool',
    children: [
      { path: '', component: ToolTableComponent },
      { path: ':id', component: ToolDetailComponent, data: { breadcrumbs: ':id' } }
    ], data: { breadcrumbs: 'Tools' },
  },

];



@NgModule({

  /**
   * Import RouterModule
   * This is a child module so we use forChild
  */
  imports: [RouterModule.forChild(routes)],
  /**
   * Export RoutingModule
  */
  exports: [RouterModule]
})

/**
 * Export Routing Module
*/
export class ToolRoutingModule { }

/**
 * Export routing components
*/
export const routingComponents = [ToolTableComponent, ToolDetailComponent];
