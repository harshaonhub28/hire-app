const router = require("express").Router();
const logger = require("./config/logger");

const applicantController = require("./controllers/applicant.controller");
/* everything will go at /api/route */
//health check url
router.get("/health", (req, res) => {
  res.send("OK");
});
//api to upload applicant
router.post("/upload/applicant", applicantController.uploadApplicant);
//api to get applicant
router.get("/get/applicant", applicantController.getApplicant);

module.exports = router;
