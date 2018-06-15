import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';


@Component({
    selector: 'app-top-menu',
    templateUrl: './top-menu.component.html',
    styleUrls: ['./top-menu.component.css']
})
export class TopMenuComponent implements OnInit {

  constructor(private location: Location) { }

  private dashboardLink = {
    label: 'Dashboard',
    path: '/dashboard'
  };

  private navLinks = [
    {
      label: 'Scientific Benchmarking',
      path: '/sci'
    },
    {
      label: 'Technical Monitoring',
      path: '/tool'
    },
    {
      label: 'About',
      path: '/about'
    }
  ];

  ngOnInit() {
  }

  getPath() {
    return this.location.isCurrentPathEqualTo(this.dashboardLink.path);
  }

}
