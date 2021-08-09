import { Injectable, OnInit, Component } from '@angular/core';
import { Observable, of } from 'rxjs';

@Component({
    template: ''
})

export class DataService implements OnInit {

    BDMOptions: Array<{value: string, name: string}> = []; 

    ngOnInit() {
        this.loadBDM();
    }

    loadBDM() {
        this.BDMOptions= [
            { value: 'option1', name: 'opción 1' },
            { value: 'option2', name: 'opción 2' },
            { value: 'option3', name: 'opción 3' },
            { value: 'option4', name: 'opción 4' },
            { value: 'option5', name: 'opción 5' }];
    }

    getBDMOptions(): Observable<any[]> {
        this.loadBDM();
        return of(this.BDMOptions);
    }

    setBDMValue(BDMValue: {value: string, name: string}) {
        this.BDMOptions.push(BDMValue);
    }
}