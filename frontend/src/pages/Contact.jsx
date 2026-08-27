import { useState } from "react";
import { Helmet } from "react-helmet-async";

import { submitEnquiry } from "../services/enquiryService";

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    countryCode: "+91",
    contactNumber: "",
    email: "",
    dateOfTravel: "",
    numberOfPeople: 1,
    hotelCategory: "Standard",
    numberOfChildren: 0
  });

  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    setLoading(true);
    setStatus("");

    try {
      await submitEnquiry({
        ...formData,
        numberOfPeople: Number(formData.numberOfPeople),
        numberOfChildren: Number(formData.numberOfChildren)
      });

      setStatus(
        "Thank you. Your enquiry has been received. We will get back to you soon."
      );

      setFormData({
        fullName: "",
        countryCode: "+91",
        contactNumber: "",
        email: "",
        dateOfTravel: "",
        numberOfPeople: 1,
        hotelCategory: "Standard",
        numberOfChildren: 0
      });
    } catch (error) {
      console.error("Enquiry submission error:", error);

      if (error.response?.data?.errors) {
        console.error("Validation errors:", error.response.data.errors);
      }

      setStatus(
        error.response?.data?.message ||
          "We couldn't submit your enquiry right now. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>Contact | Travel Unbounded</title>

        <meta
          name="description"
          content="Get in touch with Travel Unbounded and start planning your next journey."
        />
      </Helmet>

      {/* PAGE HERO */}
      <section className="page-hero">
        <div className="page-hero-image">
          <img
            src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=2200&q=90"
            alt="Traveller walking through a destination"
          />
        </div>

        <div className="page-hero-overlay" />

        <div className="container page-hero-content">
          <p className="section-eyebrow">Get in touch</p>

          <h1>
            Let's plan
            <br />
            <em>something unforgettable.</em>
          </h1>
        </div>
      </section>

      {/* CONTACT */}
      <section className="contact-section">
        <div className="container contact-grid">

          {/* LEFT SIDE */}
          <div className="contact-info">
            <p className="section-eyebrow">Start a conversation</p>

            <h2>
              Tell us where
              <br />
              <em>you want to go.</em>
            </h2>

            <p className="contact-description">
              Tell us a little about your travel plans. We'll use your ideas
              to help shape a journey that feels right for you.
            </p>

            <div className="contact-details">
              <div>
                <span>Email</span>

                <a href="mailto:hello@travelunbounded.com">
                  hello@travelunbounded.com
                </a>
              </div>

              <div>
                <span>Response time</span>

                <p>Usually within 24 hours</p>
              </div>

              <div>
                <span>Journey planning</span>

                <p>India & International</p>
              </div>
            </div>
          </div>

          {/* FORM */}
          <div className="contact-form-wrapper">
            <form onSubmit={handleSubmit}>

              {/* NAME + EMAIL */}
              <div className="form-row">

                <div className="form-group">
                  <label htmlFor="fullName">
                    Full name
                  </label>

                  <input
                    id="fullName"
                    name="fullName"
                    type="text"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">
                    Email address
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    required
                  />
                </div>

              </div>

              {/* PHONE */}
              <div className="form-row">

                <div className="form-group">
                  <label htmlFor="countryCode">
                    Country code
                  </label>

                  <select
                    id="countryCode"
                    name="countryCode"
                    value={formData.countryCode}
                    onChange={handleChange}
                    required
                  >
                    <option value="+91">
                      India (+91)
                    </option>

                    <option value="+254">
                      Kenya (+254)
                    </option>

                    <option value="+94">
                      Sri Lanka (+94)
                    </option>

                    <option value="+84">
                      Vietnam (+84)
                    </option>

                    <option value="+255">
                      Tanzania (+255)
                    </option>

                    <option value="+354">
                      Iceland (+354)
                    </option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="contactNumber">
                    Contact number
                  </label>

                  <input
                    id="contactNumber"
                    name="contactNumber"
                    type="tel"
                    value={formData.contactNumber}
                    onChange={handleChange}
                    placeholder="Your phone number"
                    required
                  />
                </div>

              </div>

              {/* DATE + PEOPLE */}
              <div className="form-row">

                <div className="form-group">
                  <label htmlFor="dateOfTravel">
                    Date of travel
                  </label>

                  <input
                    id="dateOfTravel"
                    name="dateOfTravel"
                    type="date"
                    value={formData.dateOfTravel}
                    onChange={handleChange}
                    min={new Date().toISOString().split("T")[0]}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="numberOfPeople">
                    Number of people
                  </label>

                  <input
                    id="numberOfPeople"
                    name="numberOfPeople"
                    type="number"
                    min="1"
                    max="50"
                    value={formData.numberOfPeople}
                    onChange={handleChange}
                    required
                  />
                </div>

              </div>

              {/* HOTEL + CHILDREN */}
              <div className="form-row">

                <div className="form-group">
                  <label htmlFor="hotelCategory">
                    Hotel category
                  </label>

                  <select
                    id="hotelCategory"
                    name="hotelCategory"
                    value={formData.hotelCategory}
                    onChange={handleChange}
                    required
                  >
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
                </div>

                <div className="form-group">
                  <label htmlFor="numberOfChildren">
                    Number of children
                  </label>

                  <input
                    id="numberOfChildren"
                    name="numberOfChildren"
                    type="number"
                    min="0"
                    max="20"
                    value={formData.numberOfChildren}
                    onChange={handleChange}
                    required
                  />
                </div>

              </div>

              {/* SUBMIT */}
              <button
                type="submit"
                className="btn btn-dark contact-submit"
                disabled={loading}
              >
                {loading ? "Sending..." : "Send enquiry"}

                {!loading && <span>↗</span>}
              </button>

              {status && (
                <p
                  className="form-status"
                  role="status"
                >
                  {status}
                </p>
              )}

            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;