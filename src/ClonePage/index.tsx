import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./styles.css"; // 커스텀 CSS 파일을 import 합니다.
import { Pagination, Mousewheel, Keyboard } from "swiper/modules";

export default function ClonePage() {
  return (
    <Swiper
      direction="vertical"
      slidesPerView={1} // 한 화면에 보이는 슬라이드 개수
      spaceBetween={0} // 슬라이드 간의 간격
      mousewheel
      keyboard
      pagination={{ clickable: true }} // clickable: true는 동그라미를 클릭해서 해당 슬라이드로 이동할 수 있게 합니다.
      modules={[Pagination, Mousewheel, Keyboard]} // 필요한 모듈 설치
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
