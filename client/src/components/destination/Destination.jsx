import { useGetAllDestinations } from "../../hooks/useDestinations";

import DestinationList from "./destination-list/DestinationList";

import "./Destination.css";

export default function Destination() {
  const [destinations] = useGetAllDestinations([]);

  return (
    <div className="dest_section">
      <div className="dest-heading-container">
        <div className="heading_container">
          <h2>Destinations</h2>
          <hr />
        </div>
      </div>
      <div className="dest_container">
        {destinations?.length > 0 ? (
          destinations.map((destination) => (
            <DestinationList key={destination._id} {...destination} />
          ))
        ) : (
          <h3 className="no-articles">No articles yet</h3>
        )}
      </div>
    </div>
  );
}
