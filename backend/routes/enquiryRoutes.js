import express from "express";

import {
  createEnquiry,
  getEnquiries
} from "../controllers/enquiryController.js";

import validateEnquiry from "../middleware/validation.js";

const router = express.Router();

router.post("/", validateEnquiry, createEnquiry);

router.get("/", getEnquiries);

export default router;