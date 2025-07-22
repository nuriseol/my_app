import "App.css";
import ClonePage from "ClonePage";
import { Route, Routes } from "react-router";
import TestPage from "TestPage";

function App() {
  return (
    <Routes>
      <Route path="/test" element={<TestPage />} />
      <Route path="/clone" element={<ClonePage />} />
    </Routes>
  );
}

export default App;
