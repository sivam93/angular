import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZeronetpayComponent } from './zeronetpay.component';

describe('ZeronetpayComponent', () => {
  let component: ZeronetpayComponent;
  let fixture: ComponentFixture<ZeronetpayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZeronetpayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZeronetpayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
