import Animate from "@/components/animate/Animate";
import Happy from "@/components/happy/Happy";
import Dress from "@/components/dress/Dress";
import Hero from "@/components/hero/Hero";
import Products from "@/components/products/Products";
import React from "react";
import Stay from "@/components/stay/Stay";

const Home = () => {
    return (
        <div>
            <Hero />
            <Animate />
            <Products />
            <Dress />
            <Happy />
            <Stay />
        </div>
    );
};

export default Home;
