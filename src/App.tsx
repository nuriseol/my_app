import "./App.css";
import { useCounterStore, useMultiflyStore, useThemeStore } from "./store";
import { useEffect, useState } from "react";
import api from "./utils/api";

function App() {
  const { count, increment, decrement } = useCounterStore();

  const { value, multifly } = useMultiflyStore();

  const { mode, toggleMode } = useThemeStore();
  document.body.className = mode;

  const [posts, setPosts] = useState([]);

  // 공통 버튼 스타일
  const buttonBaseClasses = "px-2 rounded font-medium";

  // 공통 제목 스타일
  const h2BaseClasses = "font-semibold mb-2";

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await api.get("/todos");
        setPosts(res.data.slice(0, 5));
      } catch (error) {
        console.error("게시글을 불러오는 데 실패했습니다:", error);
      }
    };

    getData();
  }, []);

  return (
    <div className="App">
      <section>
        <h2 className={h2BaseClasses}>Post List</h2>
        <ul className="text-left">
          {posts.length > 0 ? (
            posts.map((data: any) => {
              return (
                <li className="mb-2" key={data.id}>
                  <p className="mb-0.5">
                    <span
                      className={`inline-block w-[24px] text-center rounded text-white ${
                        data.completed ? "bg-blue-600" : "bg-gray-300"
                      }`}
                    >
                      {data.completed ? "O" : "X"}
                    </span>
                    <span> {data.id}.</span>
                    <span> {data.title} </span>
                  </p>
                </li>
              );
            })
          ) : (
            <p>Loading...</p>
          )}
        </ul>
      </section>

      <hr style={{ margin: "20px 0" }} />

      {/* 카운터 섹션 */}
      <section>
        <h2 className={h2BaseClasses}>Counter Store</h2>
        <div className="flex gap-2 justify-center">
          <button
            onClick={decrement}
            className={`${buttonBaseClasses} bg-gray-200`}
          >
            -
          </button>
          <p>{count}</p>
          <button
            onClick={increment}
            className={`${buttonBaseClasses} bg-gray-200`}
          >
            +
          </button>
        </div>
      </section>

      <hr style={{ margin: "20px 0" }} />

      {/* 곱셈기 섹션 */}
      <section>
        <h2 className={h2BaseClasses}>Multifly Store</h2>
        <p className="mb-2">Current Value: {value}</p>
        <div className="flex gap-2 justify-center">
          <button
            onClick={() => multifly(2)}
            className={`${buttonBaseClasses} bg-red-100`}
          >
            x2
          </button>
          <button
            onClick={() => multifly(3)}
            className={`${buttonBaseClasses} bg-orange-100`}
          >
            x3
          </button>
          <button
            onClick={() => multifly(5)}
            className={`${buttonBaseClasses} bg-yellow-100`}
          >
            x5
          </button>
          {/* 초기화 버튼 (선택 사항) */}
          <button
            className={`${buttonBaseClasses} bg-gray-200`}
            onClick={
              () => useMultiflyStore.setState({ value: 1 }) // 또는 초기값으로 설정
            }
          >
            RESET
          </button>
        </div>
      </section>

      <hr style={{ margin: "20px 0" }} />

      {/* 테마 설정 섹션 */}
      <section>
        <h2 className={h2BaseClasses}>Theme Settings (Persisted)</h2>
        {mode === "light" ? (
          <button
            onClick={toggleMode}
            className={`${buttonBaseClasses} bg-gray-200`}
          >
            dark
          </button>
        ) : (
          <button onClick={toggleMode} className={`${buttonBaseClasses}`}>
            light
          </button>
        )}
        <p className="mt-2">페이지를 새로고침해도 테마 설정이 유지됩니다.</p>
      </section>
    </div>
  );
}

export default App;
