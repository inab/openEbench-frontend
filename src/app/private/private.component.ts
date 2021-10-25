import { Component, OnInit } from '@angular/core';
import { KeycloakProfile } from 'keycloak-js';
import { KeycloakService } from 'keycloak-angular';
import { Router } from '@angular/router';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Location } from '@angular/common';
import { BDMCreatorComponent } from "../BDMCreator/BDMCreator.component";
import { SandboxSelectorComponent } from "../sandbox-selector/sandbox-selector.component";

/**
 * Private area Component
 */
@Component({
  selector: 'app-private',
  templateUrl: './private.component.html',
  styleUrls: ['./private.component.css']
})
export class PrivateComponent implements OnInit {
  /**
   * User details for Keyclaok
   */
  userDetails: KeycloakProfile;
/**
 * Constructor
 */
  constructor(private keycloakService: KeycloakService, 
    private router: Router, 
    private location: Location,
    public dialog: MatDialog) { }
  /**
   * Initializer async
   */
  async ngOnInit() {
    if (await this.keycloakService.isLoggedIn()) {
      this.userDetails = await this.keycloakService.loadUserProfile();
    }
  }
/**
 * logout function
 */
  async logout() {
    const redirectUri = window.location.origin + '/dashboard';
    await this.keycloakService.logout(redirectUri);
  }
}
