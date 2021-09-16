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
  selector: 'app-BDMCreator',
  templateUrl: './BDMCreator.component.html',
  providers: [RefParser],
  styleUrls: ['./BDMCreator.component.css'],
})
export class BDMCreatorComponent implements OnInit {

  form: FormGroup;
  model: any;
  options: FormlyFormOptions;
  fields: FormlyFieldConfig[];
  url_submit: string;

  //titulo del formulario
  BDM_title: string;

  select_loader: Array<any> = [];
  BDMSelected: Array<string>;
  BDMType_loader: Array<string> = [];

  BDM_name: string;
  BDM_use_community: boolean = false;

  //names to autocreate the form and parser the schemas -> corresponds to the files of github
  BDMShortNames = [
    '_shared',
    'benchmarkingEvent',
    'challenge',
    'community',
    'contact',
    'dataset',
    'idsolv',
    'metrics',
    'reference',
    'testAction',
    'tool'
  ];
  BDM_raw: any;

  constructor(
    // For the popup
    public popup: MatDialogRef<BDMCreatorComponent>,
    // Data get from the BDMLoader
    @Inject(MAT_DIALOG_DATA) public BDMInfo: any,
    // Librery
    private formlyJsonschema: FormlyJsonschema,
    // JM Parser
    private refParser: RefParser,
    private http: HttpClient,
    // Get and Set from the API
    private dataService: DataService
  ) {
    // URL to submit the Object (POST)
    if (BDMInfo["url_submit"]) this.url_submit = BDMInfo["url_submit"];
    // The title of the form
    if (BDMInfo["title"]) this.BDM_title = BDMInfo["title"];
    // When you do POST in the API could be an element at the end (?community_id=...) this indicate if it is necessary or not
    if (BDMInfo["use_community"]) this.BDM_use_community = BDMInfo["use_community"];

    this.refParser.setParameters({});
    // Read the schemas
    const BDMSchemas = this.BDMShortNames.map(sn => `https://raw.githubusercontent.com/inab/OpEB-VRE-schemas/frontend-schema/${sn}.json`);

    // Create the form with the library and the parser (made by José María)
    this.refParser.loadResources(BDMSchemas)
      .then(() => fetch(`https://raw.githubusercontent.com/inab/OpEB-VRE-schemas/frontend-mode-schema/${this.BDMInfo["short_name"]}.json`))
      .then((r) => r.json())
      .then((schemaModel) => this.refParser.resolveSchema(schemaModel))
      .then((schemaModel) => {
          const schema = schemaModel['schema'];
          const model = schemaModel['model'] || {};
          this.form = new FormGroup({});
          this.options = {};
          this.fields = [this.formlyJsonschema.toFieldConfig(schema)];
          this.model = model;
      });
  }

  ngOnInit() { }

  // The library with the parser do not work property on empty attributes. 
  // In the normal schemas if you do not fill a parameter, this do not exist in the model (final object fill it with response) 
  // This function remove the empty parameters
  // Recursive function
  eliminarNulls(json) {
    Object.keys(json).forEach(key => {
      if (json[key] && typeof json[key] === "object") this.eliminarNulls(json[key]); // recurse
      else if (json[key] == null) delete json[key]; // delete
    });
  }

  // When you click submit button
  async submit() {
    var select_loader: Array<any> = [];
    var BDMType_loader: Array<string> = [];

    // Find selected items of the selector and add them to an array 
    // and the name of this selector (community_id, reference_id,...)
    $('select.selectBDMLoader').each(function() {
      select_loader.push($(this));
      BDMType_loader.push($(this).attr('name'));
    });

    this.select_loader = select_loader;
    this.BDMType_loader = BDMType_loader;

    // get the model of the form (the attributes and the values)
    this.BDM_raw = this.form.getRawValue();

    // Put into the model (BDM_raw) the values of the selector
    for (let i = 0; i < this.BDMType_loader.length; i++) {

      if (this.BDMInfo['short_name'] == "benchmarkingEvent") {
        this.BDM_raw[this.BDMType_loader[i]] = this.select_loader[i].eq(0).val();
      }
    }

    // set the value of the model to the form
    this.form.setValue(this.BDM_raw);

    // If the form do not have errors save the value in DB
    if (this.form.valid == true) {

      // assign the _schema property because the JSON Schema from the github has the _schema predefined
      this.BDM_raw["_schema"] = this.model["_schema"];

      // remove the empty values of the form because if not
      // there will be an error with the API
      this.eliminarNulls(this.BDM_raw);

      console.log(this.BDM_raw);

      // Introduce the component in database
      this.dataService.setBDMValue(this.BDM_raw, this.url_submit, this.BDM_use_community);

      // close the popup
      this.popup.close();

    }
  }

}
