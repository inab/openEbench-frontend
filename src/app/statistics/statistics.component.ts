import { Component, OnInit } from "@angular/core";
import { StatisticsService } from "../shared/statistics.service";
import * as c3 from "c3";
import * as d3 from "d3";
/**
 *
 * Componet for Statistics
 */
@Component({
    selector: "app-statistics",
    templateUrl: "./statistics.component.html",
    styleUrls: ["./statistics.component.css"]
})
export class StatisticsComponent implements OnInit {
    /**
     * data
     */
    private data: any;
    /**
     * statistics
     */
    public statistics: any;
    /**
     * event
     */
    public event = false;

    /**
     * loading
     */
    public loading;

    /**
     * constructor function
     */
    constructor(private statsService: StatisticsService) {}
    /**
     * initializer
     */
    ngOnInit() {
        this.fetchdata();
    }
    /**
     * fetches the data and generates the statistics charts
     */
    private fetchdata() {
        this.statsService.getStats().subscribe(data => {
            this.loading = 1;
            this.data = data;
            this.statistics = {
                tools: this.data["/@timestamp"],
                publications: this.data["/project/publications"],
                bioschemas: this.data["/project/website/bioschemas:true"],
                opensource: this.data["/project/license/open_source:true"]
            };
            this.generateChart(this.statistics);
        });
    }
    /**
     * helper method for the fechdata
     */
    private generateChart(data) {
        this.event = true;
        c3.generate({
            size: {
                height: 340,
                width: 680
            },
            title: {
                text: "Publications"
            },
            data: {
                columns: [
                    [
                        "Tools with no publications ",
                        data.tools - data.publications
                    ],
                    ["Tools with publications", data.publications]
                ],
                type: "pie"
            },
            tooltip: {
                format: {
                    value: function(value) {
                        return (
                            d3.format(",")(value) +
                            " / " +
                            d3.format(",")(data.tools)
                        );
                    }
                }
            },
            bindto: "#toolspublications"
        });
        c3.generate({
            size: {
                height: 340,
                width: 680
            },
            title: {
                text: "Bioschemas"
            },
            data: {
                columns: [
                    ["Tools with bioschemas", data.bioschemas],
                    ["Tools without bioschemas ", data.tools - data.bioschemas]
                ],
                type: "pie"
            },
            tooltip: {
                format: {
                    value: function(value) {
                        return (
                            d3.format(",")(value) +
                            " / " +
                            d3.format(",")(data.tools)
                        );
                    }
                }
            },
            bindto: "#toolsbioschemas"
        });
        c3.generate({
            size: {
                height: 340,
                width: 680
            },
            data: {
                columns: [
                    ["Tools with opensource license", data.opensource],
                    [
                        "Tools without opensource license ",
                        data.tools - data.opensource
                    ]
                ],
                type: "pie"
            },
            title: {
                text: "Open Source"
            },
            tooltip: {
                format: {
                    value: function(value) {
                        return (
                            d3.format(",")(value) +
                            " / " +
                            d3.format(",")(data.tools)
                        );
                    }
                }
            },
            bindto: "#toolsopensource"
        });
    }
}
