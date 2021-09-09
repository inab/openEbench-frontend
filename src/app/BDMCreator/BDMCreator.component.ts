import { Component, OnInit, Inject, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';
import { FormlyJsonschema } from '@ngx-formly/core/json-schema';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { RefParser, RefParserError } from '../services/RefParser';
import { from } from 'rxjs';
import { DataService } from './data.service';
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
  BDM_title: string;

  select_loader: Array<any> = [];
  BDMSelected: Array<string>;
  BDMType_loader: Array<string> = [];
  BDMElements_loader: Array<any> = [];
  BDM_name: string;
  BDM_use_community: boolean = false;
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
    public popup: MatDialogRef<BDMCreatorComponent>,
    @Inject(MAT_DIALOG_DATA) public BDMInfo: any,
    private formlyJsonschema: FormlyJsonschema,
    private refParser: RefParser,
    private http: HttpClient,
    private dataService: DataService
  ) {
    if (BDMInfo["url_submit"]) this.url_submit = BDMInfo["url_submit"];
    if (BDMInfo["title"]) this.BDM_title = BDMInfo["title"];
    if (BDMInfo["use_community"]) this.BDM_use_community = BDMInfo["use_community"];

    this.refParser.setParameters({});
    //const BDMSchemas = this.BDMShortNames.map(sn => `https://raw.githubusercontent.com/inab/benchmarking-data-model/2.0.x/json-schemas/2.0.x/${sn}.json`);
    const BDMSchemas = this.BDMShortNames.map(sn => `https://raw.githubusercontent.com/inab/OpEB-VRE-schemas/frontend-schema/${sn}.json`);

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

  ngOnInit() {
    this.BDMElements_loader = [];
  }

  eliminarNulls(json) {
    Object.keys(json).forEach(key => {
      if (json[key] && typeof json[key] === "object") this.eliminarNulls(json[key]); // recurse
      else if (json[key] == null) delete json[key]; // delete
    });
  }

  async submit() {
    var select_loader: Array<any> = [];
    var BDMType_loader: Array<string> = [];

    $('select.selectBDMLoader').each(function() {
      select_loader.push($(this));
      BDMType_loader.push($(this).attr('name'));
    });

    this.select_loader = select_loader;
    this.BDMType_loader = BDMType_loader;

    this.BDM_raw = this.form.getRawValue();

    for (let i = 0; i < this.BDMType_loader.length; i++) {

      if (this.BDMInfo['short_name'] == "benchmarkingEvent") {
        this.BDM_raw[this.BDMType_loader[i]] = this.select_loader[i].eq(0).val();
      }
    }

    this.form.setValue(this.BDM_raw);

    //FINAL
    if (this.form.valid == true) {
      console.log("GUARDAR EN LA BBDD");

      this.BDM_raw["_schema"] = this.model["_schema"];

      this.eliminarNulls(this.BDM_raw);

      console.log(this.BDM_raw);
      console.log(JSON.stringify(this.BDM_raw));

      this.dataService.setBDMValue(this.BDM_raw, this.url_submit, this.BDM_use_community);

      this.popup.close();
    }
  }

}
