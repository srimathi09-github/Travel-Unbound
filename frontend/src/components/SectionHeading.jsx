const SectionHeading = ({
  eyebrow,
  title,
  description,
  light = false
}) => {
  return (
    <div
      className={`section-heading ${
        light ? "section-heading-light" : ""
      }`}
    >
      {eyebrow && <p className="section-eyebrow">{eyebrow}</p>}

      <h2>{title}</h2>

      {description && <p>{description}</p>}
    </div>
  );
};

export default SectionHeading;