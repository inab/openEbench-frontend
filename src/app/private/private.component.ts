import { Component, OnInit } from '@angular/core';
import { KeycloakProfile } from 'keycloak-js';
import { KeycloakService } from 'keycloak-angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-private',
  templateUrl: './private.component.html',
  styleUrls: ['./private.component.css']
})
export class PrivateComponent implements OnInit {
  userDetails: KeycloakProfile;

  constructor(private keycloakService: KeycloakService, private router: Router) { }
  async ngOnInit() {
    if (await this.keycloakService.isLoggedIn()) {
      this.userDetails = await this.keycloakService.loadUserProfile();
    }
  }

  async logout() {
    const redirectUri = 'http://127.0.0.1:4200/dashboard';
    await this.keycloakService.logout(redirectUri);
  }

}
