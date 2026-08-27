import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

import Hero from "../components/Hero";
import SectionHeading from "../components/SectionHeading";
import DestinationGrid from "../components/DestinationGrid";
import WhyChooseUs from "../components/WhyChooseUs";

import destinations from "../data/destinations";

const Home = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 6;

  const totalPages = Math.ceil(
    destinations.length / itemsPerPage
  );

  const startIndex =
    (currentPage - 1) * itemsPerPage;

  const currentDestinations = destinations.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  const handlePageChange = (page) => {
    setCurrentPage(page);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <Helmet>
        <title>
          Travel Unbounded | Experiential Travel Experts
        </title>

        <meta
          name="description"
          content="Travel Unbounded creates personalised experiential journeys across India and the world."
        />
      </Helmet>

      <Hero />

      {/* INTRO */}
      <section className="intro-section">
        <div className="container intro-grid">
          <div>
            <p className="section-eyebrow">
              Travel Unbounded
            </p>

            <h2>
              We don't sell trips.
              <br />
              <em>We create journeys.</em>
            </h2>
          </div>

          <div className="intro-copy">
            <p>
              Travel Unbounded was born from a simple belief —
              that the best journeys aren't sold from a
              catalogue. They're built around the people
              taking them.
            </p>

            <Link
              to="/about"
              className="text-link large-link"
            >
              Discover our story <span>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* DESTINATIONS */}
      <section className="destinations-section">
        <div className="container">

          <SectionHeading
            eyebrow="Where will you go?"
            title="Destinations that stay with you."
            description="From India's hidden corners to extraordinary journeys across the world, discover places chosen for the experience they create."
          />

          <DestinationGrid
            destinations={currentDestinations}
          />

          {/* PAGINATION */}
          {totalPages > 1 && (
            <div className="pagination">

              <button
                className="pagination-button"
                onClick={() =>
                  handlePageChange(currentPage - 1)
                }
                disabled={currentPage === 1}
              >
                ← Previous
              </button>

              <div className="pagination-pages">
                {Array.from(
                  { length: totalPages },
                  (_, index) => index + 1
                ).map((page) => (
                  <button
                    key={page}
                    className={
                      currentPage === page
                        ? "pagination-page active"
                        : "pagination-page"
                    }
                    onClick={() =>
                      handlePageChange(page)
                    }
                  >
                    {page}
                  </button>
                ))}
              </div>

              <button
                className="pagination-button"
                onClick={() =>
                  handlePageChange(currentPage + 1)
                }
                disabled={
                  currentPage === totalPages
                }
              >
                Next →
              </button>

            </div>
          )}

          <div className="center-action">
            <Link
              to="/destinations"
              className="btn btn-dark"
            >
              Explore all destinations <span>↗</span>
            </Link>
          </div>

        </div>
      </section>

      <WhyChooseUs />

      {/* STORY IMAGE */}
      <section className="story-image-section">
        <img
          src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=2200&q=90"
          alt="Traveller exploring a scenic landscape"
          loading="lazy"
        />

        <div className="story-image-overlay" />

        <div className="story-image-content">
          <p className="section-eyebrow">
            Your next story starts here
          </p>

          <h2>
            Go somewhere
            <br />
            <em>worth remembering.</em>
          </h2>

          <Link
            to="/contact"
            className="btn btn-light"
          >
            Plan your journey <span>↗</span>
          </Link>
        </div>
      </section>
    </>
  );
};

export default Home;