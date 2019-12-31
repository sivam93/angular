import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalaryreleaseComponent } from './salaryrelease.component';

describe('SalaryreleaseComponent', () => {
  let component: SalaryreleaseComponent;
  let fixture: ComponentFixture<SalaryreleaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalaryreleaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalaryreleaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
