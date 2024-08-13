import { useMemo } from "react";

import { Link } from "react-router-dom";

import getRocketDetails from "../../utils/getRocketDetails";

import "./RocketsCard.scss";

export default function RocketsCard({ rocket }) {
  const rocketDetails = useMemo(() => getRocketDetails(rocket), [rocket]);

  return (
    <div className="card">
      <Link to={`rockets/${rocket.id}`}>
        <img className="card__img" src={rocket.flickr_images[2]} alt="" />
      </Link>
      <div className="card__content">
        <Link to={`rockets/${rocket.id}`}>
          <p className="card__title">{rocket.name}</p>
        </Link>

        <ul className="card__lists">
          {rocketDetails.map((rocketDetail) => (
            <li key={rocketDetail.name} className="card__list">
              <span>{rocketDetail.name}</span>
              <span>{rocketDetail.value}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
