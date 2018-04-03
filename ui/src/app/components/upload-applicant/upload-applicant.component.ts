import { Component, OnInit } from "@angular/core";

@Component({
  selector: "upload-applicant",
  templateUrl: "./upload-applicant.component.html",
  styleUrls: ["./upload-applicant.component.css"]
})
export class UploadApplicantComponent implements OnInit {
  currencies = ["INR", "USD"];
  selectedCurrecy = "INR";
  reasons = [
    "Career Prospects",
    "Salary concerns",
    "Work environment",
    "Relocation",
    "Personal reasons",
    "Company downsizing employees",
    "Not meeting performance targets",
    "Other(Please specify)"
  ];

  name;
  experienceSummary;
  countryPermitted = {
    country: "",
    permit: ""
  };
  photo;
  mobileNumber;
  email;
  highestQualification;
  institution;
  previousEmployer = {
    employer: "",
    designation: "",
    ctc: {
      currency: "",
      quantity: ""
    }
  };
  noticePeriod;
  expectedCTC = {
    currency: "",
    quantity: ""
  };
  twoWheeler;
  reasonForChange;
  careerInterest;
  pancardNo;
  countryId = {
    country: "",
    uniqueId: ""
  };
  resume;
  phoneAvailability = {
    time: "",
    comments: ""
  };
  interviewAvailability = {
    time: "",
    comments: ""
  };

  constructor() {}

  ngOnInit() {}
}
