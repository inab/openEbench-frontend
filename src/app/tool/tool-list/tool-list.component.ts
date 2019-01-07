import { Component, OnInit, ViewChild } from '@angular/core';

import { Tool } from '../shared/tool';
import { ToolService } from '../shared/tool.service';
import { Observable ,  Subscriber } from 'rxjs';
import { FormGroup } from '@angular/forms';
import { Filter } from '../shared/filter';


/**
* Component to list the tools
*/
@Component({
  selector: 'app-tool-list',
  templateUrl: './tool-list.component.html',
  styleUrls: ['./tool-list.component.css']
})
export class ToolListComponent implements OnInit {

  /**
   * variable for testing (hidden clock :) )
   */
  private time: Observable<string>;

  /**
   * constructor
   */
  constructor(private toolService: ToolService) { }

  /**
   * When class is initialized
   */
  ngOnInit() {
    // this.getTime();
  }

  /**
   * function for the hidden cloak
   */
  private getTime(): void {
    this.time = new Observable<string>((observer: Subscriber<string>) => {
      setInterval(() => observer.next(new Date().toString()), 1000);
    });
  }

}
