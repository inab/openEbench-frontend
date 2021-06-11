import { Component, OnInit } from '@angular/core';
import { KeycloakProfile, KeycloakRoles } from 'keycloak-js';
import { KeycloakService } from 'keycloak-angular';

@Component({
  selector: 'app-private',
  templateUrl: './private.component.html',
  styleUrls: ['./private.component.css'],
})
export class PrivateComponent implements OnInit {
  token: string;
  userProfile: KeycloakProfile;
  userRoles: KeycloakRoles["roles"];
  FIRST_OEB_ROLE_POSITION = 22;
  userSpecificRoles: string[]

  constructor(private keycloak: KeycloakService) {}

  async ngOnInit() {
    const isLoggedIn = await this.keycloak.isLoggedIn();
    if (!isLoggedIn) {
      return
    }
    this.token = await this.keycloak.getToken();
    this.userProfile = await this.keycloak.loadUserProfile();
    this.userRoles = this.keycloak.getUserRoles();
    this.userSpecificRoles = this.userRoles.slice(this.FIRST_OEB_ROLE_POSITION)

    // TODO: Delete these console.log lines when finished debugging.
    console.log(this.token)
    console.log(this.userProfile)
    console.log(this.userRoles)
    console.log(this.userSpecificRoles)
  }

  async logout() {
    const redirectUri = window.location.origin + '/';
    await this.keycloak.logout(redirectUri);
  }
}
