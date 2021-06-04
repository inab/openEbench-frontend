import { KeycloakService } from 'keycloak-angular';

export function initializeKeycloak(keycloak: KeycloakService) {
  return () =>
    keycloak.init({
      config: {
        url: 'https://inb.bsc.es/auth',
        realm: 'openebench',
        clientId: 'oeb-frontend',
      },
      initOptions: {
        onLoad: 'check-sso',
        silentCheckSsoRedirectUri:
          window.location.origin + '/assets/silent-check-sso.html',
      },
      enableBearerInterceptor: false,
      bearerExcludedUrls: ['/stats', '/tool', '/scientific'],
    });
}
