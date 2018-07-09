import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BenchmarkingListComponent } from './benchmarking-list.component';

describe('BenchmarkingDetailsComponent', () => {
  let component: BenchmarkingListComponent;
  let fixture: ComponentFixture<BenchmarkingListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BenchmarkingListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BenchmarkingListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
