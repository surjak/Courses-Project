import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveCourseComponent } from './remove-course.component';

describe('RemoveCourseComponent', () => {
  let component: RemoveCourseComponent;
  let fixture: ComponentFixture<RemoveCourseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RemoveCourseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RemoveCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
