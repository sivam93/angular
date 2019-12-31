import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UntaggedDetailsComponent } from './untagged-details.component';

describe('UntaggedDetailsComponent', () => {
  let component: UntaggedDetailsComponent;
  let fixture: ComponentFixture<UntaggedDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UntaggedDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UntaggedDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
