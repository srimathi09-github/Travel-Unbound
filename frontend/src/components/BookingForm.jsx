import { useState } from "react";
import { submitEnquiry } from "../services/enquiryService";

const initialForm = {
  fullName: "",
  countryCode: "+91",
  contactNumber: "",
  email: "",
  dateOfTravel: "",
  numberOfPeople: "1",
  hotelCategory: "",
  numberOfChildren: "0"
};

const BookingForm = () => {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle");

  const today = new Date();
  const minDate = new Date(today);

  minDate.setDate(today.getDate() + 1);

  const minDateString = minDate
    .toISOString()
    .split("T")[0];

  const validate = () => {
    const newErrors = {};

    if (!form.fullName.trim()) {
      newErrors.fullName = "Please enter your full name.";
    }

    if (!form.countryCode.trim()) {
      newErrors.countryCode =
        "Please select a country code.";
    }

    if (!form.contactNumber.trim()) {
      newErrors.contactNumber =
        "Please enter your contact number.";
    } else if (!/^[0-9]{7,15}$/.test(form.contactNumber)) {
      newErrors.contactNumber =
        "Enter a valid phone number.";
    }

    if (!form.email.trim()) {
      newErrors.email = "Please enter your email.";
    } else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)
    ) {
      newErrors.email =
        "Please enter a valid email address.";
    }

    if (!form.dateOfTravel) {
      newErrors.dateOfTravel =
        "Please select your travel date.";
    } else if (form.dateOfTravel < minDateString) {
      newErrors.dateOfTravel =
        "Travel date must be in the future.";
    }

    if (
      !form.numberOfPeople ||
      Number(form.numberOfPeople) < 1
    ) {
      newErrors.numberOfPeople =
        "At least 1 traveller is required.";
    }

    if (!form.hotelCategory) {
      newErrors.hotelCategory =
        "Please select a hotel category.";
    }

    if (
      form.numberOfChildren === "" ||
      Number(form.numberOfChildren) < 0
    ) {
      newErrors.numberOfChildren =
        "Number of children cannot be negative.";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setForm((previous) => ({
      ...previous,
      [name]: value
    }));

    if (errors[name]) {
      setErrors((previous) => ({
        ...previous,
        [name]: ""
      }));
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!validate()) {
      return;
    }

    setStatus("loading");

    try {
      await submitEnquiry({
        ...form,
        numberOfPeople: Number(form.numberOfPeople),
        numberOfChildren: Number(form.numberOfChildren)
      });

      setStatus("success");
      setForm(initialForm);
      setErrors({});
    } catch (error) {
      setStatus("error");

      if (error.response?.data?.errors) {
        setErrors(error.response.data.errors);
      }
    }
  };

  if (status === "success") {
    return (
      <div className="form-success">
        <div className="success-icon">✓</div>

        <p className="section-eyebrow">
          Enquiry received
        </p>

        <h2>
          Your journey
          <br />
          <em>starts here.</em>
        </h2>

        <p>
          Thank you! Our travel expert will contact you
          within 24 hours to start creating your journey.
        </p>

        <button
          className="btn btn-dark"
          onClick={() => setStatus("idle")}
        >
          Send another enquiry
        </button>
      </div>
    );
  }

  return (
    <form className="booking-form" onSubmit={handleSubmit}>
      {status === "error" && (
        <div className="form-error-banner">
          Something went wrong while sending your enquiry.
          Please check your details and try again.
        </div>
      )}

      <div className="form-grid">
        <div className="form-field form-field-full">
          <label htmlFor="fullName">
            Full Name
          </label>

          <input
            id="fullName"
            name="fullName"
            value={form.fullName}
            onChange={handleChange}
            placeholder="Your full name"
          />

          {errors.fullName && (
            <span className="field-error">
              {errors.fullName}
            </span>
          )}
        </div>

        <div className="form-field">
          <label htmlFor="countryCode">
            Country Code
          </label>

          <select
            id="countryCode"
            name="countryCode"
            value={form.countryCode}
            onChange={handleChange}
          >
            <option value="+91">India (+91)</option>
            <option value="+1">USA (+1)</option>
            <option value="+44">UK (+44)</option>
            <option value="+61">Australia (+61)</option>
            <option value="+971">UAE (+971)</option>
            <option value="+254">Kenya (+254)</option>
          </select>

          {errors.countryCode && (
            <span className="field-error">
              {errors.countryCode}
            </span>
          )}
        </div>

        <div className="form-field">
          <label htmlFor="contactNumber">
            Contact Number
          </label>

          <input
            id="contactNumber"
            name="contactNumber"
            value={form.contactNumber}
            onChange={handleChange}
            inputMode="numeric"
            placeholder="9876543210"
          />

          {errors.contactNumber && (
            <span className="field-error">
              {errors.contactNumber}
            </span>
          )}
        </div>

        <div className="form-field form-field-full">
          <label htmlFor="email">
            Email Address
          </label>

          <input
            id="email"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            placeholder="you@example.com"
          />

          {errors.email && (
            <span className="field-error">
              {errors.email}
            </span>
          )}
        </div>

        <div className="form-field">
          <label htmlFor="dateOfTravel">
            Date of Travel
          </label>

          <input
            id="dateOfTravel"
            name="dateOfTravel"
            type="date"
            min={minDateString}
            value={form.dateOfTravel}
            onChange={handleChange}
          />

          {errors.dateOfTravel && (
            <span className="field-error">
              {errors.dateOfTravel}
            </span>
          )}
        </div>

        <div className="form-field">
          <label htmlFor="numberOfPeople">
            Number of People
          </label>

          <input
            id="numberOfPeople"
            name="numberOfPeople"
            type="number"
            min="1"
            value={form.numberOfPeople}
            onChange={handleChange}
          />

          {errors.numberOfPeople && (
            <span className="field-error">
              {errors.numberOfPeople}
            </span>
          )}
        </div>

        <div className="form-field">
          <label htmlFor="hotelCategory">
            Hotel Category
          </label>

          <select
            id="hotelCategory"
            name="hotelCategory"
            value={form.hotelCategory}
            onChange={handleChange}
          >
            <option value="">
              Select category
            </option>

            <option value="Standard">
              Standard
            </option>

            <option value="Deluxe">
              Deluxe
            </option>

            <option value="Luxury">
              Luxury
            </option>
          </select>

          {errors.hotelCategory && (
            <span className="field-error">
              {errors.hotelCategory}
            </span>
          )}
        </div>

        <div className="form-field">
          <label htmlFor="numberOfChildren">
            Number of Children
          </label>

          <input
            id="numberOfChildren"
            name="numberOfChildren"
            type="number"
            min="0"
            value={form.numberOfChildren}
            onChange={handleChange}
          />

          {errors.numberOfChildren && (
            <span className="field-error">
              {errors.numberOfChildren}
            </span>
          )}
        </div>
      </div>

      <div className="form-submit">
        <button
          type="submit"
          className="btn btn-dark"
          disabled={status === "loading"}
        >
          {status === "loading"
            ? "Sending your enquiry..."
            : "Start planning my journey"}

          {status !== "loading" && <span>↗</span>}
        </button>

        <p>
          Your information is kept private and will only be
          used to respond to your enquiry.
        </p>
      </div>
    </form>
  );
};

export default BookingForm;