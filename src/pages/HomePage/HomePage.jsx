import AboutUs from "../../components/AboutUs/AboutUs";
import Header from "../../components/Header/Header";
import OurRockets from "../../components/OurRockets/OurRockets";
import Slider from "../../components/Slider/Slider";
import TeamBlock from "../../components/TeamBlock/TeamBlock";

import "./HomePage.scss";

export default function HomePage() {
  return (
    <main className="main-page">
      <div className="container">
        <Header />
        <OurRockets />
        <AboutUs />
        <TeamBlock />
      </div>
      <Slider />
    </main>
  );
}
