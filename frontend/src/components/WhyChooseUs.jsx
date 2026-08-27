import SectionHeading from "./SectionHeading";

const reasons = [
  {
    number: "01",
    title: "Personally Vetted",
    description:
      "Every destination and experience is carefully evaluated by our team before we recommend it."
  },
  {
    number: "02",
    title: "Local Expertise",
    description:
      "Connect with trusted local guides, communities and people who know each destination intimately."
  },
  {
    number: "03",
    title: "Custom Itineraries",
    description:
      "Your journey is designed around you rather than forcing you into a fixed catalogue."
  },
  {
    number: "04",
    title: "24/7 Support",
    description:
      "From the first conversation to the journey home, our team remains available when you need us."
  }
];

const WhyChooseUs = () => {
  return (
    <section className="why-section">
      <div className="container">
        <SectionHeading
          eyebrow="Why Travel Unbounded"
          title="The journey should feel like yours."
          description="We believe travel becomes extraordinary when it is shaped around the people taking it."
        />

        <div className="why-grid">
          {reasons.map((reason) => (
            <div className="why-item" key={reason.number}>
              <span className="why-number">{reason.number}</span>

              <div>
                <h3>{reason.title}</h3>
                <p>{reason.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;