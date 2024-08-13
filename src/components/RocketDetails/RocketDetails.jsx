import { useEffect, useState } from "react";

import "./RocketDetails.scss";
import getRocketDetails from "../../utils/getRocketDetails";

export default function RocketDetails({ rocket }) {
  const [rocketDetails, setRocketDetails] = useState([]);

  useEffect(() => {
    setRocketDetails(() => getRocketDetails(rocket, true));
  }, [rocket]);

  return (
    <div className="rocket-info">
      <h2 className="rocket-info__title">{rocket.name}</h2>
      <div className="rocket-info__wrapper">
        <img
          src={rocket.flickr_images[1]}
          alt={`${rocket.name} image`}
          className="rocket-info__rocket-image"
        />
        <div className="rocket-info__rocket-stats">
          <h3 className="rocket-info__rocket-stats-name">{rocket.name}</h3>
          <div className="rocket-info__rocket-stats-props">
            {rocketDetails.map((rocket) => (
              <div key={rocket.name} className="rocket-info__rocket-stats-prop">
                <span>{rocket.name}</span>
                <span>{rocket.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
