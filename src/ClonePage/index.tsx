import React, { useRef, useEffect, useState } from "react";
import "./index.css";

export default function ClonePage() {
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = Number(entry.target.getAttribute("data-index"));
            setCurrent(idx);
          }
        });
      },
      { threshold: 0.5 }
    );
    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div className="h-screen overflow-y-scroll snap-y snap-mandatory relative scrollbar-hide">
        <section
          className="h-screen flex flex-col items-center justify-center text-white text-4xl font-bold snap-start bg-yellow-400"
          ref={(el) => {
            sectionRefs.current[0] = el;
          }}
          data-index={0}
        >
          <h1>첫 번째 페이지</h1>
          <p className="text-lg font-normal mt-4">
            여기에 원하는 내용을 자유롭게 넣으세요.
          </p>
        </section>
        <section
          className="h-screen flex flex-col items-center justify-center text-white text-4xl font-bold snap-start bg-purple-900"
          ref={(el) => {
            sectionRefs.current[1] = el;
          }}
          data-index={1}
        >
          <img
            src="https://placehold.co/300x200"
            alt="샘플"
            className="mb-4 rounded shadow-lg"
          />
          <p className="text-lg font-normal">두 번째 페이지</p>
        </section>
        <section
          className="h-screen flex flex-col items-center justify-center text-white text-4xl font-bold snap-start bg-pink-700"
          ref={(el) => {
            sectionRefs.current[2] = el;
          }}
          data-index={2}
        >
          <div>
            <h2>세 번째 페이지</h2>
            <button className="mt-6 px-6 py-2 bg-white text-pink-700 rounded shadow">
              버튼
            </button>
          </div>
        </section>
        <section
          className="h-screen flex flex-col items-center justify-center text-white text-4xl font-bold snap-start bg-teal-600"
          ref={(el) => {
            sectionRefs.current[3] = el;
          }}
          data-index={3}
        >
          <h2>네 번째 페이지</h2>
        </section>
        <section
          className="h-screen flex flex-col items-center justify-center text-white text-4xl font-bold snap-start bg-blue-700"
          ref={(el) => {
            sectionRefs.current[4] = el;
          }}
          data-index={4}
        >
          <h2>다섯 번째 페이지</h2>
        </section>
        <section
          className="h-screen flex flex-col items-center justify-center text-white text-4xl font-bold snap-start bg-pink-500"
          ref={(el) => {
            sectionRefs.current[5] = el;
          }}
          data-index={5}
        >
          <h2>여섯 번째 페이지</h2>
        </section>
        <section
          className="h-screen flex flex-col items-center justify-center text-white text-4xl font-bold snap-start bg-slate-600"
          ref={(el) => {
            sectionRefs.current[6] = el;
          }}
          data-index={6}
        >
          <h2>일곱 번째 페이지</h2>
        </section>
      </div>
      <div className="fixed top-1/2 right-8 -translate-y-1/2 flex flex-col gap-3 z-50">
        {[0, 1, 2, 3, 4, 5, 6].map((idx) => (
          <div
            key={idx}
            className={
              `w-3 h-3 rounded-full transition-colors duration-200 ` +
              (current === idx ? "bg-gray-900" : "bg-gray-300")
            }
          />
        ))}
      </div>
    </>
  );
}
