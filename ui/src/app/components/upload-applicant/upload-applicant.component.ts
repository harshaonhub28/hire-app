import { Component, OnInit, ViewChild, AfterViewInit } from "@angular/core";
import { SignaturePad } from "angular2-signaturepad/signature-pad";
import { MatSnackBar } from "@angular/material/snack-bar";

@Component({
  selector: "upload-applicant",
  templateUrl: "./upload-applicant.component.html",
  styleUrls: ["./upload-applicant.component.css"]
})
export class UploadApplicantComponent implements OnInit, AfterViewInit {
  currencies = ["INR", "USD"];
  selectedCurrency = "INR";
  reasons = [
    "Career Prospects",
    "Salary concerns",
    "Work environment",
    "Relocation",
    "Personal reasons",
    "Company downsizing employees",
    "Not meeting performance targets",
    "Other"
  ];
  declared = false;

  name;
  experienceSummary;
  countryPermitted = {
    country: "",
    permit: ""
  };
  photo;
  photoName;
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
  otherReason;
  careerInterest;
  pancardNo;
  countryId = {
    country: "",
    uniqueId: ""
  };
  resume;
  resumeName;
  phoneAvailability = {
    time: "",
    comments: ""
  };
  interviewAvailability = {
    time: "",
    comments: ""
  };
  sign;

  signaturePadOptions: Object = {
    // passed through to signature_pad constructor
    minWidth: 5,
    canvasWidth: 500,
    canvasHeight: 200
  };

  @ViewChild(SignaturePad) signaturePad: SignaturePad;

  constructor(public snackBar: MatSnackBar) {}

  ngOnInit() {
    //linking photo input file to the button
    let fileInput = document.getElementById("photo-file-input");
    let customInput = document.getElementById("photo-custom-file-input");

    customInput.addEventListener("click", () => {
      fileInput.click();
      //console.log(fileInput);
    });

    fileInput.addEventListener("change", event => {
      let file = (event.target as HTMLInputElement).value;
      if (file) {
        this.photoName = (event.target as HTMLInputElement).value.replace(
          /^.*[\\\/]/,
          ""
        );
        customInput.innerText = this.photoName;
      }
    });

    //linking resume input file to the button
    fileInput = document.getElementById("resume-file-input");
    customInput = document.getElementById("resume-custom-file-input");

    customInput.addEventListener("click", () => {
      fileInput.click();
      //console.log(fileInput);
    });

    fileInput.addEventListener("change", event => {
      let file = (event.target as HTMLInputElement).value;
      if (file) {
        this.resumeName = (event.target as HTMLInputElement).value.replace(
          /^.*[\\\/]/,
          ""
        );
        customInput.innerText = this.resumeName;
      }
    });
  }

  ngAfterViewInit() {
    //signature pad
    this.signaturePad.set("minWidth", 5);
    this.signaturePad.clear();
  }

  encodePhoto() {
    let doc = document.getElementById("photo-file-input") as HTMLInputElement;
    let file = doc.files[0];

    let dataPromise = new Promise((resolve, reject) => {
      let reader = new FileReader() as any;
      reader.onload = function(event) {
        resolve(reader.result.split(",")[1]);
      };
      reader.onerror = function(error) {
        console.log("Error: ", error);
        reject(error);
      };
      if (file) {
        reader.readAsDataURL(file);
      }
    }).then(base64 => {
      this.photo = base64;
    });
  }

  encodeResume() {
    let doc = document.getElementById("resume-file-input") as HTMLInputElement;
    let file = doc.files[0];

    let dataPromise = new Promise((resolve, reject) => {
      let reader = new FileReader() as any;
      reader.onload = function(event) {
        resolve(reader.result.split(",")[1]);
      };
      reader.onerror = function(error) {
        console.log("Error: ", error);
        reject(error);
      };
      if (file) {
        reader.readAsDataURL(file);
      }
    }).then(base64 => {
      this.resume = base64;
    });
  }

  drawComplete() {
    // will be notified of szimek/signature_pad's onEnd event
    this.sign = this.signaturePad.toDataURL();
  }

  drawStart() {
    // will be notified of szimek/signature_pad's onBegin event
    //console.log("drawing!");
  }

  onReset() {
    this.signaturePad.clear();
    this.sign = "";
  }

  onSubmit() {
    if (!this.declared) {
      this.snackBar.open("Please accept the declaration", "Ok", {
        duration: 3000
      });
    } else {
      if (this.sign) {
        let applicant = {
          name: this.name,
          experienceSummary: this.experienceSummary,
          countryPermitted: this.countryPermitted,
          photo: this.photo,
          photoName: this.photoName,
          mobileNumber: this.mobileNumber,
          email: this.email,
          highestQualification: this.highestQualification,
          institution: this.institution,
          previousEmployer: this.previousEmployer,
          noticePeriod: this.noticePeriod,
          expectedCTC: this.expectedCTC,
          twoWheeler: this.twoWheeler,
          reasonForChange: this.reasonForChange,
          otherReason: this.otherReason,
          careerInterest: this.careerInterest,
          pancardNo: this.pancardNo,
          countryId: this.countryId,
          resume: this.resume,
          resumeName: this.resumeName,
          phoneAvailability: this.phoneAvailability,
          interviewAvailability: this.interviewAvailability,
          sign: this.sign
        };
        applicant.previousEmployer.ctc.currency = this.selectedCurrency;
        applicant.expectedCTC.currency = this.selectedCurrency;
        if (applicant.twoWheeler === "Yes") {
          applicant.twoWheeler = true;
        } else if (applicant.twoWheeler === "No") {
          applicant.twoWheeler = false;
        }
        console.log(applicant);
      } else {
        this.snackBar.open("Please sign before submitting", "Ok", {
          duration: 3000
        });
      }
    }
  }
}
