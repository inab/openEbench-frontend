import { Component, OnInit } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';

export interface NavLink {
  label?: string;
  path?: string;
  href?: string;
}

@Component({
  selector: 'app-top-menu',
  templateUrl: './top-menu.component.html',
  styleUrls: ['./top-menu.component.css'],
})
export class TopMenuComponent implements OnInit {
  username: string;
  navLinks: NavLink[] = [
    {
      label: 'Scientific Benchmarking',
      path: '/scientific',
    },
    {
      label: 'Technical Monitoring',
      path: '/tool',
    },
    {
      label: 'Statistics',
      path: '/stats',
    },
    {
      label: 'About',
      path: '/about',
    },
  ];

  constructor(private keycloak: KeycloakService) {}

  async ngOnInit() {
    this.username = await this.getUsername();
  }

  async getUsername() {
    const isLoggedIn = await this.keycloak.isLoggedIn();
    if (!isLoggedIn) {
      return 'Login';
    }
    await this.keycloak.loadUserProfile();
    return this.keycloak.getUsername();
  }
}
