import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter as Router } from "react-router-dom";
import { Toaster } from "sonner";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Provider } from "react-redux";
import { store } from "./store/store.ts";
import ScrollToTop from "./components/ScrollToTop.tsx";

const client = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={client}>
      <Provider store={store}>
        <Router>
          <ScrollToTop />
          <App />
          <Toaster richColors />
        </Router>
      </Provider>
    </QueryClientProvider>
  </StrictMode>
);
