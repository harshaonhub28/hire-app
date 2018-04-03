import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadApplicantComponent } from './upload-applicant.component';

describe('UploadApplicantComponent', () => {
  let component: UploadApplicantComponent;
  let fixture: ComponentFixture<UploadApplicantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadApplicantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadApplicantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
