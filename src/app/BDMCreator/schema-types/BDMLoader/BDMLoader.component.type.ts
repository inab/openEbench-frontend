import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Observable, of } from 'rxjs';
import { FieldType } from '@ngx-formly/core';
import { BDMCreatorComponent } from "../../BDMCreator.component";
import { DataService } from '../../../data-service/data.service';

@Component({
    selector: 'BDMLoader-component',
    templateUrl: './BDMLoader.component.html',
    styleUrls: ['./BDMLoader.component.css'],
})
export class BDMLoaderComponent extends FieldType implements OnInit {

  BDMOptions: Array<any> = [];
  new_button: boolean = false;
  multiple: boolean = false;

  constructor(public dialog: MatDialog, private dataService: DataService) {
      super();
  }

  ngOnInit() {
    // If the select is multiple or not
    if (this.to.multiple == true) this.multiple = true;
    // If there is the option of create New component (popup redirected to the BDMCreator)
    if (this.to.new_button == true) this.new_button = true;

    //reload select
    this.updateSelect();
  }

  // function to reload the information of the select
  updateSelect() {
    
    this.BDMOptions = [];

    // if the url_select.url_staged exist in the json schema find the objects of the staged database
    if (this.to.url_select["url_staged"]) {
      this.dataService.getBDMOptions_staged(this.to.url_select["url_staged"]).then( (value: any) => {
        for (let i = 0; i < value.length; i++) {
          this.BDMOptions.push({value: value[i], type:"staged"});
        }
      });
    }
    
    // if the url_select.url_sandbox exist in the json schema find the objects of the sandbox database
    if (this.to.url_select["url_sandbox"]) {
      this.dataService.getBDMOptions_submission(this.to.url_select["url_sandbox"]).then( (value: any) => {
        for (let i = 0; i < value.length; i++) {
          this.BDMOptions.push({value: value[i], type:"sandbox"});
        }
      });
    }
  }

  // when the button of new exist (and the option of new_button in JSON Schema)
  // if click this button a popup is open. 
  openDialog(short_name: string): void {
    const dialogRef = this.dialog.open(BDMCreatorComponent, {
      width: '65%',
      height: '65%',
      // the data send it is the short_name (name of the JSON file), the url to do the submission (POST) and the title of the form
      data: {
        short_name: short_name,
        url_submit: this.to.url_submit,
        title: this.to.title
      }
    });
  }
}
