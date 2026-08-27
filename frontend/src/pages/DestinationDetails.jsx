import { Link, useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";

import destinations from "../data/destinations";

const DestinationDetails = () => {
  const { id } = useParams();

  // Convert both URL ID and destination ID to strings
  // so numeric IDs and string IDs both work.
  const destination = destinations.find(
    (item) => String(item.id) === String(id)
  );

  if (!destination) {
    return (
      <section className="not-found">
        <div className="container">
          <h1>Destination not found</h1>

          <p>
            Sorry, we couldn't find the destination you're
            looking for.
          </p>

          <Link
            to="/destinations"
            className="btn btn-dark"
          >
            Back to destinations
          </Link>
        </div>
      </section>
    );
  }

  return (
    <>
      <Helmet>
        <title>
          {destination.name} | Travel Unbounded
        </title>

        <meta
          name="description"
          content={destination.description}
        />
      </Helmet>

      <section className="destination-detail-hero">
        <img
          src={destination.heroImage}
          alt={destination.name}
        />

        <div className="destination-detail-overlay" />

        <div className="container destination-detail-hero-content">
          <p>{destination.country}</p>

          <h1>{destination.name}</h1>

          <span>{destination.tagline}</span>
        </div>
      </section>

      <section className="destination-detail-intro">
        <div className="container detail-intro-grid">
          <div>
            <p className="section-eyebrow">
              Discover {destination.name}
            </p>

            <h2>
              A journey designed
              <br />
              <em>around you.</em>
            </h2>
          </div>

          <div>
            <p className="detail-large-copy">
              {destination.longDescription}
            </p>

            <div className="detail-price">
              <span>Starting from</span>
              <strong>{destination.price}</strong>
            </div>

            <Link
              to="/contact"
              className="btn btn-dark"
            >
              Enquire about this journey <span>↗</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="detail-experiences">
        <div className="container">
          <div className="detail-columns">
            <div>
              <p className="section-eyebrow">
                Highlights
              </p>

              <h2>What you'll discover</h2>

              <ul className="detail-list">
                {destination.highlights?.map(
                  (highlight, index) => (
                    <li key={highlight}>
                      <span>
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      {highlight}
                    </li>
                  )
                )}
              </ul>
            </div>

            <div>
              <p className="section-eyebrow">
                Experiences
              </p>

              <h2>What you can do</h2>

              <ul className="detail-list">
                {destination.activities?.map(
                  (activity, index) => (
                    <li key={activity}>
                      <span>
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      {activity}
                    </li>
                  )
                )}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="detail-cta">
        <div className="container">
          <p className="section-eyebrow">
            Ready when you are
          </p>

          <h2>
            Let's make {destination.name}
            <br />
            <em>your next story.</em>
          </h2>

          <Link
            to="/contact"
            className="btn btn-light"
          >
            Start planning <span>↗</span>
          </Link>
        </div>
      </section>
    </>
  );
};

export default DestinationDetails;