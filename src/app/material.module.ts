import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatSelectModule, MatInputModule, MatProgressSpinnerModule, MatSortModule,
  MatFormFieldModule, MatTableModule, MatPaginatorModule, MatRadioModule, MatTabsModule,
  MatExpansionModule, MatGridListModule, MatTooltipModule} from '@angular/material';

@NgModule({
  imports: [MatButtonModule, MatSelectModule, MatInputModule, MatProgressSpinnerModule, MatSortModule, MatTabsModule,
    MatFormFieldModule, MatTableModule, MatPaginatorModule, MatRadioModule, MatExpansionModule, MatGridListModule, MatTooltipModule],
  exports: [MatButtonModule, MatSelectModule, MatInputModule, MatProgressSpinnerModule, MatSortModule, MatTabsModule,
    MatFormFieldModule, MatTableModule, MatPaginatorModule, MatRadioModule, MatExpansionModule, MatGridListModule, MatTooltipModule]
})
export class MaterialModule { }
