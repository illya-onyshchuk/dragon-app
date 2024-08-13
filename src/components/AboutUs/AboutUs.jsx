import "./AboutUs.scss";

export default function AboutUs() {
  return (
    <section className="about-us">
      <h2 className="about-us__title">About us</h2>
      <div className="about-us__wrapper">
        <img
          className="about-us__video"
          src="./images/mock-video.png"
          alt="Mock video"
        />
        <div className="about-us__play-button">
          <img src="./images/play-button.png" alt="play button" />
        </div>
      </div>
    </section>
  );
}
