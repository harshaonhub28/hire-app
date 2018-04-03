const path = require("path");
const bodyParser = require("body-parser");
const fs = require("fs");

const { applicantModel } = require("../models/applicant.model");

const uploadApplicant = (req, res) => {
  if (req.body) {
    const name = req.body.name;
    const experienceSummary = req.body.experienceSummary;
    let countryPermitted = {};
    if (req.body.countryPermitted) {
      countryPermitted = {
        country: req.body.countryPermitted,
        permit: req.body.permit
      };
    }
    const photo = req.body.photo;
    const mobileNumber = req.body.mobileNumber;
    const email = req.body.email;
    const highestQualification = req.body.highestQualification;
    const institution = req.body.institution;
    const previousEmployer = {
      employer: req.body.employer,
      designation: req.body.designation,
      ctc: {
        currency: req.body.curency,
        quantity: req.body.ctc
      }
    };
    const noticePeriod = req.body.noticePeriod;
    const expectedCTC = {
      currency: req.body.curency,
      quantity: req.body.expectedCTC
    };
    let twoWheeler = false;
    if (req.body.twoWheeler) {
      twoWheeler = req.body.twoWheeler;
    }
    const reasonForChange = req.body.reasonForChange;
    const careerInterest = req.body.careerInterest;
    const pancardNo = req.body.pancardNo;
    const countryId = {
      country: req.body.country,
      uniqueId: req.body.uniqueId
    };
    const resume = req.body.resume;
    const phoneAvailability = {
      time: req.body.phoneTime,
      comments: req.body.commentOne
    };
    const interviewAvailability = {
      time: req.body.faceTime,
      comments: req.body.commentTwo
    };

    if (req.body.documents) {
      const documents = {
        aadhar: req.body.aadhar,
        pancard: req.body.pancard,
        contractLetters: {
          companyOne: req.body.contractOne,
          companyTwo: req.body.contractTwo
        },
        salaryRevision: req.body.salaryRevision,
        performanceLetter: req.body.performanceLetter,
        relievingLetter: req.body.relievingLetter,
        paySlips: {
          slipOne: req.body.paySlipOne,
          slipTwo: req.body.paySlipTwo,
          slipThree: req.body.paySlipThree
        },
        referenceLetter: {
          refOne: req.body.refOne,
          refTwo: req.body.refTwo
        },
        certificates: {
          pg: req.body.pg,
          ug: req.body.ug,
          twelfth: req.body.twelfth,
          tenth: req.body.tenth,
          other: req.body.other
        },
        workPermits: {
          one: req.body.workPermitOne,
          two: req.body.workPermitTwo
        },
        miscellaneous: {
          one: req.body.miscellaneousOne,
          two: req.body.miscellaneousTwo
        }
      };
    }

    let newApplicant = {
      name,
      experienceSummary,
      countryPermitted,
      photo,
      mobileNumber,
      email,
      highestQualification,
      institution,
      previousEmployer,
      noticePeriod,
      expectedCTC,
      twoWheeler,
      reasonForChange,
      careerInterest,
      pancardNo,
      countryId,
      resume,
      phoneAvailability,
      interviewAvailability,
      documents
    };

    applicantModel.create(newApplicant, (err, applicant) => {
      if (err) throw err;
      res.json({ message: "Applicant created" });
    });
  }
};

const getApplicant = (req, res) => {
  if (req.params.email) {
    const email = req.params.email;
    applicantModel.find({ email }, (err, applicant) => {
      if (err) throw err;
      res.json(applicant);
    });
  }
};

module.exports = { uploadApplicant, getApplicant };
