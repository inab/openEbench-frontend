import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';


@Component({
    selector: 'app-top-menu',
    templateUrl: './top-menu.component.html',
    styleUrls: ['./top-menu.component.css']
})
export class TopMenuComponent implements OnInit {

  constructor(private location: Location) { }

  public dashboardLink = {
    label: 'Dashboard',
    path: '/dashboard'
  };

  public navLinks = [
    {
      label: 'Scientific Benchmarking',
      path: '/scientific'
    },
    {
      label: 'Technical Monitoring',
      path: '/tool'
    },
    {
      label: 'Statistics',
      path: '/stats'
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
