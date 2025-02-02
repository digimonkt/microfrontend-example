import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";

import "./app.css";
import Header from "./components/header";

const RemoteProductApp = React.lazy(() => import("product/ProductApp"));
const RemoteCartApp = React.lazy(() => import("cart/CartApp"));

const App = () => {
  return (
    <div>
      <Header loadingFrom="Container" />

      <Suspense fallback={() => <div>Loading...</div>}>
        <Routes>
          <Route path="/products/*" element={<RemoteProductApp />} />
          <Route path="/cart/*" element={<RemoteCartApp />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
