import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import RocketsCard from "../RocketsCard/RocketsCard";

import "swiper/scss";
import "swiper/scss/pagination";

import { RocketsSliderNav } from "../RocketsSliderNav/RocketsSliderNav";

export default function RocketSlider({ rockets }) {
  return (
    <div className="rocket-slider">
      <Swiper
        slidesPerView={3}
        spaceBetween={20}
        pagination={{ clickable: true }}
        modules={[Pagination]}
      >
        {rockets.map((rocket) => (
          <SwiperSlide key={rocket.id}>
            <RocketsCard rocket={rocket} />
          </SwiperSlide>
        ))}

        <RocketsSliderNav />
      </Swiper>
    </div>
  );
}
