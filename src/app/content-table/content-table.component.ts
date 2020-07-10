import { Component, OnInit, Input } from "@angular/core";
import { SourceListMap } from "source-list-map";

@Component({
    selector: "app-content-table",
    templateUrl: "./content-table.component.html",
    styleUrls: ["./content-table.component.css"],
})
export class ContentTableComponent implements OnInit {
    @Input() contents: [];

    constructor() {}

    ngOnInit() {
        console.log(this.contents);
    }
}
