
import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatPseudoCheckboxModule } from '@angular/material/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTooltipModule } from '@angular/material/tooltip';


/**
 * Common Material Design modules.
 */

@NgModule({
  imports: [MatButtonModule, MatSelectModule, MatInputModule, MatProgressSpinnerModule, MatSortModule, MatTabsModule,
    MatFormFieldModule, MatTableModule, MatPaginatorModule, MatRadioModule, MatExpansionModule, MatGridListModule, MatTooltipModule,
    MatPseudoCheckboxModule,
    MatBadgeModule, MatCheckboxModule, MatCardModule, MatSidenavModule],
  exports: [MatButtonModule, MatSelectModule, MatInputModule, MatProgressSpinnerModule, MatSortModule, MatTabsModule,
    MatFormFieldModule, MatTableModule, MatPaginatorModule, MatRadioModule, MatExpansionModule, MatGridListModule, MatTooltipModule,
    MatPseudoCheckboxModule,
    MatBadgeModule, MatCheckboxModule, MatCardModule, MatSidenavModule]
})
export class MaterialModule { }
