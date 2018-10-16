import { KeycloakService } from 'keycloak-angular';
import { resolve } from 'q';

/**
 * Keycloak config file.
 */

export function initializer(keycloak: KeycloakService): () => Promise<any> {
  return (): Promise<any> => {
    // tslint:disable-next-line:no-shadowed-variable
    return new Promise(async (resolve, reject) => {
      try {
        await keycloak.init({
          config: {
            url: 'https://inb.bsc.es/auth2',
            realm: 'OEB',
            clientId: 'opeb-frontend'
          },
          enableBearerInterceptor: false,
          bearerExcludedUrls: [
            '/stats',
            '/tool',
            '/scientific'
          ],
        });
          resolve();
        } catch (error) {
          reject(error);
        }
      });
  };
}
