import { Injectable } from "@angular/core";
import {
    CanActivate,
    Router,
    ActivatedRouteSnapshot,
    RouterStateSnapshot,
} from "@angular/router";
import { KeycloakService, KeycloakAuthGuard } from "keycloak-angular";

/**
 * Class Appauthguard extends keycloakauthguard
 */
@Injectable()
export class AppAuthGuard extends KeycloakAuthGuard {
    // tslint:disable-next-line:max-line-length

    /**
     * Construtor method
     */
    constructor(
        protected router: Router,
        protected keycloakAngular: KeycloakService
    ) {
        super(router, keycloakAngular);
    }
    /**
     * Checks for user access
     */
    isAccessAllowed(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Promise<boolean> {
        return new Promise((resolve, reject) => {
            const keycloakLoginOptions = {
                redirectUri: window.location.origin + "/private",
            };
            if (!this.authenticated) {
                this.keycloakAngular.login(keycloakLoginOptions);
                return;
            }
            const requiredRoles = route.data.roles;
            if (!requiredRoles || requiredRoles.length === 0) {
                return resolve(true);
            } else {
                if (!this.roles || this.roles.length === 0) {
                    resolve(false);
                }
                let granted = false;
                for (const requiredRole of requiredRoles) {
                    if (this.roles.indexOf(requiredRole) > -1) {
                        granted = true;
                        break;
                    }
                }
                resolve(granted);
            }
        });
    }
}
