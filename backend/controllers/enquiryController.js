import Enquiry from "../models/Enquiry.js";

export const createEnquiry = async (req, res, next) => {
  try {
    const enquiry = await Enquiry.create(req.body);

    res.status(201).json({
      success: true,
      message: "Your enquiry has been submitted successfully.",
      data: enquiry
    });
  } catch (error) {
    next(error);
  }
};

export const getEnquiries = async (req, res, next) => {
  try {
    const enquiries = await Enquiry.find()
      .sort({ createdAt: -1 })
      .lean();

    res.status(200).json({
      success: true,
      count: enquiries.length,
      data: enquiries
    });
  } catch (error) {
    next(error);
  }
};