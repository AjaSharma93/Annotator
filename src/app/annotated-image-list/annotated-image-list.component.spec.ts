import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnotatedImageListComponent } from './annotated-image-list.component';

describe('AnnotatedImageListComponent', () => {
  let component: AnnotatedImageListComponent;
  let fixture: ComponentFixture<AnnotatedImageListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnnotatedImageListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnnotatedImageListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
