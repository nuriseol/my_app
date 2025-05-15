import axios from "axios";
import "./App.css";
import { useCounterStore, useMultiflyStore, useThemeStore } from "./store";
import { useEffect, useState } from "react";

function App() {
  const { count, increment, decrement } = useCounterStore();

  const { value, multifly } = useMultiflyStore();

  const { mode, toggleMode } = useThemeStore();
  document.body.className = mode;

  const [posts, setPosts] = useState([]);

  // 공통 버튼 스타일
  const buttonBaseClasses = "px-2 rounded";

  useEffect(() => {
    const getPosts = async () => {
      const res = await axios.get("https://jsonplaceholder.typicode.com/posts");

      setPosts(res.data.slice(0, 3));
    };

    setTimeout(() => {
      getPosts();
    }, 2000);
  }, []);

  return (
    <div className="App">
      <div>
        <header>Post List</header>
        <div>
          {posts.length > 0 ? (
            posts.map((post: any) => {
              return (
                <div className="content">
                  <div className="raw">
                    <span className="postId">No. {post.id}</span>
                    <span className="postTitle">- {post.title}</span>
                  </div>
                  <p className="postBody">{post.body}</p>
                </div>
              );
            })
          ) : (
            <h2>Loading...</h2>
          )}
        </div>
      </div>

      {/* 카운터 섹션 */}
      <section>
        <h2>Counter Store</h2>
        <p>{count}</p>
        <button
          onClick={decrement}
          className={`${buttonBaseClasses} mr-2 bg-gray-200`}
        >
          -
        </button>
        <button
          onClick={increment}
          className={`${buttonBaseClasses} bg-gray-200`}
        >
          +
        </button>
      </section>

      <hr style={{ margin: "20px 0" }} />

      {/* 곱셈기 섹션 */}
      <section>
        <h2>Multifly Store</h2>
        <p>Current Value: {value}</p>
        <button
          onClick={() => multifly(2)}
          className={`${buttonBaseClasses} mr-2 bg-red-100`}
        >
          Multiply by 2
        </button>
        <button
          onClick={() => multifly(3)}
          className={`${buttonBaseClasses} mr-2 bg-orange-100`}
        >
          Multiply by 3
        </button>
        <button
          onClick={() => multifly(5)}
          className={`${buttonBaseClasses} mr-2 bg-yellow-100`}
        >
          Multiply by 5
        </button>
        {/* 초기화 버튼 (선택 사항) */}
        <button
          className={`${buttonBaseClasses} mr-2 bg-green-100`}
          onClick={
            () => useMultiflyStore.setState({ value: 1 }) // 또는 초기값으로 설정
          }
        >
          Reset Value to 1
        </button>
      </section>

      <hr style={{ margin: "20px 0" }} />

      {/* 테마 설정 섹션 */}
      <section>
        <h2>Theme Settings (Persisted)</h2>
        <p>Current Mode: {mode}</p>
        <button
          onClick={toggleMode}
          className={`${buttonBaseClasses} bg-gray-200`}
        >
          Toggle Theme (Light/Dark)
        </button>
        <p>
          <em>페이지를 새로고침해도 테마 설정이 유지됩니다.</em>
        </p>
      </section>
    </div>
  );
}

export default App;
