import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./pages/layout/Layout";
import Home from "./pages/home/Home";

const App = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Layout />}>
                <Route path="home" element={<Home/>}/>
                </Route>
            </Routes>
        </>
    );
};

export default App;
