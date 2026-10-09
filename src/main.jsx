import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";
import AuthProvider from "./context/AuthContext";
import ErrorBoundary from "./Component/ErrorBoundry"
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
    <ErrorBoundary>
      <AuthProvider>
        <App />
      </AuthProvider>
    </ErrorBoundary>
    </BrowserRouter>
  </StrictMode>
);