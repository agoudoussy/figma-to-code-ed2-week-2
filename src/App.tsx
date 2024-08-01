import { Suspense, lazy } from "react";
import FallbackUI from "UI/FallbackUI";
import "./App.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Categories from "Views/Categories";
import Art from "Views/Art";
import Celebrities from "Views/Celebrities";
import Gaming from "Views/Gaming copy";
import Sport from "Views/Sport";

function App() {
  const Home = lazy(() => import("pages/Home"));

  return (
    <Suspense fallback={<FallbackUI />}>
      <BrowserRouter basename="/figma-to-code-ed2-week-1">
        <Routes>
          <Route path="/" element={<Navigate to="/categories" />} />
          <Route path="/" element={<Home />}>
            <Route path="categories" element={<Categories />} />
            <Route path="art" element={<Art />} />
            <Route path="celebrities" element={<Celebrities />} />
            <Route path="gaming" element={<Gaming />} />
            <Route path="sport" element={<Sport />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
