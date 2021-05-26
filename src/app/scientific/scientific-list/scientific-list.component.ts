import { Component, OnInit, Injectable } from "@angular/core";
import { Apollo } from "apollo-angular";
import gql from "graphql-tag";
import { Title } from "@angular/platform-browser";

/**
 * scientific list
 */
@Component({
    selector: "app-scientific-list",
    templateUrl: "./scientific-list.component.html",
    styleUrls: ["./scientific-list.component.css"],
})
export class ScientificListComponent implements OnInit {
    /**
     * communities
     */
    public communities: any[];
    /**
     * datasets
     */
    public datasets: any[];
    /**
     * data
     */
    public data = [];

    /**
     * Communities using Graphql
     */
    public communitiesGraphql: any;
    /**
     * loading property for graphql
     */
    public loading = true;
    /**
     * error property for graphql
     */
    public error: any;

    public getCommunities = gql`
        {
            getCommunities {
                _id
                name
                acronym
                links {
                    label
                    uri
                    comment
                }
            }
        }
    `;

    /**
     * constructor
     */
    pageTitle = "Scientific benchmarking";
    constructor(private apollo: Apollo, private titleService: Title) {}
    /**
     * initializer
     */
    ngOnInit() {
        this.titleService.setTitle(this.pageTitle);
        this.apollo
            .watchQuery({
                query: this.getCommunities,
            })
            .valueChanges.subscribe((result) => {
                this.communitiesGraphql = result.data;
                this.loading = result.loading;
                this.error = result.errors;
            });
    }
}
