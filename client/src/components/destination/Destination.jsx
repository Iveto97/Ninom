
import { useGetAllDestinations } from "../../hooks/useDestinations";

import DestinationList from "./destination-list/DestinationList";

export default function Destination() {
  const [destinations] = useGetAllDestinations([]);

  return (
    <section className="fruit_section layout_padding">
      <div className="container">
        <div className="heading_container">
          <hr />
          <h2>Destinations</h2>
        </div>
      </div>
      <div className="container-fluid">
        <div className="fruit_container">
          {destinations?.length > 0 ? (
            destinations.map((destination) => (
              <DestinationList key={destination._id} {...destination} />
            ))
          ) : (
            <h3 className="no-articles">No articles yet</h3>
          )}
        </div>
      </div>
    </section>
  );
}
