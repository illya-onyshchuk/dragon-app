import { useRef } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import { ArrowLeft } from "../Svg/ArrowLeft";
import { ArrowRight } from "../Svg/ArrowRight";

import "swiper/scss";

import "./Slider.scss";

export default function Slider() {
  const swiperRef = useRef(null);

  const test = [1, 2, 3]; // just for example;

  return (
    <Swiper
      onSwiper={(swiper) => {
        swiperRef.current = swiper;
      }}
      slidesPerView={1}
      spaceBetween={20}
      pagination={{ clickable: true, el: ".swiper-pagination" }}
      modules={[Navigation, Pagination]}
    >
      {test.map((_, index) => (
        <SwiperSlide key={index}>
          <div
            className="slide-image"
            style={{ backgroundImage: `url(/images/dragon.png)` }}
          >
            <div className="slide-image__content">
              <div className="slide-image__text-content">
                <h2 className="slide-image__title">STARSHIP CAPABILITIES</h2>
                <p className="slide-image__description">
                  As the most powerful launch system ever developed, Starship
                  will be able to carry up to 100 people on long-duration,
                  interplanetary flights. Starship will also help enable
                  satellite delivery, the development of a Moon base, and
                  point-to-point transport here on Earth.
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}

      <div className="swiper-controls">
        <button
          className="swiper-button-prev"
          onClick={() => swiperRef.current.slidePrev()}
        >
          <ArrowLeft />
        </button>
        <div className="swiper-pagination"></div>
        <button
          className="swiper-button-next"
          onClick={() => swiperRef.current.slideNext()}
        >
          <ArrowRight />
        </button>
      </div>
    </Swiper>
  );
}
