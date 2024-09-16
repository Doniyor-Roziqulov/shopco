import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./context/index.js";
import "./index.css";
import Suspens from "./components/suspens/Suspens.jsx";

const App = lazy(() => import("./App.jsx"));

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <Provider store={store}>
            <Suspense fallback={<Suspens />}>
                <BrowserRouter>
                    <App />
                </BrowserRouter>
            </Suspense>
        </Provider>
    </React.StrictMode>
);
