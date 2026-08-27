import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-image">
        <img
          src="https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=2200&q=90"
          alt="Mountain landscape"
        />
      </div>

      <div className="hero-overlay" />

      <div className="hero-content container">
        <p className="hero-eyebrow">
          Experiential travel, thoughtfully designed
        </p>

        <h1>
          India's Most Trusted
          <br />
          <em>Experiential Travel Experts</em>
        </h1>

        <p className="hero-description">
          Journeys built around you. Experiences you'll
          remember forever.
        </p>

        <div className="hero-actions">
          <Link to="/contact" className="btn btn-primary">
            Plan Your Trip
            <span>↗</span>
          </Link>

          <Link to="/destinations" className="btn btn-light-outline">
            Explore Destinations
          </Link>
        </div>
      </div>

      <div className="hero-bottom">
        <span>01</span>
        <div className="hero-line">
          <span />
        </div>
        <span>Scroll to explore</span>
      </div>
    </section>
  );
};

export default Hero;