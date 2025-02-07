import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { styled } from "styled-components";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { theme } from './../../../styles/theme';

const slides = [
  { id: 1, content: "Slide 1" },
  { id: 2, content: "Slide 2" },
  { id: 3, content: "Slide 3" },
  { id: 4, content: "Slide 4" },
  { id: 5, content: "Slide 5" },
  { id: 6, content: "Slide 6" },
];

const ClientsOpinion = () => {
  return (
    <div>
      <h2>Clients Reviews</h2>
      <StyledSwiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>{slide.content}</SwiperSlide>
        ))}
      </StyledSwiper>
    </div>
  );
};

const Container = styled.div`
  padding-top: 5%;
  display: flex;
  flex-direction: column;
  gap: 3rem;
  max-width: ${theme.containers.main};
  margin: 0 auto;
  width: 100%;

  ${theme.mqMax("xl")} {
    padding: 0 35px;
  }
  ${theme.mqMax("lg")} {
    padding: 0 25px;
  }
`;

const StyledSwiper = styled(Swiper)`
  .swiper-container {
    width: 100%;
    height: 100%;

    .swiper-slide {
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: #f2f2f2;
      height: 300px;
    }
  }

  .swiper-button-prev,
  .swiper-button-next {
    color: #fff;
    font-size: 24px;
    background-color: rgba(0, 0, 0, 0.5);
    border-radius: 50%;
    padding: 10px;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);

    &:after {
      display: none;
    }

    &:hover {
      background-color: rgba(0, 0, 0, 0.8);
    }
  }

  .swiper-button-prev {
    left: 10px;
  }

  .swiper-button-next {
    right: 10px;
  }

  .swiper-pagination {
    bottom: 10px;

    .swiper-pagination-bullet {
      background-color: #fff;
      opacity: 0.5;
      transition: opacity 0.3s ease;

      &.swiper-pagination-bullet-active {
        opacity: 1;
      }
    }
  }
`;

export default ClientsOpinion;
