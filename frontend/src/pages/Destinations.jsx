import { useState } from "react";
import { Helmet } from "react-helmet-async";

import SectionHeading from "../components/SectionHeading";
import DestinationGrid from "../components/DestinationGrid";

import destinations from "../data/destinations";

const ITEMS_PER_PAGE = 6;

const Destinations = () => {
  const [filter, setFilter] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);

  const filteredDestinations =
    filter === "All"
      ? destinations
      : destinations.filter(
          (destination) => destination.category === filter
        );

  const totalPages = Math.ceil(
    filteredDestinations.length / ITEMS_PER_PAGE
  );

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;

  const paginatedDestinations = filteredDestinations.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  const handleFilterChange = (category) => {
    setFilter(category);
    setCurrentPage(1);
  };

  return (
    <>
      <Helmet>
        <title>Destinations | Travel Unbounded</title>

        <meta
          name="description"
          content="Explore personalised travel experiences across India and international destinations."
        />
      </Helmet>

      {/* HERO */}
      <section className="page-hero">
        <div className="page-hero-image">
          <img
            src="https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=2200&q=90"
            alt="Beautiful travel landscape"
          />
        </div>

        <div className="page-hero-overlay" />

        <div className="container page-hero-content">
          <p className="section-eyebrow">
            Explore the world
          </p>

          <h1>
            Places that
            <br />
            <em>tell a story.</em>
          </h1>
        </div>
      </section>

      {/* DESTINATIONS */}
      <section className="destinations-page-section">
        <div className="container">
          <SectionHeading
            eyebrow="Our destinations"
            title="Choose your next chapter."
            description="Every destination has been selected for the experiences, landscapes and stories it can offer."
          />

          {/* FILTERS */}
          <div className="filter-tabs">
            {["All", "India", "International"].map(
              (category) => (
                <button
                  key={category}
                  className={
                    filter === category
                      ? "filter-tab active"
                      : "filter-tab"
                  }
                  onClick={() =>
                    handleFilterChange(category)
                  }
                >
                  {category}
                </button>
              )
            )}
          </div>

          {/* GRID */}
          <DestinationGrid
            destinations={paginatedDestinations}
          />

          {/* PAGINATION */}
          {totalPages > 1 && (
            <div className="pagination">
              <button
                className="pagination-button"
                disabled={currentPage === 1}
                onClick={() =>
                  setCurrentPage((page) => page - 1)
                }
              >
                ← Previous
              </button>

              <div className="pagination-numbers">
                {Array.from(
                  { length: totalPages },
                  (_, index) => index + 1
                ).map((page) => (
                  <button
                    key={page}
                    className={
                      currentPage === page
                        ? "pagination-number active"
                        : "pagination-number"
                    }
                    onClick={() => setCurrentPage(page)}
                  >
                    {page}
                  </button>
                ))}
              </div>

              <button
                className="pagination-button"
                disabled={currentPage === totalPages}
                onClick={() =>
                  setCurrentPage((page) => page + 1)
                }
              >
                Next →
              </button>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Destinations;