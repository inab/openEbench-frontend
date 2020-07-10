import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { BenchmarkingDetailComponent } from "./benchmarking-detail.component";

describe("BenchmarkingDetailComponent", () => {
    let component: BenchmarkingDetailComponent;
    let fixture: ComponentFixture<BenchmarkingDetailComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [BenchmarkingDetailComponent],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(BenchmarkingDetailComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it("should create", () => {
        expect(component).toBeTruthy();
    });
});
