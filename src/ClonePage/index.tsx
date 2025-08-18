import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "./styles.css"; // 커스텀 CSS 파일을 import 합니다.
import { Pagination, Mousewheel, Keyboard } from "swiper/modules";

export default function ClonePage() {
  // 슬라이드 변경 시 페이지네이션 색상을 변경하는 함수
  const handleSlideChange = (swiper: SwiperType) => {
    // 첫 번째(index 0)와 여섯 번째(index 5) 슬라이드인지 확인
    const isWhiteTheme = swiper.realIndex === 0 || swiper.realIndex === 5;
    if (swiper.el) {
      if (isWhiteTheme) {
        swiper.el.classList.add("swiper-pagination-white");
      } else {
        swiper.el.classList.remove("swiper-pagination-white");
      }
    }
  };

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
      onSlideChange={handleSlideChange} // 슬라이드가 변경될 때마다 함수 호출
      onInit={handleSlideChange} // Swiper 초기화 시 함수 호출 (첫 페이지 적용)
    >
      <SwiperSlide>
        {/* 전체 슬라이드를 감싸는 flex 컨테이너 */}
        <div className="flex h-screen w-full">
          {/* 왼쪽 섹션: 애니메이션 적용 대상 */}
          <div className="left-panel flex w-1/3 items-center justify-center bg-[#0d666c]">
            <h1 className="text-4xl font-bold text-white">왼쪽</h1>
          </div>
          {/* 오른쪽 섹션 */}
          <div className="w-full overflow-hidden">
            <img
              src="/images/firstPage.webp"
              alt="메인 페이지 이미지"
              className="right-panel-image h-full w-full object-cover"
            />
          </div>
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
