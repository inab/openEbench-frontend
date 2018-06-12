import { Component, OnInit, AfterViewInit } from '@angular/core';





@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  constructor() { }

  ngOnInit() {
    // this.loadScript('http://localhost/~vsundesh/Widget-Template/build/build.js');
    this.loadScript('https://dev-openebench.bsc.es/widget/dev/OpEB-widgets-compat.js');
  }
  private loadScript(url) {
    const node = document.createElement('script');
    node.src = url;
    node.type = 'text/javascript';
    document.getElementsByTagName('head')[0].appendChild(node);
  }
}
