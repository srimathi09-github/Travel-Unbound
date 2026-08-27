import { Link } from "react-router-dom";

const DestinationCard = ({ destination, featured = false }) => {
  return (
    <article
      className={`destination-card ${
        featured ? "destination-card-featured" : ""
      }`}
    >
      <Link
        to={`/destinations/${destination.id}`}
        className="destination-image"
      >
        <img
          src={destination.image}
          alt={destination.name}
          loading="lazy"
        />

        <div className="destination-image-overlay" />

        <span className="destination-category">
          {destination.category}
        </span>

        <span className="destination-arrow">↗</span>
      </Link>

      <div className="destination-card-content">
        <div>
          <p className="destination-country">
            {destination.country}
          </p>

          <h3>{destination.name}</h3>

          <p className="destination-tagline">
            {destination.tagline}
          </p>
        </div>

        <div className="destination-card-bottom">
          <div>
            <span>Starting from</span>
            <strong>{destination.price}</strong>
          </div>

          <div className="destination-actions">
            <Link
              to={`/destinations/${destination.id}`}
              className="text-link"
            >
              View details
            </Link>

            <Link to="/contact" className="small-cta">
              Enquire
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
};

export default DestinationCard;