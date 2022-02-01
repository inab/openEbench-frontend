import { Component } from "@angular/core";
import { Router, NavigationEnd } from "@angular/router";
import { filter } from "rxjs/operators";
import { Title } from "@angular/platform-browser";
import { environment } from 'src/environments/environment';

declare var gtag;
/**
 * main app component
 */

@Component({
    selector: "app-root",
    templateUrl: "./app.component.html",
    styleUrls: ["./app.component.css"],
})
/**
 * expot app angular
 */
export class AppComponent {
    public ENV_HIDE_TOP_MENU = environment.ENV_HIDE_TOP_MENU;
    /**
     * title
     */
    pageTitle = "OpenEBench ";
    constructor(router: Router, private titleService: Title) {
        const navEndEvents = router.events.pipe(
            filter((event) => event instanceof NavigationEnd)
        );
        navEndEvents.subscribe((event: NavigationEnd) => {
            gtag("config", "UA-143782781-1", {
                page_path: event.urlAfterRedirects,
            });
        });
    }

    ngOnInit() {
        this.titleService.setTitle(this.pageTitle);
    }
}
