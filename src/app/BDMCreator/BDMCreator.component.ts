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

  select_loader: Array<any> = [];
  BDMSelected: Array<string>;
  BDMType_loader: Array<string> = [];
  BDMElements_loader: Array<any> = [];
  BDM_name: string;
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


  constructor(
    public popup: MatDialogRef<BDMCreatorComponent>,
    @Inject(MAT_DIALOG_DATA) public BDMInfo: any,
    private formlyJsonschema: FormlyJsonschema,
    private refParser: RefParser,
    private http: HttpClient,
    private dataService: DataService
  ) {
    this.url_submit = BDMInfo["url_submit"];
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

  async submit() {
    var select_loader: Array<any> = [];
    var BDMType_loader: Array<string> = [];

    $('select.selectBDMLoader').each(function() {
      select_loader.push($(this));
      BDMType_loader.push($(this).attr('name'));
    });

    this.select_loader = select_loader;
    this.BDMType_loader = BDMType_loader;

    for (let i = 0; i < this.BDMType_loader.length; i++) {

      if (this.BDMInfo['short_name'] == "benchmarkingEvent") {
        this.model[this.BDMType_loader[i]] = this.select_loader[i].eq(0).val();
      }

    }

    console.log(JSON.stringify(this.model));

    //FINAL
    if (this.form.valid == true) {
      console.log("GUARDAR EN LA BBDD");
      
      if (this.model['name']) this.BDM_name = this.model['name'];
      else this.BDM_name = this.model['title'];

      this.dataService.setBDMValue(this.model, this.url_submit);

      this.popup.close();
    }
  }

}
