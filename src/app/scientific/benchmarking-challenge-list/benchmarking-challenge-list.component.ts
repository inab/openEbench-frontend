import { Component, Input, OnInit, AfterViewInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { run_summary_table } from "@inb/oeb-classification-table";
import { FormBuilder, FormControl, FormsModule } from "@angular/forms";
import { Apollo } from "apollo-angular";
import gql from "graphql-tag";
import { Subject } from "rxjs";

import { environment } from 'src/environments/environment';

/**
 * benchmarking challenge list component
 */
@Component({
    selector: "app-benchmarking-challenge-list",
    templateUrl: "./benchmarking-challenge-list.component.html",
    styleUrls: ["./benchmarking-challenge-list.component.css"]
})
export class BenchmarkingChallengeListComponent
    implements OnInit, AfterViewInit {

    public isProduction = environment.production;
    public SCIENTIFIC_SERVICE_URL = environment.SCIENTIFIC_SERVICE_URL;
    public BENCH_EVENT_API_URL = environment.BENCH_EVENT_API_URL;

    public challengeTrigger = new Subject();

    public dtOptions: DataTables.Settings = {};
    /**
     * beventsid
     */
    @Input() beventsid: string;
    /**
     * selected challanges array
     */
    private selectedChallenges: any;

    public getChallenges = gql`
        query getChallenges($benchmarking_event_id: String!) {
            getChallenges(
                challengeFilters: {
                    benchmarking_event_id: $benchmarking_event_id
                }
            ) {
                _id
                name
                orig_id
                acronym
            }
        }
    `;

    public challengeGraphql: any;

    /**
     * loading property for graphql
     */
    public loading = true;
    /**
     * error property for graphql
     */
    public error: any;

    public classifier: any;
    /**
     * constructor
     */
    constructor(
        private route: ActivatedRoute,
        private formBuilder: FormBuilder,
        private apollo: Apollo
    ) {}

    /**
     * initializer
     */
    ngOnInit() {
        this.selectedChallenges = [];
        // console.log(this.testid);
        // this.beventsid = this.getParam('beventsid');

        this.apollo
            .watchQuery({
                query: this.getChallenges,
                variables: { benchmarking_event_id: this.beventsid }
            })
            .valueChanges.subscribe(result => {
                this.challengeGraphql = result.data;
                this.loading = result.loading;
                this.error = result.errors;
                setTimeout(() => {
                    this.challengeTrigger.next();
                });
            });
    }

    /**
     * toogle sellec<
     */
    toogle(event, value) {
        if (event.checked) {
            this.selectedChallenges.push(value);
        }
        if (!event.checked) {
            const index = this.selectedChallenges.indexOf(value);
            if (index > -1) {
                this.selectedChallenges.splice(index, 1);
            }
        }
    }

    filterChallenges(id) {
        run_summary_table(this.selectedChallenges, id);
    }
    /**
     * after view init life cycle
     */
    ngAfterViewInit(): void {
        setTimeout(() => {
            run_summary_table();
        }, 1000);
    }

    /**
     * helper method to get params
     */
    private getParam(param: string): string {
        return this.route.snapshot.paramMap.get(param);
    }
}
