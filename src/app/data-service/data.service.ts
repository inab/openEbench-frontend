import { Injectable, OnInit, Component } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { KeycloakProfile } from 'keycloak-js';
import { KeycloakService } from 'keycloak-angular';
import { getMatInputUnsupportedTypeError } from '@angular/material/input';
import { Console } from 'console';

@Component({
    template: ''
})

export class DataService implements OnInit {
    title = 'http-get';
    userDetails: any;
    setter_array: Array<any> = [];

    BDMShortNames = [
        'BenchmarkingEvent',
        'Challenge',
        'Dataset',
        'Metrics',
        'Tool'
    ];

    sandboxObjects: Array<any> = [];

    constructor(
        private http: HttpClient,
        private keycloakService: KeycloakService
        ) { }
    
    ngOnInit() { }

    async getBDMOptions_staged(url_staged): Promise<Observable<Array<any>>> {
        
        if (await this.keycloakService.isLoggedIn()) {
            this.userDetails = await this.keycloakService.getToken();
        }

        const httpOptions = {
            headers: new HttpHeaders({
              'Content-Type' :  'application/json',
              'Accept'       : 'application/json',
              'Authorization': "Bearer " + this.userDetails
            })
        };

        return await this.http.get<any>(url_staged, httpOptions).toPromise();
    }

    async getBDMOptions_submission(url_submission): Promise<Observable<any[]>> {

        if (await this.keycloakService.isLoggedIn()) {
            this.userDetails = await this.keycloakService.getToken();
        }

        const httpOptions = {
            headers: new HttpHeaders({
              'Content-Type' :  'application/json',
              'Accept'       : 'application/json',
              'Authorization': "Bearer " + this.userDetails
            })
        };

        return await this.http.get<any>(url_submission, httpOptions).toPromise();
    }

    async setBDMValue(BDMValue, url_submit, BDM_use_community) {

        this.setter_array.push(BDMValue);

        if (await this.keycloakService.isLoggedIn()) {
            this.userDetails = await this.keycloakService.getToken();
        }

        const httpOptions = {
            headers: new HttpHeaders({
              'Content-Type':  'application/json',
              'Authorization': "Bearer " + this.userDetails
            })
        };
        
        if (BDM_use_community) url_submit = url_submit + "?community_id=" + BDMValue["community_id"];

        await this.http.post(url_submit, JSON.stringify(this.setter_array), httpOptions).toPromise();
    }

    async getSandboxObjects(): Promise<Array<any>> {
        if (await this.keycloakService.isLoggedIn()) {
            this.userDetails = await this.keycloakService.getToken();
        }

        const httpOptions = {
            headers: new HttpHeaders({
              'Content-Type' :  'application/json',
              'Accept'       : 'application/json',
              'Authorization': "Bearer " + this.userDetails
            })
        };
        
        this.sandboxObjects = [];

        let objects = await this.http.get<any>("https://dev2-openebench.bsc.es/api/scientific/sandbox/", httpOptions).toPromise();

        for (let i = 0; i < objects.length; i++) {
            var schema = objects[i]["_schema"];
            var type_schema  = schema.substring(schema.lastIndexOf("/") + 1);
            
            this.sandboxObjects.push({ value: objects[i], type: type_schema });
        }
        
        return this.sandboxObjects;
    }

    async migrateToStaged() {
        if (await this.keycloakService.isLoggedIn()) {
            this.userDetails = await this.keycloakService.getToken();
        }

        const httpOptions = {
            headers: new HttpHeaders({
              'Content-Type' :  'application/json',
              'Authorization': "Bearer " + this.userDetails
            })
        };

        return await this.http.get<any>("https://dev2-openebench.bsc.es/api/scientific/execute/migrate?dryrun=false", httpOptions).toPromise();
    }
}