import { Suspense, lazy } from "react";
import FallbackUI from "UI/FallbackUI";
import "./App.css";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";

function App() {
  const Home = lazy(() => import("pages/Home"));

  return (
    <Suspense fallback={<FallbackUI />}>
      <BrowserRouter basename="/figma-to-code-ed2-week-1">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
