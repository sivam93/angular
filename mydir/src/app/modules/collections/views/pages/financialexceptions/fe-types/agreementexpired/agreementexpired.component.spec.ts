import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgreementexpiredComponent } from './agreementexpired.component';

describe('AgreementexpiredComponent', () => {
  let component: AgreementexpiredComponent;
  let fixture: ComponentFixture<AgreementexpiredComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgreementexpiredComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgreementexpiredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
