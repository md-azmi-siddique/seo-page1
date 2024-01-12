import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";

// import './styles.css';

// import required modules
import { Scrollbar } from "swiper/modules";
import { FreeMode, Mousewheel } from "swiper/modules";
import List from "./List/List";

const TaskList = () => {
  return (
    <>
      <Swiper
        slidesPerView={2}
        scrollbar={{ hide: true }}
        modules={[Scrollbar]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="incomplete bg-slate-300 p-2">
            <div className="topNav flex justify-between">
              <div className="flex">
                <div className="w-5 h-5 rounded-l-lg mr-2 bg-red-600"></div>
                Incomplete
              </div>
              <div>0</div>
            </div>
            <div className="list Section">
              <Swiper
                direction={"vertical"}
                slidesPerView={"auto"}
                freeMode={true}
                scrollbar={true}
                mousewheel={true}
                modules={[FreeMode, Scrollbar, Mousewheel]}
                className="mySwiper"
              >
                <SwiperSlide>
                  <List></List>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="incomplete bg-slate-300 p-2">
            <div className="topNav flex justify-between">
              <div className="flex">
                <div className="w-5 h-5 rounded-l-lg mr-2 bg-red-600"></div>
                Incomplete
              </div>
              <div>0</div>
            </div>
            <div className="list Section">
              <Swiper
                direction={"vertical"}
                slidesPerView={"auto"}
                freeMode={true}
                scrollbar={true}
                mousewheel={true}
                modules={[FreeMode, Scrollbar, Mousewheel]}
                className="mySwiper"
              >
                <SwiperSlide>
                  <List></List>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="incomplete bg-slate-300 p-2">
            <div className="topNav flex justify-between">
              <div className="flex">
                <div className="w-5 h-5 rounded-l-lg mr-2 bg-red-600"></div>
                Incomplete
              </div>
              <div>0</div>
            </div>
            <div className="list Section">
              <Swiper
                direction={"vertical"}
                slidesPerView={"auto"}
                freeMode={true}
                scrollbar={true}
                mousewheel={true}
                modules={[FreeMode, Scrollbar, Mousewheel]}
                className="mySwiper"
              >
                <SwiperSlide>
                  <Swiper
                    direction={"vertical"}
                    slidesPerView={"auto"}
                    freeMode={true}
                    scrollbar={true}
                    mousewheel={true}
                    modules={[FreeMode, Scrollbar, Mousewheel]}
                    className="mySwiper"
                  >
                    <SwiperSlide>
                      <List></List>
                    </SwiperSlide>
                  </Swiper>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="incomplete bg-slate-300 p-2">
            <div className="topNav flex justify-between">
              <div className="flex">
                <div className="w-5 h-5 rounded-l-lg mr-2 bg-red-600"></div>
                Incomplete
              </div>
              <div>0</div>
            </div>
            <div className="list Section">
              <Swiper
                direction={"vertical"}
                slidesPerView={"auto"}
                freeMode={true}
                scrollbar={true}
                mousewheel={true}
                modules={[FreeMode, Scrollbar, Mousewheel]}
                className="mySwiper"
              >
                <SwiperSlide>
                  <Swiper
                    direction={"vertical"}
                    slidesPerView={"auto"}
                    freeMode={true}
                    scrollbar={true}
                    mousewheel={true}
                    modules={[FreeMode, Scrollbar, Mousewheel]}
                    className="mySwiper"
                  >
                    <SwiperSlide>
                      <List></List>
                    </SwiperSlide>
                  </Swiper>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default TaskList;
