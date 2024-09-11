import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./pages/layout/Layout";

const App = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Layout />}></Route>
            </Routes>
        </>
    );
};

export default App;
