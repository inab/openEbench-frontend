import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { BenchmarkingChallengeListComponent } from "./benchmarking-challenge-list.component";

describe("BenchmarkingChallengeListComponent", () => {
    let component: BenchmarkingChallengeListComponent;
    let fixture: ComponentFixture<BenchmarkingChallengeListComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [BenchmarkingChallengeListComponent],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(BenchmarkingChallengeListComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it("should create", () => {
        expect(component).toBeTruthy();
    });
});
