import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BDMCreatorComponent } from './BDMCreator.component';

describe('BDMCreatorComponent', () => {
  let component: BDMCreatorComponent;
  let fixture: ComponentFixture<BDMCreatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BDMCreatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BDMCreatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
