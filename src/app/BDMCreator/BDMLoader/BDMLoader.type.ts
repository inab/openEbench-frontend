import { Component } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { FieldType } from '@ngx-formly/core';
import { BDMCreatorComponent } from "../BDMCreator.component";

@Component({
    selector: 'BDMLoader-component',
    templateUrl: './BDMLoader.html',
})
export class BDMLoaderComponent extends FieldType {

  BDMType = [
    'option1',
    'option2',
    'option3',
    'option4'
  ];

  constructor(public dialog: MatDialog) {
      super();
  }

  openDialog(short_name: string): void {
    const dialogRef = this.dialog.open(BDMCreatorComponent, {
      width: '65%',
      height: '65%',
      data: {
        short_name: short_name
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  onChange(BDMType) {
    console.log(BDMType);
  }
}
