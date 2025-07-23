import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Mousewheel, Keyboard } from "swiper/modules";

export default function ClonePage() {
  return (
    <Swiper
      direction="vertical"
      slidesPerView={1}
      spaceBetween={0}
      mousewheel
      keyboard
      pagination={{ clickable: true }}
      modules={[Pagination, Mousewheel, Keyboard]}
      className="h-screen"
      style={{ height: "100vh" }}
    >
      <SwiperSlide>
        <div className="flex flex-col items-center justify-center h-screen bg-yellow-400 text-white text-4xl font-bold">
          첫 번째 페이지
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="flex flex-col items-center justify-center h-screen bg-purple-900 text-white text-4xl font-bold">
          두 번째 페이지
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="flex flex-col items-center justify-center h-screen bg-pink-700 text-white text-4xl font-bold">
          세 번째 페이지
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="flex flex-col items-center justify-center h-screen bg-teal-600 text-white text-4xl font-bold">
          네 번째 페이지
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="flex flex-col items-center justify-center h-screen bg-blue-700 text-white text-4xl font-bold">
          다섯 번째 페이지
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="flex flex-col items-center justify-center h-screen bg-pink-500 text-white text-4xl font-bold">
          여섯 번째 페이지
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="flex flex-col items-center justify-center h-screen bg-slate-600 text-white text-4xl font-bold">
          일곱 번째 페이지
        </div>
      </SwiperSlide>
    </Swiper>
  );
}
