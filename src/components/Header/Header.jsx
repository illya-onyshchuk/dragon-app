import Navigation from "../Navigation/Navigation";
import "./Header.scss";

export default function HeadlineSection() {
  return (
    <section className="hero">
      <Navigation />
      <div className="hero__content">
        <h1 className="hero__text">Dive deep in to the future</h1>
        <div className="hero__bottom">
          <img src="./images/planet.svg" alt="planet" />
          <div className="hero__bottom-line"></div>
        </div>
      </div>
    </section>
  );
}
