import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolTableComponent } from './tool-table.component';

describe('ToolTableComponent', () => {
  let component: ToolTableComponent;
  let fixture: ComponentFixture<ToolTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToolTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToolTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
