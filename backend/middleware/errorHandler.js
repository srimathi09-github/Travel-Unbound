const errorHandler = (error, req, res, next) => {
  console.error(error);

  if (error.name === "ValidationError") {
    return res.status(400).json({
      success: false,
      message: "Invalid enquiry data."
    });
  }

  res.status(500).json({
    success: false,
    message: "Something went wrong. Please try again later."
  });
};

export default errorHandler;