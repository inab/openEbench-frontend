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
    //url_staged: string = 'https://dev2-openebench.bsc.es/api/scientific/staged/Reference';
    //url_submission: string = 'https://dev2-openebench.bsc.es/api/scientific/submission/Reference';
    userDetails: any;
    setter_array: Array<any> = [];

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

    async setBDMValue(BDMValue, url_submit) {

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
        
        //link = https://dev2-openebench.bsc.es/api/scientific/staged/Reference/
        await this.http.post(url_submit, JSON.stringify(this.setter_array), httpOptions).toPromise();
    }
}