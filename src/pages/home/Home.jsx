import Happy from "@/components/happy/Happy";
import Products from "@/components/products/Products";
import Dress from "@/components/dress/Dress";
import Hero from "@/components/hero/Hero";
import React from "react";

const Home = () => {
    return (
        <div>
            <Hero />
            <Products />
            <Dress />
            <Happy />
        </div>
    );
};

export default Home;
