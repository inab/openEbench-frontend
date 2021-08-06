import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';
import { FormlyJsonschema } from '@ngx-formly/core/json-schema';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { RefParser, RefParserError } from '../services/RefParser';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import { from } from 'rxjs';

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
  select: any;
  BDMSelected: Array<string> = [];
  BDMShort_name: any;
  BDMType: any;

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
    @Inject(MAT_DIALOG_DATA) public BDMInfo: any,
    private formlyJsonschema: FormlyJsonschema,
    private refParser: RefParser,
    private http: HttpClient,
  ) {
    this.BDMShort_name = this.BDMInfo["short_name"];
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
  }

  submit() {
    this.select = $('select[class="selectBDMLoader"]');
    this.BDMType = $('select[class="selectBDMLoader"]').attr('name');

    this.BDMSelected = [];
    for (let i = 0; i < this.select.length; i++) {
      this.BDMSelected[i] = this.select.eq(i).val();
    }
    this.model[this.BDMType] = this.BDMSelected;

    //FINAL
    if (this.form.valid == true) console.log("VALIDADO");
    else console.log("NO VALIDADO");

    console.log(this.model);
  }

}
