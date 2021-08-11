import { Injectable, OnInit, Component } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
    template: ''
})

export class DataService implements OnInit {
    title = 'http-get';
    url: string = 'https://dev2-openebench.bsc.es/api/scientific/staged/Reference';

    constructor(private http: HttpClient) { }
    
    ngOnInit() { }

    getBDMOptions(): Observable<Array<any>> {
        return this.http.get<any>(this.url);
    }

/*     setBDMValue(BDMValue: {value: string, name: string}) {
        this.BDMOptions.push(BDMValue);
    } */
}