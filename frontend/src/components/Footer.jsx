import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="container">

        {/* FOOTER TOP */}
        <div className="footer-top">

          {/* BRAND */}
          <div className="footer-brand">
            <Link to="/" className="footer-logo">
              <span className="brand-mark">TU</span>

              <span className="footer-brand-text">
                <strong>Travel</strong>
                <span>Unbounded</span>
              </span>
            </Link>

            <p>
              Thoughtful journeys for curious travellers.
              <br />
              Go further. Experience more.
            </p>
          </div>

          {/* EXPLORE */}
          <div className="footer-column">
            <h4>Explore</h4>

            <Link to="/">Home</Link>
            <Link to="/destinations">Destinations</Link>
            <Link to="/create-trip">Create Trip</Link>
          </div>

          {/* COMPANY */}
          <div className="footer-column">
            <h4>Company</h4>

            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
          </div>

          {/* START PLANNING */}
          <div className="footer-column">
            <h4>Start planning</h4>

            <p>
              Have a destination in mind?
              <br />
              Let's make it happen.
            </p>

            <Link to="/create-trip" className="footer-cta">
              Plan a journey <span>↗</span>
            </Link>
          </div>

        </div>

        {/* OFFICE ADDRESSES */}
        <div className="footer-offices">

          {/* BENGALURU */}
          <div className="footer-office">
            <span>Bengaluru — Headquarters</span>

            <p>
              541, 7th Main Rd, HAL 2nd Stage
              <br />
              Indiranagar, Bengaluru – 560008
              <br />
              India
            </p>
          </div>

          {/* KOCHI */}
          <div className="footer-office">
            <span>Kochi — Kerala Office</span>

            <p>
              LR Towers, S Janatha Road
              <br />
              Palavivatton, Kochi – 682025
              <br />
              India
            </p>
          </div>

          {/* NAIROBI */}
          <div className="footer-office">
            <span>Nairobi — Kenya Office</span>

            <p>
              Westpark Towers, Muthithi Road
              <br />
              Nairobi, P.O. Box 6950
              <br />
              Postal Code 00100
              <br />
              Kenya
            </p>
          </div>

        </div>

        {/* FOOTER BOTTOM */}
        <div className="footer-bottom">
          <span>
            © {new Date().getFullYear()} Travel Unbounded
          </span>

          <span>
            Travel beyond the ordinary.
          </span>
        </div>

      </div>
    </footer>
  );
};

export default Footer;