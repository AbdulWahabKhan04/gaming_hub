import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Toaster } from "react-hot-toast";
import { persistor } from "./store.js";
import store from "./store.js";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

createRoot(document.getElementById("root")).render(
  <>
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
      <PersistGate loading={null} persistor={persistor}>
      <App />
      </PersistGate>
    </Provider>
    </>
);
