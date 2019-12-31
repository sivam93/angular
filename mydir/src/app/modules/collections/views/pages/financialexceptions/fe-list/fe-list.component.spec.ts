import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeListComponent } from './fe-list.component';

describe('FeListComponent', () => {
  let component: FeListComponent;
  let fixture: ComponentFixture<FeListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
