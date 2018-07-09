import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScientificListComponent } from './scientific-list.component';

describe('ScientificListComponent', () => {
  let component: ScientificListComponent;
  let fixture: ComponentFixture<ScientificListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScientificListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScientificListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
