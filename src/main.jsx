import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ErrorBoundary } from "react-error-boundary";
import App from "./App";
import AuthProvider from "./context/AuthContext";
import { BrowserRouter } from "react-router-dom";
import { ErrorFallback } from "./Component/ErrorFallback";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
    <ErrorBoundary FallBackComponent={ErrorFallback}>
      <AuthProvider>
        <App />
      </AuthProvider>
    </ErrorBoundary>
    </BrowserRouter>
  </StrictMode>
);