const express = require("express");
const router = express.Router();
const { getLandlords, runScrape, downloadLandlords } = require("../controllers/landlordController");

router.get("/", getLandlords);
router.post("/run-scrape", runScrape);
router.get("/download", downloadLandlords);

module.exports = router; // Ensure you are exporting the router object.