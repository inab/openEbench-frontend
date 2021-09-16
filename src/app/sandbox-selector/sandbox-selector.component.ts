import { Component, OnInit, Inject, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';
import { FormlyJsonschema } from '@ngx-formly/core/json-schema';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { RefParser, RefParserError } from '../services/RefParser';
import { from } from 'rxjs';
import { DataService } from '../data-service/data.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { resultKeyNameFromField } from '@apollo/client/utilities';

@Component({
  selector: 'sandbox-selector',
  templateUrl: './sandbox-selector.component.html',
  styleUrls: ['./sandbox-selector.component.css']
})
export class SandboxSelectorComponent implements OnInit {

  sandboxObjects: Array<any> = [];
  returnVar: any;
  hidden: boolean = true;
  className: string = "";
  divMessage: string = "";

  constructor(
    private dataService: DataService,
    public dialog: MatDialog ) { }

  ngOnInit(): void {
    this.hidden = true;
    this.updateTable();
  }

  // reload the table with all the elements of sandbox database
  updateTable(): void {
    this.sandboxObjects = [];

    this.dataService.getSandboxObjects().then( objects => {
      this.sandboxObjects = objects;
    });
  }

  // migration of all the elements from the sandbox database to staged database
  submit_sandbox(): void {
    var response = confirm("This process will transfer the data from sandbox to staged. Are you sure?");
    // if there is a confirmation do the migration and reload the table (updateTable)
    if (response == true && this.sandboxObjects.length != 0) {
      this.dataService.migrateToStaged().then( res => {
        this.updateTable();
      }).then(res => {
        this.divMessage = "The data has been inserted successfully";
        this.className = "alert alert-success";
        this.hidden = false;
        console.log(this.sandboxObjects);
      });
    }
  }

  // on click an element to view the JSON do this function
  open_json(id: string): void {
    let json_object;

    // see all the elements in sandbox database and show the correct
    for (let i = 0; i < this.sandboxObjects.length; i++) {
      if (this.sandboxObjects[i].value._id == id) json_object = this.sandboxObjects[i];
    }
    
    // open popup with dialog-data.html
    const dialogRef = this.dialog.open(DialogData, {
      data: {
        width: 'auto',
        height: 'auto',
        json_object: json_object
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.updateTable();
      console.log('The dialog was closed');
    });
  }
}

// View JSON option of the table
@Component({
  selector: 'dialog-data',
  templateUrl: 'dialog-data.html',
})
export class DialogData {
  json_object: any;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
  private dialogRef: MatDialogRef<DialogData>) { }

  // show pretty the object
  ngOnInit() {
    this.json_object = JSON.stringify(this.data["json_object"]["value"], null, 2);
  }

  // close the dialog
  close() {
    this.dialogRef.close();
  }
}
