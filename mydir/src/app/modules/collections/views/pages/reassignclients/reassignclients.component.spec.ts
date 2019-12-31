import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReassignclientsComponent } from './reassignclients.component';

describe('ReassignclientsComponent', () => {
  let component: ReassignclientsComponent;
  let fixture: ComponentFixture<ReassignclientsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReassignclientsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReassignclientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
