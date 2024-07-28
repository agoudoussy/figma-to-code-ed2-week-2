import { Suspense, lazy } from "react";
import FallbackUI from "UI/FallbackUI";
import "./App.css";

function App() {
  const Home = lazy(() => import("pages/Home"));

  return (
    <Suspense fallback={<FallbackUI />}>
      <Home />
    </Suspense>
  );
}

export default App;
