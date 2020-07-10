import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { catchError } from "rxjs/operators";

import { Tool } from "./tool";
import { Metrics } from "./metrics";
import { environment } from "../../../environments/environment";

import { Filter } from "./filter";

/**
 * injectable tool service
 */
@Injectable()
export class ToolService {
    /**
     * tool
     */
    public tool: Observable<Tool[]>;
    /**
     * metrics
     */
    public metrics: Observable<Metrics[]>;
    /**
     * res
     */
    public res;
    /**
     * count
     */
    public count: string;
    /**
     * url
     */
    private toolUrl = environment.TOOL_SERVICE_URL;
    /**
     * url
     */
    private toolSearchUrl = environment.TOOL_SEARCH_URL;
    /**
     * url
     */
    private toolStats = environment.TOOL_STATISTICS_URL;

    /**
     * constructor
     */
    constructor(private http: HttpClient) {}

    /**
     * Get tool by id from server
     */
    getToolById(id: string): Observable<Tool[]> {
        this.tool = this.http.get<Tool[]>(this.toolUrl, {
            params: new HttpParams().set("id", id),
        });
        return this.tool.pipe(catchError(this.handleError("getToolById", [])));
    }

    /**
     * Get tool metrics by id
     */
    getToolMetricsById(url: string): Observable<Metrics[]> {
        this.metrics = this.http.get<Metrics[]>(url);
        return this.metrics.pipe(
            catchError(this.handleError("getToolMetricsById", []))
        );
    }

    /**
     * Filter search for tools
     */
    getToolWithFilters(filter: Filter, skip: number, limit: number) {
        const headers = new HttpHeaders().set(
            "Range",
            "items=" + skip + "-" + limit
        );
        let params = new HttpParams()
            .set("projection", "description")
            .append("projection", "web");
        if (filter.type != null) {
            for (const x of filter.type) {
                params = params.append("type", x);
            }
        }
        switch (filter.filter) {
            case "Name":
                this.res = this.http.get(this.toolSearchUrl, {
                    headers: headers,
                    params: params = params
                        .set("name", filter.text)
                        .set("label", filter.label),
                    observe: "response",
                });
                break;
            case "Description":
                this.res = this.http.get(this.toolSearchUrl, {
                    headers: headers,
                    params: params = params
                        .set("description", filter.text)
                        .set("label", filter.label),
                    observe: "response",
                });
                console.log(params);
                break;
            default:
                this.res = this.http.get(this.toolSearchUrl, {
                    headers: headers,
                    params: params = params
                        .set("text", filter.text)
                        .set("label", filter.label),
                    observe: "response",
                });
                break;
        }
        return this.res.pipe(catchError(this.handleError("getToolById", [])));
    }

    /**
     * Get global statistics
     */
    getStats(): Observable<any> {
        return this.http.get(this.toolStats);
    }

    /**
     * Error handling
     */
    private handleError<T>(operation = "operation", result?: T) {
        return (error: any): Observable<T> => {
            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead

            // TODO: better job of transforming error for user consumption
            // this.log(`${operation} failed: ${error.message}`);

            // Let the app keep running by returning an empty result.
            return of(result as T);
        };
    }
}
