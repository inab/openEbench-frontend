import { Component, OnInit } from '@angular/core'
import { Location } from '@angular/common'
import { KeycloakService } from 'keycloak-angular'
import { KeycloakProfile } from 'keycloak-js'
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http'
import { error } from '@angular/compiler/src/util'

/**
 * This component is where the we specify the top menu paths
 */
@Component({
    selector: 'app-top-menu',
    templateUrl: './top-menu.component.html',
    styleUrls: ['./top-menu.component.css']
})

/**
 * Class top menu component
 */
export class TopMenuComponent implements OnInit {
    /**
     * User details from keycloak
     */
    userDetails: KeycloakProfile

    /**
     * Construtor method
     */
    constructor(
        private location: Location,
        private keycloakService: KeycloakService,
        private http: HttpClient
    ) {}

    /**
     * Navigation links and labels for the menu on the right (LOGO)
     */
    public dashboardLink = {
        label: 'Dashboard',
        path: 'dashboard'
    }

    /**
     * Navigation links and labels for the menu on the left
     */
    public navItems: any

    /**
     * Call the getProfileName function on start
     */
    ngOnInit() {
        const a = this.http.get('http://localhost:3030/links')
        a.subscribe(
            data => {
                this.navItems = data
            },
            err => console.log(err)
            // () => console.log(this.navLinks)
        )
        // this.navLinks = [
        // {
        //     label: 'Scientific Benchmarking',
        //     path: '/scientific'
        // },
        // {
        //     label: 'Technical Monitoring',
        //     path: '/tool'
        // },
        // {
        //     label: 'Statistics',
        //     path: '/stats'
        // },
        // {
        //     label: 'About',
        //     path: '/about'
        // },
        // {
        //     label: 'Docs',
        //     path: '',
        //     href: 'https://openebench.bsc.es/docs/'
        // }
        // this.getProfileName()
    }

    /**
     * Gets the name of the user to add toggle between login and username
     */
    // getProfileName() {
    //     this.keycloakService.isLoggedIn().then(res => {
    //         if (res) {
    //             this.keycloakService.loadUserProfile().then(resp => {
    //                 this.navLinks.push({
    //                     label: resp.username,
    //                     path: '/private'
    //                 })
    //             })
    //         } else {
    //             this.navLinks.push({
    //                 label: 'Login',
    //                 path: '/private'
    //             })
    //         }
    //     })
    // }

    /**
     * Get URL path
     */
    getPath() {
        return this.location.isCurrentPathEqualTo(this.dashboardLink.path)
    }
}
