import { Link } from "react-router-dom";
import "./TripPlan.css";

function TripPlan() {
  const savedTrip = localStorage.getItem("travelUnboundTrip");

  if (!savedTrip) {
    return (
      <div className="trip-plan-page">
        <div className="trip-plan-container">
          <div className="trip-plan-empty">
            <span className="trip-plan-badge">
              TRAVEL UNBOUND
            </span>

            <h1>No trip found</h1>

            <p>
              Start creating your journey and we'll help you
              build a personalized travel plan.
            </p>

            <Link
              to="/create-trip"
              className="trip-plan-button"
            >
              Create a Trip
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const trip = JSON.parse(savedTrip);

  return (
    <div className="trip-plan-page">
      <div className="trip-plan-container">

        <div className="trip-plan-header">
          <span className="trip-plan-badge">
            YOUR JOURNEY
          </span>

          <h1>
            Your trip to{" "}
            <em>{trip.destination}</em>
          </h1>

          <p>
            Here's the journey you've created with Travel
            Unbounded.
          </p>
        </div>

        <div className="trip-plan-card">

          <div className="trip-plan-section">
            <span className="trip-plan-label">
              Destination
            </span>

            <h2>{trip.destination}</h2>
          </div>

          <div className="trip-plan-grid">

            <div className="trip-plan-item">
              <span>Start date</span>
              <strong>{trip.startDate}</strong>
            </div>

            <div className="trip-plan-item">
              <span>End date</span>
              <strong>{trip.endDate}</strong>
            </div>

            <div className="trip-plan-item">
              <span>Travellers</span>
              <strong>{trip.travelers}</strong>
            </div>

            <div className="trip-plan-item">
              <span>Budget</span>
              <strong>
                {trip.budget
                  ? `₹ ${Number(trip.budget).toLocaleString("en-IN")}`
                  : "Not specified"}
              </strong>
            </div>

          </div>

          <div className="trip-plan-section">
            <span className="trip-plan-label">
              Travel style
            </span>

            <strong className="trip-plan-style">
              {trip.travelStyle}
            </strong>
          </div>

          <div className="trip-plan-section">
            <span className="trip-plan-label">
              Interests
            </span>

            {trip.interests.length > 0 ? (
              <div className="trip-plan-interests">
                {trip.interests.map((interest) => (
                  <span key={interest}>
                    {interest}
                  </span>
                ))}
              </div>
            ) : (
              <p className="trip-plan-muted">
                No specific interests selected.
              </p>
            )}
          </div>

          <div className="trip-plan-actions">
            <Link
              to="/create-trip"
              className="trip-plan-secondary"
            >
              Edit trip
            </Link>

            <Link
              to="/contact"
              className="trip-plan-primary"
            >
              Enquire about this trip ↗
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
}

export default TripPlan;