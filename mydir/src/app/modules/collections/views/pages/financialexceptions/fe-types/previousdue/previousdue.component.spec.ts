import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviousdueComponent } from './previousdue.component';

describe('PreviousdueComponent', () => {
  let component: PreviousdueComponent;
  let fixture: ComponentFixture<PreviousdueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreviousdueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreviousdueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
