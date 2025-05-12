import "./App.css";
import useCounterStore from "./store";

function App() {
  const { count, increment, decrement } = useCounterStore();

  return (
    <div className="App">
      <button onClick={decrement}>-</button>
      <p>{count}</p>
      <button onClick={increment}>+</button>
    </div>
  );
}

export default App;
