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
import Admin from "./components/admin/Admin";
import CreateProduct from "./components/admin/CreateProduct";
import DeletaProduct from "./components/admin/DeletaProduct";
import UpdateProduct from "./components/admin/UpdateProduct";
import Error from "./components/error/Error";

const App = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="cart" element={<Cart />} />
                    <Route path="wishlist" element={<Wishlist />} />
                    <Route path="product/:id" element={<Detail />} />
                    <Route path="*" element={<Error />} />
                </Route>
                <Route path="admin" element={<Admin />}>
                    <Route path="create" element={<CreateProduct />} />
                    <Route path="delete" element={<DeletaProduct />} />
                    <Route path="update" element={<UpdateProduct />} />
                </Route>
            </Routes>
        </>
    );
};

export default App;
