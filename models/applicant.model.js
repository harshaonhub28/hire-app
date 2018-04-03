const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const applicantSchema = new Schema({
  name: String,
  experienceSummary: String,
  countryPermitted: {
    country: String,
    permit: String
  },
  photo: String,
  mobileNumber: String,
  email: {
    type: String,
    unique: true
  },
  highestQualification: String,
  institution: String,
  previousEmployer: {
    employer: String,
    designation: String,
    ctc: {
      currency: String,
      quantity: String
    }
  },
  noticePeriod: String,
  expectedCTC: {
    currency: String,
    quantity: String
  },
  twoWheeler: Boolean,
  reasonForChange: String,
  careerInterest: String,
  pancardNo: String,
  countryId: {
    country: String,
    uniqueId: String
  },
  resume: String,
  phoneAvailability: {
    time: Date,
    comments: String
  },
  interviewAvailability: {
    time: Date,
    comments: String
  },
  documents: {
    aadhar: String,
    pancard: String,
    contractLetters: {
      companyOne: String,
      companyTwo: String
    },
    salaryRevision: String,
    performanceLetter: String,
    relievingLetter: String,
    paySlips: {
      slipOne: String,
      slipTwo: String,
      slipThree: String
    },
    referenceLetter: {
      refOne: String,
      refTwo: String
    },
    certificates: {
      pg: String,
      ug: String,
      twelfth: String,
      tenth: String,
      other: String
    },
    workPermits: {
      one: String,
      two: String
    },
    miscellaneous: {
      one: String,
      two: String
    }
  }
});

applicantSchema.set("timestamps", true);

const applicantModel = mongoose.model("applicant", applicantSchema);

module.exports = { applicantModel };
