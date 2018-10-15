import { Component, OnInit } from '@angular/core';
import { KeycloakProfile } from 'keycloak-js';
import { KeycloakService } from 'keycloak-angular';
import { Router } from '@angular/router';

import { Location } from '@angular/common';

@Component({
  selector: 'app-private',
  templateUrl: './private.component.html',
  styleUrls: ['./private.component.css']
})
export class PrivateComponent implements OnInit {
  userDetails: KeycloakProfile;

  constructor(private keycloakService: KeycloakService, private router: Router, private location: Location) { }
  async ngOnInit() {
    if (await this.keycloakService.isLoggedIn()) {
      this.userDetails = await this.keycloakService.loadUserProfile();
    }
  }

  async logout() {
    console.log();
    const redirectUri = window.location.origin + '/dashboard';
    await this.keycloakService.logout(redirectUri);
  }

}
