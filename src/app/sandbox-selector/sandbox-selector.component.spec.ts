import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SandboxSelectorComponent } from './sandbox-selector.component';

describe('SandboxSelectorComponent', () => {
  let component: SandboxSelectorComponent;
  let fixture: ComponentFixture<SandboxSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SandboxSelectorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SandboxSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
