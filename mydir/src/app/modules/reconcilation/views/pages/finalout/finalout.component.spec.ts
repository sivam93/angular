import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinalOutComponent } from './finalout.component';

describe('DashboardComponent', () => {
  let component: FinalOutComponent;
  let fixture: ComponentFixture<FinalOutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinalOutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinalOutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
