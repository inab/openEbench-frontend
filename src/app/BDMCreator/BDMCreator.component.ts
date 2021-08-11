import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';
import { FormlyJsonschema } from '@ngx-formly/core/json-schema';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { RefParser, RefParserError } from '../services/RefParser';
import { from } from 'rxjs';
import { DataService } from './data.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

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

  select_loader: any;
  BDMSelected: Array<string> = [];
  BDMType_loader: any;
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

  submit() {
    this.select_loader = $('select[class="selectBDMLoader"]');
    this.BDMType_loader = $('select[class="selectBDMLoader"]').attr('name');

    if (this.BDMInfo['short_name'] == "benchmarkingEvent") {
      this.model[this.BDMType_loader] = this.select_loader.eq(0).val();
    }

    //FINAL
    if (this.form.valid == true) {
      console.log("GUARDAR EN LA BBDD");
      
      if (this.model['name']) this.BDM_name = this.model['name'];
      else this.BDM_name = this.model['title'];

      //this.dataService.setBDMValue({value: this.model['_id'], name: this.BDM_name});
      this.popup.close();
      
    } else {
      console.log("NO VALIDADO");
      console.log(this.form);
    } 
    
    console.log(this.model);
  }

}
