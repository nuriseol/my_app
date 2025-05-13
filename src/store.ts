import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { persist, createJSONStorage } from "zustand/middleware";

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

/* 
immer: 내장 미들웨어
immer를 이용하면 복잡한 객체의 업데이트를 간단히 처리할 수 있습니다. 
*/

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

/* 
persist
store에 저장되어 있던 데이터들이 새로고침 등과 같이 페이지 이동이 일어나더라도 값을 유지할 수 있게 도와줍니다.
값을 유지하는 원리는 브라우저 저장소를 활용하는 것으로, persist를 설정할 때 어떤 저장소를 활용할지 설정해 줄 수 있습니다. 
사용할 수 있는 저장소로는 로컬 스토리지뿐만 아니라 세션스토리지도 지원합니다.
*/
interface ThemeState {
  mode: "light" | "dark";
  toggleMode: () => void;
}

export const useThemeStore = create<ThemeState>()(
  persist(
    (set) => ({
      mode: "light", // 초기 테마는 'light'
      toggleMode: () =>
        set((state) => ({
          mode: state.mode === "light" ? "dark" : "light",
        })),
    }),
    {
      name: "theme-settings-storage", // localStorage에 저장될 때 사용될 이름 (고유해야 함)
      storage: createJSONStorage(() => localStorage), // 사용할 스토리지 (localStorage, sessionStorage 등)
      // 기본값은 localStorage이므로, 위 storage 라인은 생략해도 localStorage를 사용합니다.
      // sessionStorage를 사용하고 싶다면: createJSONStorage(() => sessionStorage)
    }
  )
);
