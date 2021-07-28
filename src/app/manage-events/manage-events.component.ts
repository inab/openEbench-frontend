import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';
import { FormlyJsonschema } from '@ngx-formly/core/json-schema';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { RefParser, RefParserError } from '../services/RefParser';
import { from } from 'rxjs';

@Component({
  selector: 'app-manage-events',
  templateUrl: './manage-events.component.html',
  providers: [RefParser],
})
export class ManageEventsComponent implements OnInit {

  form: FormGroup;
  model: any;
  options: FormlyFormOptions;
  fields: FormlyFieldConfig[];

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
    private formlyJsonschema: FormlyJsonschema,
    private refParser: RefParser,
    private http: HttpClient,
  ) {
    this.refParser.setParameters({});
    const BDMSchemas = this.BDMShortNames.map(sn => `https://raw.githubusercontent.com/inab/benchmarking-data-model/2.0.x/json-schemas/2.0.x/${sn}.json`);
  
    this.refParser.loadResources(BDMSchemas)
      .then(() => fetch('https://raw.githubusercontent.com/inab/OpEB-VRE-schemas/frontend-schema/benchmarkingEvent.json'))
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
    console.log(this.model);
  }

}