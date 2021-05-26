import { KeycloakService } from 'keycloak-angular';
import { environment } from '../../environments/environment';
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
            url: environment.AUTH_SERVER,
            realm: 'openebench',
            clientId: 'oeb-frontend'
          },
          enableBearerInterceptor: false,
          bearerExcludedUrls: [
            '/stats',
            '/tool',
            '/scientific'
          ],
        });
          resolve({});
        } catch (error) {
          reject(error);
        }
      });
  };
}
