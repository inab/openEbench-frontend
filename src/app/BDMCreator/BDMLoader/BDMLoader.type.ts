import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { FieldType } from '@ngx-formly/core';
import { BDMCreatorComponent } from "../BDMCreator.component";
import { DataService } from '../data.service';

@Component({
    selector: 'BDMLoader-component',
    templateUrl: './BDMLoader.html',
})
export class BDMLoaderComponent extends FieldType implements OnInit {

  BDMOptions: any;
  
  constructor(public dialog: MatDialog, private dataService: DataService) {
      super();
  }

  ngOnInit() {
    this.dataService.getBDMOptions().subscribe(
      result=>{
        this.BDMOptions = result;
      },
      error=>{
        var errorMessage = <any>error;
        console.log(errorMessage);
      }
    );
  }

  openDialog(short_name: string): void {
    const dialogRef = this.dialog.open(BDMCreatorComponent, {
      width: '65%',
      height: '65%',
      data: {
        short_name: short_name,
        type: "loader"
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
