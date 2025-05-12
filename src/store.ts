import { create } from "zustand";

// 스토어의 상태와 액션에 대한 타입을 정의합니다.
interface CounterState {
  count: number;
  increment: () => void;
  decrement: () => void;
}

// create 함수를 사용하여 스토어를 생성합니다.
const useCounterStore = create<CounterState>((set) => ({
  count: 0, // 초기상태
  increment: () => set((state) => ({ count: state.count + 1 })),
  decrement: () => set((state) => ({ count: state.count - 1 })),
}));

export default useCounterStore;
