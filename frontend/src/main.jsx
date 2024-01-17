import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import store from "../src/store/App.jsx";
import App from "./App.jsx";
import { ScrollProvider } from "./Components/Util/ScrollContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <ScrollProvider>
        <App />
      </ScrollProvider>
    </Provider>
  </React.StrictMode>
);
