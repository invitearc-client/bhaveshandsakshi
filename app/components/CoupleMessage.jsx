"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

export default function CoupleMessage() {
  return (
    <>
      <div className="bg-[url('/assets/couple_bg.png')] bg-cover bg-no-repeat">
        <div className="lg:h-310 md:h-200 h-190 pt-2">
          <h1 className="lg:text-[40px] md:text-5xl text-[40px] text-center text-[#FFF5B9] lg:pt-30 pt-12 font-parisienne">
            With Love From Us
          </h1>
          <h2 className="lg:text-[30px] text-[18px]  text-center text-[#FFF5B9] lg:px-60 px-6 lg:mt-28 mt-6 font-Cormorant-upright lg:leading-8 md:leading-8 leading-6">
           Two hearts, one journey and countless dreams to share! We can't wait to celebrate our special moments with the people who make our lives beautiful.Your presence and blessings will make our celebrations even more special and memorable.
          </h2>
          <div className="w-full md:mt-32 mt-12">
            <Swiper
              effect={"coverflow"}
              centeredSlides={true}
              // slidesPerView={5}
              breakpoints={{
                0: {
                  slidesPerView: 1.5,
                },
                640: {
                  slidesPerView: 2,
                },
                1024: {
                  slidesPerView: 5,
                },
              }}
              spaceBetween={-60}
              loop={true}
              autoplay={{
                delay: 2000,
                disableOnInteraction: false,
                pauseOnMouseEnter: false,
              }}
              speed={1200}
              coverflowEffect={{
                rotate: 0,
                stretch: 0,
                depth: 300,
                modifier: 2,
                slideShadows: false,
              }}
              pagination={{ clickable: true }}
              modules={[EffectCoverflow, Pagination, Autoplay]}
              className="mySwiper"
            >
                   <SwiperSlide>
                <img src="/assets/bhavesh.webp" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="/assets/bhavesh1.webp" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="/assets/bhavesh2.webp" />
              </SwiperSlide>

              <SwiperSlide>
                <img src="/assets/bhavesh3.webp" />
              </SwiperSlide>

              <SwiperSlide>
                <img src="/assets/bhavesh4.webp" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="/assets/bhavesh5.webp" />
              </SwiperSlide>

              <SwiperSlide>
                <img src="/assets/bhavesh6.webp" />
              </SwiperSlide>
            </Swiper>
          </div>

          
         
        </div>
      </div>
    </>
  );
}
