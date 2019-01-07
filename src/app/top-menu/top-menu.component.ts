import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { KeycloakService } from 'keycloak-angular';
import { KeycloakProfile } from 'keycloak-js';

/**
 * This component is where the we specify the top menu paths and labels
*/

@Component({
    selector: 'app-top-menu',
    templateUrl: './top-menu.component.html',
    styleUrls: ['./top-menu.component.css']
})
export class TopMenuComponent implements OnInit {
  userDetails: KeycloakProfile;

  constructor(private location: Location, private keycloakService: KeycloakService) { }

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
    },
  ];

  /**
   * call the getProfileName function on start
   */
  ngOnInit() {
   // this.getProfileName();
  }

  /**
   * Gets the name of the user to add toggle between login and username
   */
  getProfileName() {
    this.keycloakService.isLoggedIn().then(res => {
      if (res) {
        this.keycloakService.loadUserProfile().then(resp => {
         this.navLinks.push({
           label: resp.username,
           path: '/private'
         });
        });
      } else {
       this.navLinks.push({
         label: 'Login',
         path: '/private'
       });
      }
   });
  }

  getPath() {
    // return this.location.isCurrentPathEqualTo(this.dashboardLink.path);
  }

}
