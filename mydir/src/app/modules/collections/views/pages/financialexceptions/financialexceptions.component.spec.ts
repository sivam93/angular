import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinancialexceptionsComponent } from './financialexceptions.component';

describe('FinancialexceptionsComponent', () => {
  let component: FinancialexceptionsComponent;
  let fixture: ComponentFixture<FinancialexceptionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinancialexceptionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinancialexceptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
