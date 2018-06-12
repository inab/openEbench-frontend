import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgFancyLibComponent } from './ng-fancy-lib.component';

describe('NgFancyLibComponent', () => {
  let component: NgFancyLibComponent;
  let fixture: ComponentFixture<NgFancyLibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgFancyLibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgFancyLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
