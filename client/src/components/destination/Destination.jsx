import { useEffect } from "react";
import { useState } from "react";

import { get } from '../../utils/requester'

import DestinationList from "./destination-list/DestinationList";

export default function Destination() {
    const [destinations, setDestinations] = useState([]);

    useEffect(() => {
        (async () => {
            const response = await get('blog/destinations');
            const result = Object.values(response);
            setDestinations(result);
        })();
    }, []);
    
  return (
    <section className="fruit_section layout_padding">
      <div className="container">
        <div className="heading_container">
          <hr />
          <h2>Дестинации</h2>
        </div>
      </div>
      <div className="container-fluid">
        <div className="fruit_container">
            {destinations.map(destination => 
               <DestinationList destination={destination} key={destination.id}/>
            )}
          
          {/* <div className="box">
            <img src="images/f-2.jpg" alt="" />
            <div className="link_box">
              <h5>Blueberry</h5>
              <a href="">Buy Now</a>
            </div>
          </div>
          <div className="box">
            <img src="images/f-3.jpg" alt="" />
            <div className="link_box">
              <h5>Banana</h5>
              <a href="">Buy Now</a>
            </div>
          </div>
          <div className="box">
            <img src="images/f-4.jpg" alt="" />
            <div className="link_box">
              <h5>Apple</h5>
              <a href="">Buy Now</a>
            </div>
          </div>
          <div className="box">
            <img src="images/f-5.jpg" alt="" />
            <div className="link_box">
              <h5>Mango</h5>
              <a href="">Buy Now</a>
            </div>
          </div>
          <div className="box">
            <img src="images/f-6.jpg" alt="" />
            <div className="link_box">
              <h5>Strawberry</h5>
              <a href="">Buy Now</a>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
}
