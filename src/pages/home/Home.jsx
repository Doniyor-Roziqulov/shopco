import Animate from "@/components/animate/Animate";
import Dress from "@/components/dress/Dress";
import Happy from "@/components/happy/Happy";
import Hero from "@/components/hero/Hero";
import Products from "@/components/products/Products";
import React from "react";

const Home = () => {
    return (
        <div>
            <Animate />
            <Hero />
            <Products />
            <Dress />
            <Happy />
        </div>
    );
};

export default Home;
