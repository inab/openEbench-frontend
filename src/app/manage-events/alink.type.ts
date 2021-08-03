import { Component } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { FieldType } from '@ngx-formly/core';
import { ManageEventsComponent } from "./manage-events.component";

@Component({
    selector: 'formly-link-component',
    template: '<legend class="ng-star-inserted">{{to.desc}}</legend><div class="d-flex flex-row-reverse"><button (click)="openDialog(to.url)" type="button" class="btn btn-primary">+</button></div>',
})
export class FormlyLinkComponent extends FieldType {
    constructor(public dialog: MatDialog) {
        super();
    }
    openDialog(type_of_form: string): void {
        const dialogRef = this.dialog.open(ManageEventsComponent, {
          width: '65%',
          height: '65%',
          data: {
              type_URL: type_of_form
          }
        });
    
        dialogRef.afterClosed().subscribe(result => {
          console.log('The dialog was closed');
        });
      }
}
