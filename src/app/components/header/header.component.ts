import { Component, OnInit } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';
import { NavLink } from 'src/app/interfaces';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
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
