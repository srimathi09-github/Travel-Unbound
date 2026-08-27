import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <>
      <Helmet>
        <title>About | Travel Unbounded</title>
        <meta
          name="description"
          content="Discover the philosophy behind Travel Unbounded and how we create meaningful journeys."
        />
      </Helmet>

      <section className="page-hero">
        <div className="page-hero-image">
          <img
            src="https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=2200&q=90"
            alt="Traveller exploring a beautiful landscape"
          />
        </div>

        <div className="page-hero-overlay" />

        <div className="container page-hero-content">
          <p className="section-eyebrow">About Travel Unbounded</p>

          <h1>
            Travel should
            <br />
            <em>feel personal.</em>
          </h1>
        </div>
      </section>

      <section className="about-intro">
        <div className="container about-intro-grid">
          <div>
            <p className="section-eyebrow">Our philosophy</p>

            <h2>
              More than
              <br />
              <em>a destination.</em>
            </h2>
          </div>

          <div className="about-copy">
            <p>
              Travel Unbounded is built around a simple idea: your journey
              should reflect who you are.
            </p>

            <p>
              Instead of following a fixed itinerary, we help travellers
              discover places through experiences, landscapes, food, culture
              and moments that feel genuinely their own.
            </p>

            <p>
              From quiet backwaters in Kerala to dramatic Himalayan roads and
              unforgettable international adventures, every journey begins
              with curiosity.
            </p>
          </div>
        </div>
      </section>

      <section className="about-values">
        <div className="container">
          <div className="about-section-heading">
            <p className="section-eyebrow">What we believe</p>
            <h2>Travel differently.</h2>
          </div>

          <div className="about-values-grid">
            <article className="about-value">
              <span>01</span>
              <h3>Personal</h3>
              <p>
                Every traveller is different. Your journey should be shaped
                around your interests, pace and priorities.
              </p>
            </article>

            <article className="about-value">
              <span>02</span>
              <h3>Meaningful</h3>
              <p>
                We focus on experiences that create memories rather than simply
                ticking destinations off a list.
              </p>
            </article>

            <article className="about-value">
              <span>03</span>
              <h3>Unbounded</h3>
              <p>
                There is no single way to explore the world. We encourage
                travellers to go beyond the expected.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="about-story">
        <div className="container about-story-grid">
          <div className="about-story-image">
            <img
              src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1600&q=90"
              alt="Beautiful mountain landscape"
            />
          </div>

          <div className="about-story-content">
            <p className="section-eyebrow">Our approach</p>

            <h2>
              Your story
              <br />
              <em>starts here.</em>
            </h2>

            <p>
              We believe the best trips leave you with stories worth telling.
              That's why we look beyond the obvious and focus on the details
              that make a journey memorable.
            </p>

            <Link to="/create-trip" className="btn btn-dark">
              Create your journey <span>↗</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="detail-cta">
        <div className="container">
          <p className="section-eyebrow">Ready to explore?</p>

          <h2>
            Let's create your
            <br />
            <em>next story.</em>
          </h2>

          <Link to="/create-trip" className="btn btn-light">
            Start planning <span>↗</span>
          </Link>
        </div>
      </section>
    </>
  );
};

export default About;

