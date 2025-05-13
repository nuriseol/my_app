import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

// 스토어의 상태와 액션에 대한 타입을 정의합니다.
interface CounterState {
  count: number;
  increment: () => void;
  decrement: () => void;
}

// create 함수를 사용하여 스토어를 생성합니다.
export const useCounterStore = create<CounterState>((set) => ({
  count: 0, // 초기상태
  increment: () => set((state) => ({ count: state.count + 1 })),
  decrement: () => set((state) => ({ count: state.count - 1 })),
}));

interface MultiflyState {
  value: number;
  multifly: (by: number) => void;
}

/* immer: 내장 미들웨어
immer를 이용하면 복잡한 객체의 업데이트를 간단히 처리할 수 있습니다. */

export const useMultiflyStore = create<MultiflyState>()(
  immer((set) => ({
    value: 1,
    multifly: (
      by: number // 2. 'by' 파라미터에 타입 명시
    ) =>
      set((state) => {
        // 이제 'state'는 BeeState 타입으로 올바르게 추론됩니다.
        state.value *= by;
      }),
  }))
);
