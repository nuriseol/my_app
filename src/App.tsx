import "./App.css";
import { useCounterStore, useMultiflyStore } from "./store";

function App() {
  const { count, increment, decrement } = useCounterStore();

  const { value, multifly } = useMultiflyStore();

  return (
    <div className="App">
      {/* 카운터 섹션 */}
      <section>
        <h2>Counter Store</h2>
        <button onClick={decrement}>-</button>
        <p>{count}</p>
        <button onClick={increment}>+</button>
      </section>

      {/* 곱셈기 섹션 */}
      <section>
        <h2>Multifly Store</h2>
        <p>Current Value: {value}</p>
        {/* 
          참고: useMultiflyStore의 value 초기값이 0이므로, 
          어떤 수를 곱해도 결과는 계속 0이 됩니다. 
          store.ts에서 value 초기값을 1로 변경하면 곱셈 효과를 볼 수 있습니다.
          (예: value: 1)
        */}
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
    </div>
  );
}

export default App;
