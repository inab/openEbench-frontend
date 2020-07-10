import { NgModule } from "@angular/core";

import { ScientificListComponent } from "./scientific-list/scientific-list.component";
import { BenchmarkingListComponent } from "./benchmarking-list/benchmarking-list.component";
import { BenchmarkingDetailComponent } from "./benchmarking-detail/benchmarking-detail.component";

import { RouterModule, Routes } from "@angular/router";

import { BenchmarkingChallengeListComponent } from "./benchmarking-challenge-list/benchmarking-challenge-list.component";

/**
 * routes
 */
const routes: Routes = [
    {
        path: "",
        children: [
            { path: "", component: ScientificListComponent },
            { path: ":id", component: BenchmarkingListComponent },
            {
                path: ":id/:bchallengeid",
                component: BenchmarkingDetailComponent,
            },
        ],
    },
];

/**
 * child module for routing
 */
@NgModule({
    // This is a child module so we use forChild
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})

/**
 * export routing module
 */
export class ScientificRoutingModule {}
/**
 * routing components export
 */

export const AllScientificRoutingComponents = [
    ScientificListComponent,
    BenchmarkingListComponent,
    BenchmarkingChallengeListComponent,
    BenchmarkingDetailComponent,
];
