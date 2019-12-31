import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeExcinfoComponent } from './fe-excinfo.component';

describe('FeExcinfoComponent', () => {
  let component: FeExcinfoComponent;
  let fixture: ComponentFixture<FeExcinfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeExcinfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeExcinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
