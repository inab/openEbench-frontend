
import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
import { MatButtonModule, MatSelectModule, MatInputModule, MatProgressSpinnerModule, MatSortModule,
  MatFormFieldModule, MatTableModule, MatPaginatorModule, MatRadioModule, MatTabsModule,
  MatExpansionModule, MatGridListModule, MatTooltipModule, MatCheckboxModule, MatCardModule, MatSidenavModule,
  MatPseudoCheckboxModule,
  MatBadgeModule} from '@angular/material';


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
