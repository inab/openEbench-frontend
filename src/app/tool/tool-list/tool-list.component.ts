import { Component, OnInit, ViewChild } from '@angular/core';

import { Tool } from '../shared/tool';
import { ToolService } from '../shared/tool.service';
import { Observable ,  Subscriber } from 'rxjs';
import { FormGroup } from '@angular/forms';
import { Filter } from '../shared/filter';


@Component({
  selector: 'app-tool-list',
  templateUrl: './tool-list.component.html',
  styleUrls: ['./tool-list.component.css']
})
export class ToolListComponent implements OnInit {

  private time: Observable<string>;

  constructor(private toolService: ToolService) { }

  ngOnInit() {
    // this.getTime();
  }

  private getTime(): void {
    this.time = new Observable<string>((observer: Subscriber<string>) => {
      setInterval(() => observer.next(new Date().toString()), 1000);
    });
  }

}
