import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LockstatusComponent } from './lockstatus.component';

describe('LockstatusComponent', () => {
  let component: LockstatusComponent;
  let fixture: ComponentFixture<LockstatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LockstatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LockstatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
