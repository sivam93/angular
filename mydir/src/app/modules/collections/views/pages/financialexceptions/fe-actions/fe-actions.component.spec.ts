import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeActionsComponent } from './fe-actions.component';

describe('FeActionsComponent', () => {
  let component: FeActionsComponent;
  let fixture: ComponentFixture<FeActionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeActionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
