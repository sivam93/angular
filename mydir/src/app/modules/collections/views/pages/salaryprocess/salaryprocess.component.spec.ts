import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalaryprocessComponent } from './salaryprocess.component';

describe('SalaryprocessComponent', () => {
  let component: SalaryprocessComponent;
  let fixture: ComponentFixture<SalaryprocessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalaryprocessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalaryprocessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
