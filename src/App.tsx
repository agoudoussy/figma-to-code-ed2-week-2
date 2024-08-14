import { Suspense, lazy } from "react";
import FallbackUI from "UI/FallbackUI";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "pages/HomePage";
import ProductDetail from "pages/ProductDetail";
import Cartpage from "pages/Cartpage";
import CheckoutPage from "pages/CheckoutPage";
import PayementConfirmationPage from "pages/PayementConfirmation";
import ScrollToTop from "UI/ScrollToTop";

function App() {
  const Home = lazy(() => import("pages/Home"));

  return (
    <Suspense fallback={<FallbackUI />}>
      <BrowserRouter basename="/figma-to-code-ed2-week-2">
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />}>
            <Route index element={<HomePage />} />
            <Route path="/product-details/:id" element={<ProductDetail />} />
            <Route path="/cart" element={<Cartpage />} />
            <Route path="/checkout" element={<CheckoutPage />} />
            <Route
              path="confirmation-payement"
              element={<PayementConfirmationPage />}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
