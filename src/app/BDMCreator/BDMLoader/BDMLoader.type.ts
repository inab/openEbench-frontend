import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Observable, of } from 'rxjs';
import { FieldType } from '@ngx-formly/core';
import { BDMCreatorComponent } from "../BDMCreator.component";
import { DataService } from '../data.service';

@Component({
    selector: 'BDMLoader-component',
    templateUrl: './BDMLoader.html',
})
export class BDMLoaderComponent extends FieldType implements OnInit {

  BDMOptions: Array<any> = [];

  constructor(public dialog: MatDialog, private dataService: DataService) {
      super();
  }

  ngOnInit() {
    this.updateSelect();
  }

  updateSelect() {
    
    this.BDMOptions = [];
    
    if (this.to.url_staged) {
      this.dataService.getBDMOptions_staged(this.to.url_staged).then( (value: any) => {
        for (let i = 0; i < value.length; i++) {
          this.BDMOptions.push(value[i]);
        }
      });
    }
    
    if (this.to.url_submission) {
      this.dataService.getBDMOptions_submission(this.to.url_submission).then( (value: any) => {
        for (let i = 0; i < value.length; i++) {
          this.BDMOptions.push(value[i]);
        }
      });
    }
  }

  openDialog(short_name: string): void {
    const dialogRef = this.dialog.open(BDMCreatorComponent, {
      width: '65%',
      height: '65%',
      data: {
        short_name: short_name,
        url_submit: this.to.url_submit,
        type: "loader"
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.updateSelect();
    });

    
  }
}
