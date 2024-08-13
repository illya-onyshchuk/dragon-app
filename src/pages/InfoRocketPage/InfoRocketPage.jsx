import { useEffect, useState } from "react";

import { useParams } from "react-router-dom";

import { getRocket } from "../../api/getRocket";
import Slider from "../../components/Slider/Slider";
import Navigation from "../../components/Navigation/Navigation";
import RocketDetails from "../../components/RocketDetails/RocketDetails";
import Loader from "../../components/Loader/Loader";

import "./InfoRocketPage.scss";

export default function InfoRocketPage() {
  const { rocketId } = useParams();
  const [rocket, setRocket] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (rocketId) {
      getRocket(rocketId).then((response) => {
        setRocket(response);

        setLoading(false);
      });
    }
  }, [rocketId]);

  if (loading) {
    return (
      <div className="rocket-page__container">
        <Loader />
      </div>
    );
  }

  return (
    <main className="rocket-page">
      <div className="container">
        <Navigation />
        <RocketDetails rocket={rocket} />
      </div>
      <section className="rocket-page__slider">
        <Slider />
      </section>
      <section className="starbase">
        <div className="starbase__photo">
          <div className="container">
            <div className="starbase__text">
              <h2 className="starbase__title">Starbase</h2>
              <p className="starbase__description">
                Development and manufacturing of Starship takes place at
                Starbase, one of the world’s first commercial spaceports
                designed for orbital missions.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
