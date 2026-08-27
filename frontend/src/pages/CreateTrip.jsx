import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./CreateTrip.css";

function CreateTrip() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    destination: "",
    startDate: "",
    endDate: "",
    travelers: 1,
    budget: "",
    travelStyle: "Balanced",
    interests: [],
  });

  const interests = [
    "Nature",
    "Adventure",
    "Food",
    "Culture",
    "Shopping",
    "Beaches",
    "History",
    "Nightlife",
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleInterestChange = (interest) => {
    setFormData((prev) => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter((item) => item !== interest)
        : [...prev.interests, interest],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.destination.trim()) {
      alert("Please enter a destination.");
      return;
    }

    if (!formData.startDate || !formData.endDate) {
      alert("Please select your travel dates.");
      return;
    }

    if (new Date(formData.endDate) < new Date(formData.startDate)) {
      alert("End date cannot be before start date.");
      return;
    }

    const savedTrip = {
      ...formData,
      travelers: Number(formData.travelers),
      createdAt: new Date().toISOString(),
    };

    localStorage.setItem("travelUnboundTrip", JSON.stringify(savedTrip));

    navigate("/trip-plan");
  };

  return (
    <div className="create-trip-page">
      <div className="create-trip-container">
        <div className="create-trip-header">
          <span className="create-trip-badge">TRAVEL UNBOUND</span>

          <h1>Create Your Trip</h1>

          <p>
            Tell us about your journey and build a personalized travel plan.
          </p>
        </div>

        <form className="trip-form" onSubmit={handleSubmit}>
          <div className="form-section">
            <h2>Where are you going?</h2>

            <label htmlFor="destination">Destination</label>

            <input
              id="destination"
              type="text"
              name="destination"
              placeholder="Example: Goa, India"
              value={formData.destination}
              onChange={handleChange}
            />
          </div>

          <div className="form-section">
            <h2>When are you travelling?</h2>

            <div className="date-grid">
              <div>
                <label htmlFor="startDate">Start date</label>

                <input
                  id="startDate"
                  type="date"
                  name="startDate"
                  value={formData.startDate}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label htmlFor="endDate">End date</label>

                <input
                  id="endDate"
                  type="date"
                  name="endDate"
                  value={formData.endDate}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>

          <div className="form-section">
            <h2>Trip details</h2>

            <div className="date-grid">
              <div>
                <label htmlFor="travelers">Travellers</label>

                <input
                  id="travelers"
                  type="number"
                  name="travelers"
                  min="1"
                  max="20"
                  value={formData.travelers}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label htmlFor="budget">Budget</label>

                <input
                  id="budget"
                  type="number"
                  name="budget"
                  min="0"
                  placeholder="₹ 50,000"
                  value={formData.budget}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>

          <div className="form-section">
            <h2>Travel style</h2>

            <div className="style-options">
              {["Budget", "Balanced", "Luxury"].map((style) => (
                <button
                  type="button"
                  key={style}
                  className={
                    formData.travelStyle === style
                      ? "style-option active"
                      : "style-option"
                  }
                  onClick={() =>
                    setFormData((prev) => ({
                      ...prev,
                      travelStyle: style,
                    }))
                  }
                >
                  {style}
                </button>
              ))}
            </div>
          </div>

          <div className="form-section">
            <h2>What do you enjoy?</h2>

            <div className="interest-options">
              {interests.map((interest) => (
                <button
                  type="button"
                  key={interest}
                  className={
                    formData.interests.includes(interest)
                      ? "interest-option selected"
                      : "interest-option"
                  }
                  onClick={() => handleInterestChange(interest)}
                >
                  {interest}
                </button>
              ))}
            </div>
          </div>

          <button className="generate-trip-button" type="submit">
            Create Travel Plan
          </button>
        </form>
      </div>
    </div>
  );
}

export default CreateTrip;