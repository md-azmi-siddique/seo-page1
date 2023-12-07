import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/scrollbar";

// import required modules
import { FreeMode, Scrollbar, Mousewheel } from "swiper/modules";

const List = () => {
    return (
        <>
            <div className="container mx-auto pt-10">
                <div className="grid grid-cols-6 gap-6">
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
                                    <div class="grid grid-rows-6 grid-flow-col gap-4">
                                        <div>01</div>
                                        <div>01</div>
                                        <div>01</div>
                                        <div>01</div>
                                        <div>01</div>
                                        <div>09</div>
                                    </div>
                                </SwiperSlide>
                            </Swiper>
                        </div>
                    </div>
                    <div className="todo bg-slate-300 p-2">
                        <div className="topNav flex justify-between">
                            <div className="flex">
                                <div className="w-5 h-5 rounded-l-lg mr-2 bg-blue-600"></div>
                                Todo
                            </div>
                            <p>0</p>
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
                                    <div class="grid grid-rows-6 grid-flow-col gap-4">
                                        <div>01</div>
                                        <div>01</div>
                                        <div>01</div>
                                        <div>01</div>
                                        <div>01</div>
                                        <div>09</div>
                                    </div>
                                </SwiperSlide>
                            </Swiper>
                        </div>
                    </div>
                    <div className="doing bg-slate-300 p-2">
                        <div className="topNav flex justify-between">
                            <div className="flex">
                                <div className="w-5 h-5 rounded-l-lg mr-2 bg-yellow-600"></div>
                                Doing
                            </div>
                            <p>0</p>
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
                                    <div class="grid grid-rows-6 grid-flow-col gap-4">
                                        <div>01</div>
                                        <div>01</div>
                                        <div>01</div>
                                        <div>01</div>
                                        <div>01</div>
                                        <div>09</div>
                                    </div>
                                </SwiperSlide>
                            </Swiper>
                        </div>
                    </div>
                    <div className="underReview bg-slate-300 p-2">
                        <div className="topNav flex justify-between">
                            <p>Under Review</p>
                            <p>0</p>
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
                                    <div class="grid grid-rows-6 grid-flow-col gap-4">
                                        <div>01</div>
                                        <div>01</div>
                                        <div>01</div>
                                        <div>01</div>
                                        <div>01</div>
                                        <div>09</div>
                                    </div>
                                </SwiperSlide>
                            </Swiper>
                        </div>
                    </div>
                    <div className="compleated bg-slate-300 p-2">
                        <div className="topNav flex justify-between">
                            <p>Compleated</p>
                            <p>0</p>
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
                                    <div class="grid grid-rows-6 grid-flow-col gap-4">
                                        <div>01</div>
                                        <div>01</div>
                                        <div>01</div>
                                        <div>01</div>
                                        <div>01</div>
                                        <div>09</div>
                                    </div>
                                </SwiperSlide>
                            </Swiper>
                        </div>
                    </div>
                    <div className="overed bg-slate-300 p-2">
                        <div className="topNav flex justify-between">
                            <p>Overed</p>
                            <p>0</p>
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
                                    <div class="grid grid-rows-6 grid-flow-col gap-4">
                                        <div>01</div>
                                        <div>01</div>
                                        <div>01</div>
                                        <div>01</div>
                                        <div>01</div>
                                        <div>09</div>
                                    </div>
                                </SwiperSlide>
                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default List;
