import { Component, OnInit } from "@angular/core";
import { Title } from "@angular/platform-browser";

/**
 * About component
 */
@Component({
    selector: "app-about",
    templateUrl: "./about.component.html",
    styleUrls: ["./about.component.css"],
})
export class AboutComponent implements OnInit {
    /**
     * Constructor
     */
    pageTitle = "About";
    constructor(private titleService: Title) {}
    /**
     * Initializer
     */
    ngOnInit() {
        this.titleService.setTitle(this.pageTitle);
    }
}
