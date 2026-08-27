const validateEmail = (email) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

const validateEnquiry = (req, res, next) => {
  const {
    fullName,
    countryCode,
    contactNumber,
    email,
    dateOfTravel,
    numberOfPeople,
    hotelCategory,
    numberOfChildren
  } = req.body;

  const errors = {};

  // Full name
  if (!fullName?.trim()) {
    errors.fullName = "Full name is required";
  }

  // Country code
  if (!countryCode?.trim()) {
    errors.countryCode = "Country code is required";
  }

  // Contact number
  if (!contactNumber?.trim()) {
    errors.contactNumber = "Contact number is required";
  }

  // Email
  if (!email?.trim()) {
    errors.email = "Email is required";
  } else if (!validateEmail(email)) {
    errors.email = "Enter a valid email address";
  }

  // Travel date
  if (!dateOfTravel) {
    errors.dateOfTravel = "Travel date is required";
  } else {
    const travelDate = new Date(dateOfTravel);

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    if (
      Number.isNaN(travelDate.getTime()) ||
      travelDate <= today
    ) {
      errors.dateOfTravel =
        "Travel date must be in the future";
    }
  }

  // Number of people
  if (
    numberOfPeople === undefined ||
    Number(numberOfPeople) < 1
  ) {
    errors.numberOfPeople =
      "Number of people must be at least 1";
  }

  // Hotel category
  if (
    !["Standard", "Deluxe", "Luxury"].includes(
      hotelCategory
    )
  ) {
    errors.hotelCategory =
      "Select a valid hotel category";
  }

  // Children
  if (
    numberOfChildren === undefined ||
    Number(numberOfChildren) < 0
  ) {
    errors.numberOfChildren =
      "Number of children cannot be negative";
  }

  // Return validation errors
  if (Object.keys(errors).length > 0) {
    return res.status(400).json({
      success: false,
      message: "Please correct the validation errors.",
      errors
    });
  }

  next();
};

export default validateEnquiry;