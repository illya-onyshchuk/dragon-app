import { useSwiper } from "swiper/react";

import "./RocketsSliderNav.scss";
import { ArrowRight } from "../Svg/ArrowRight";
import { ArrowLeft } from "../Svg/ArrowLeft";

export function RocketsSliderNav() {
  const swiper = useSwiper();

  return (
    <div className="slider-nav">
      <button className="slider-nav__button" onClick={() => swiper.slidePrev()}>
        <ArrowLeft />
      </button>

      <button className="slider-nav__button" onClick={() => swiper.slideNext()}>
        <ArrowRight />
      </button>
    </div>
  );
}
