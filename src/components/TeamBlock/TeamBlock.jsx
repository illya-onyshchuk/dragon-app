import { useRef, useState } from "react";

import cn from "classnames";

import { Swiper, SwiperSlide } from "swiper/react";

import { ArrowLeft } from "../Svg/ArrowLeft";
import { ArrowRight } from "../Svg/ArrowRight";
import MemberCard from "../MemberCard/MemberCard";

import "swiper/scss";

import "./TeamBlock.scss";

export default function TeamBlock() {
  const PER_SLIDE = 2;

  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef(null);

  const test = [1,2,3] // just for example

  return (
    <section className="team">
      <div className="team__left">
        <div className="team__text">
          <h2 className="team__title">Team</h2>
          <p className="team__description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
            auctor sed urna a faucibus. Pellentesque mi nisl, mollis convallis
            metus id, congue semper neque. Sed suscipit eget ipsum ut gravida.
          </p>
        </div>
        <div className="team__buttons">
          <button
            onClick={() => swiperRef.current.slidePrev()}
            className={cn("team__button", {
              "team__button--notactive": activeIndex === 0,
            })}
          >
            <ArrowLeft color="black"/>
          </button>
          <button
            onClick={() => swiperRef.current.slideNext()}
            className={cn("team__button", {
              "team__button--notactive":
                activeIndex === test.length - PER_SLIDE,
            })}
          >
            <ArrowRight color="black" />
          </button>
        </div>
      </div>
      <div className="team__right">
        <Swiper
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          onSlideChange={(swiper) => {
            setActiveIndex(swiper.activeIndex);
          }}
          slidesPerView={PER_SLIDE}
          spaceBetween={20}
        >
          {test.map((_, index) => (
            <SwiperSlide key={index}>
              <MemberCard />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
