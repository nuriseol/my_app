/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // src 폴더 내의 모든 JS, JSX, TS, TSX 파일을 Tailwind CSS가 스캔하도록 설정
  ],
  theme: {
    extend: {
      // 필요에 따라 테마 확장
      // 예: colors: { primary: '#1DA1F2' },
    },
  },
  plugins: [],
};
