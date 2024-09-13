import Animate from "@/components/animate/Animate";
import Happy from "@/components/happy/Happy";
import Hero from "@/components/hero/Hero";
import Products from "@/components/products/Products";
import React from "react";
import 'swiper/css';
import 'swiper/css/navigation';

const Home = () => {
    return (
        <div>
            <Hero />
            <Animate/>
            <Products/>
            <Happy/>
        </div>
    );
};

export default Home;
