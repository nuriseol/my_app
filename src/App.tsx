import "./App.css";
import { useCounterStore, useMultiflyStore, useThemeStore } from "./store";

function App() {
  const { count, increment, decrement } = useCounterStore();

  const { value, multifly } = useMultiflyStore();

  const { mode, toggleMode } = useThemeStore();
  document.body.className = mode;

  return (
    <div className="App">
      {/* 카운터 섹션 */}
      <section>
        <h2>Counter Store</h2>
        <p>{count}</p>
        <button onClick={decrement}>-</button>
        <button onClick={increment}>+</button>
      </section>

      <hr style={{ margin: "20px 0" }} />

      {/* 곱셈기 섹션 */}
      <section>
        <h2>Multifly Store</h2>
        <p>Current Value: {value}</p>
        <button onClick={() => multifly(2)}>Multiply by 2</button>
        <button onClick={() => multifly(3)}>Multiply by 3</button>
        <button onClick={() => multifly(5)}>Multiply by 5</button>
        {/* 초기화 버튼 (선택 사항) */}
        <button
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
        <button onClick={toggleMode}>Toggle Theme (Light/Dark)</button>
        <p>
          <em>페이지를 새로고침해도 테마 설정이 유지됩니다.</em>
        </p>
      </section>
    </div>
  );
}

export default App;
