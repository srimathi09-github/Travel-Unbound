import DestinationCard from "./DestinationCard";

const DestinationGrid = ({ destinations }) => {
  return (
    <div className="destination-grid">
      {destinations.map((destination) => (
        <DestinationCard
          key={destination.id}
          destination={destination}
        />
      ))}
    </div>
  );
};

export default DestinationGrid;