import { useEffect, useState } from "react";

import "./OurRockets.scss";
import RocketSlider from "../RocketSlider/RocketSlider";
import { getRockets } from "../../api/getRockets";

export default function OurRockets() {
  const [rockets, setRockets] = useState([]);

  useEffect(() => {
    getRockets().then((response) => {
      setRockets(response);
    });
  }, []);

  return (
    <section className="rockets">
      <h2 className="rockets__title">Our rockets</h2>
      <RocketSlider rockets={rockets} />
    </section>
  );
}
