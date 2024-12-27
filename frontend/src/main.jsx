import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Toaster } from "react-hot-toast";
import { store } from "./store.js";
import { Provider } from "react-redux";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Toaster
      toastOptions={{
        style: {
          background: "#000000",
          border: "1px solid #a855f7",
          color: "#fff",
          padding: "10px",
          borderRadius: "10px",
        },
      }}
    />
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
