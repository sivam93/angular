import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvancepoolComponent } from './advancepool.component';

describe('AdvancepoolComponent', () => {
  let component: AdvancepoolComponent;
  let fixture: ComponentFixture<AdvancepoolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdvancepoolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvancepoolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
