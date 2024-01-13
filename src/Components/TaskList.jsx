import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";

import { Scrollbar } from "swiper/modules";
import { FreeMode, Mousewheel } from "swiper/modules";
import IncompleteList from "./IncompleteList";
import TodoList from "./TodoList";
import Doing from "./Doing";
import UnderReview from "./UnderReview";
import Compleated from "./Compleated";
import Over from "./Over";


const TaskList = () => {
  return (

    <div className="bg-slate-300">
      <div className="container mx-auto">
      <Swiper
        slidesPerView={4}
        scrollbar={{ hide: true }}
        modules={[Scrollbar]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="incomplete bg-slate-300 p-2">
            <div className="topNav flex justify-between"></div>
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
                  {/* Incomplete */}
                  <IncompleteList></IncompleteList>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="incomplete bg-slate-300 p-2">
            <div className="topNav flex justify-between"></div>
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
                  {/* Todo List */}
                  <TodoList></TodoList>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="incomplete bg-slate-300 p-2">
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
                      {/* Doing */}
                      <Doing></Doing>
                    </SwiperSlide>
                  </Swiper>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="incomplete bg-slate-300 p-2">
            <div className="topNav flex justify-between"></div>
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
                      {/* Under Review */}
                      <UnderReview></UnderReview>
                    </SwiperSlide>
                  </Swiper>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </SwiperSlide>
        {/* compleated */}
        <SwiperSlide>
          <div className="incomplete bg-slate-300 p-2">
            <div className="topNav flex justify-between"></div>
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
                      <Compleated></Compleated>
                    </SwiperSlide>
                  </Swiper>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </SwiperSlide>
        {/* Over */}
        <SwiperSlide>
          <div className="incomplete bg-slate-300 p-2">
            <div className="topNav flex justify-between"></div>
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
                      <Over></Over>
                    </SwiperSlide>
                  </Swiper>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
    </div>
  );
};

export default TaskList;
