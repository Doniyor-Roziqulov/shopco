import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./pages/layout/Layout";
import Home from "./pages/home/Home";
import "swiper/css";
import "swiper/css/effect-flip";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Cart from "./pages/cart/Cart";
import Wishlist from "./pages/wishlist/Wishlist";
import Detail from "./pages/detail/Detail";

const App = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="cart" element={<Cart />} />
                    <Route path="wishlist" element={<Wishlist />} />
                    <Route path="detail" element={<Detail />} />
                </Route>
            </Routes>
        </>
    );
};

export default App;
