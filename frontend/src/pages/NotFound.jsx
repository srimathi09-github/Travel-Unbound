import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <section className="not-found">
      <div className="container">
        <p className="section-eyebrow">404</p>

        <h1>
          This page
          <br />
          <em>wandered off.</em>
        </h1>

        <p>
          The page you're looking for doesn't exist.
        </p>

        <Link to="/" className="btn btn-dark">
          Return home <span>↗</span>
        </Link>
      </div>
    </section>
  );
};

export default NotFound;