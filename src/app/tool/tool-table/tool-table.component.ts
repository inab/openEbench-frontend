import { Component, OnInit, ViewChild } from "@angular/core";
import { Tools } from "../shared/models/tools";
import { MatPaginator } from "@angular/material/paginator";
import { ToolService } from "../shared/tool.service";
import { FormGroup, FormControl, FormBuilder } from "@angular/forms";
import { Filter } from "../shared/models/filter";
import { Router, ActivatedRoute } from "@angular/router";
import { Metrics } from "../shared/metrics";
/**
 * Component to list the tools
 */
@Component({
    selector: "app-tool-table",
    templateUrl: "./tool-table.component.html",
    styleUrls: ["./tool-table.component.css"]
})

/**
 * Class ToolTable Component
 */
export class ToolTableComponent implements OnInit {
    cdr = [
        "ensembl",
        "ensembl_genomes",
        "europe_pmc",
        "proteinatlas",
        "intact",
        "mint",
        "interpro",
        "orphadata",
        "pdbe",
        "pride",
        "silva",
        "string"
    ];
    /**
     * options
     */
    private options: string[];
    /**
     * filter
     */
    private filter: Filter = new Filter();
    /**
     * filterValue
     */
    private filterValue: string;
    private edamFilterValue: string;
    /**
     * search
     */
    private search: FormGroup;
    /**
     * tools
     */
    public tools: Tools[];
    /**
     * metrics
     */
    public metrics: Metrics[];
    /**
     * skip
     */
    private skip: number;
    /**
     * limit
     */
    private limit: number;
    /**
     * stats
     */
    private stats: any;
    /**
     * length
     */
    private length: number;
    /**
     * pageIndex
     */
    private pageIndex: number;
    /**
     * pageSize
     */
    private pageSize: number;
    /**
     * typeList
     */
    private typeList = [
        "cmd",
        "web",
        "db",
        "app",
        "lib",
        "ontology",
        "workflow",
        "plugin",
        "sparql",
        "soap",
        "script",
        "rest",
        "workbench",
        "suite"
    ];

    private edamSubOntologyList = ["topic", "operation", "format", "data"];

    private toolId: string;
    /**
     * ViewChild for paginator
     */
    private opened: Boolean;
    private toogle = false;

    public optionss: FormGroup;
    @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

    /**
     * Construtor for the tool table;
     */
    constructor(
        private toolService: ToolService,
        private route: ActivatedRoute,
        private router: Router,
        private fb: FormBuilder
    ) {
        // this.optionss = fb.group({
        //     bottom: 0,
        //     fixed: false,
        //     top: 100
        // });
    }

    /**
     * On init method checks for search param in the url or filters applied
     */
    ngOnInit() {
        this.filterValue = this.getQueryParam("search");
        this.filter.text = this.filterValue != null ? this.filterValue : "";
        this.filter.freeTextSearch();
        this.getTools();
        this.skip = 0;
        this.limit = 10;

        //this.initializeForm();
        // this.submitForm();
        //this.opened = true;
    }

    /**
     * Calls tool service to retrive stats from tool
     */
    private getStats() {
        this.toolService
            .getStats()
            .subscribe(tmpStats => (this.stats = tmpStats));
    }

    /**
     * Helper method to get the query param
     */
    private getQueryParam(param: string): string {
        return this.route.snapshot.queryParamMap.get(param);
    }

    /**
     * Gets the tools
     */
    private getTools(): void {
        this.toolService.getTools(0, 10).subscribe(tools => console.log(tools));
        console.log("hola");
        console.log(this.toolService.getTools(0, 10));

        // this.toolService
        //     .getToolWithFilters(this.filter, this.skip, this.limit)
        //     .subscribe(res => {
        //         this.length = res.headers.get("Content-Range").split("/")[1];
        //         this.tools = res.body;
        //     });
        // this.pageIndex = 0;
        // this.pageSize = 10;
    }

    /**
     * Initialize search from
     */
    private initializeForm() {
        this.options = ["Name", "Name & Description", "Description"];
        // this.search = new FormGroup(
        //     (this.filter = {
        //         text: new FormControl(this.filterValue)
        //     })
        // );
        this.submitForm();
    }

    /**
     * Submit search form
     */
    private submitForm() {
        // this.filter = {
        //     text: this.search.value.text == null ? "" : this.search.value.text
        // };
        // this.router.navigate([], {
        //     queryParams: { search: this.filter.text },
        //     queryParamsHandling: "merge"
        // });
        // if (this.paginator) {
        //     this.paginator.firstPage();
        // }
        this.getTools();
    }

    /**
     * Change page (Paginator)
     */
    // private changePage(event) {
    //     this.skip = event.pageIndex * event.pageSize;
    //     this.limit = event.pageIndex * event.pageSize + event.pageSize;
    //     this.getTools();
    // }

    /**
     * Url Metrics for tools
     */
    public getMetricsForTool(id) {
        const url = id.replace("/tool/", "/metrics/");
    }

    public onActivate($event) {
        console.log($event);
    }
    public onDeactivate($event) {
        console.log($event);
    }
}
