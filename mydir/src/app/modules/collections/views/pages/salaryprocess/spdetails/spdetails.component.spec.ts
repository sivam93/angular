import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpdetailsComponent } from './spdetails.component';

describe('SpdetailsComponent', () => {
  let component: SpdetailsComponent;
  let fixture: ComponentFixture<SpdetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpdetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
