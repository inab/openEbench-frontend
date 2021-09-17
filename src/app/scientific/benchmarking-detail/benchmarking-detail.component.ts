import { Component, OnInit } from "@angular/core";
import { load_scatter_visualization } from "../shared/benchmarkingChart_scatter.js";
import { load_bars_visualization } from "../shared/benchmarkingChart_bar.js";
// declare let loadurl: any;
import { ActivatedRoute } from "@angular/router";

import { Apollo } from "apollo-angular";
import gql from "graphql-tag";
import { Title } from "@angular/platform-browser";

/**
 * benchmarking details
 */
@Component({
    selector: "app-benchmarking-detail",
    templateUrl: "./benchmarking-detail.component.html",
    styleUrls: ["./benchmarking-detail.component.css"],
})
export class BenchmarkingDetailComponent implements OnInit {
    /**
     * htmlToAdd
     */
    public htmlToAdd;
    /**
     * id
     */
    public id: string;
    /**
     * bm
     */
    public bm: any[];
    challengesGraphql: any;
    datasetsGraphql: any;
    /**
     * loading property for graphql
     */
    public loading = true;
    /**
     * error property for graphql
     */
    public error: any;

    public getChallenges = gql`
        query getChallenges($id: String!) {
            getChallenges(challengeFilters: { id: $id }) {
                _id
                name
                acronym
                metrics_categories {
                    metrics {
                        metrics_id
                        tool_id
                    }
                }
            }
        }
    `;

    public getDatasets = gql`
        query getDatasets($id: String!) {
            getDatasets(
                datasetFilters: { challenge_id: $id, type: "aggregation" }
            ) {
                datalink {
                    inline_data
                }
                _id
            }
        }
    `;

    /**
     * constructor
     */
    constructor(
        private route: ActivatedRoute,
        private apollo: Apollo,
        private titleService: Title
    ) {}

    data: any;
    /**
     * initializer
     */
    ngOnInit() {
        this.id = this.getParam("bchallengeid");

        this.apollo
            .watchQuery({
                query: this.getChallenges,
                variables: { id: this.id },
            })
            .valueChanges.subscribe((result) => {
                this.challengesGraphql = result.data;
                this.loading = result.loading;
                this.error = result.errors;
                this.titleService.setTitle(
                    result.data["getChallenges"][0].name
                );
            }),
            this.apollo
                .watchQuery({
                    query: this.getDatasets,
                    variables: { id: this.id },
                })
                .valueChanges.subscribe((result) => {
                    for (let i = 0; i < result.data["getDatasets"].length; i++) {
                        result.data["getDatasets"][i].datalink.inline_data = JSON.parse(result.data["getDatasets"][i].datalink.inline_data);
                    }
                    this.datasetsGraphql = result.data;
                    this.loading = result.loading;
                    this.error = result.errors;
                });
    }

    ngAfterViewInit() {
        setTimeout(() => {
            this.loadCharts(this.datasetsGraphql);
        }, 500);
    }

    private loadCharts(data) {
        switch (data.getDatasets[0].datalink.inline_data.visualization.type) {
            case "2D-plot":
                load_scatter_visualization();

                break;
            case "bar-plot":
                load_bars_visualization();

                break;
            default:
                break;
        }
    }
    /**
     * helper method get param
     */
    private getParam(param: string): string {
        return this.route.snapshot.paramMap.get(param);
    }

    public tabClick(event: Object): void {
        //console.log(event)
        $(".benchmarkingChart_scatter").html("");
        $(".benchmarkingChart_bars").html("");
        this.loadCharts(this.datasetsGraphql);
    }
}
