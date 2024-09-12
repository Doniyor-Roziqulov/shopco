import React from "react";
import Product from "../product/Product";

const Products = () => {
    return (
        <section className="pt-[72px]">
            <div className="container mx-auto max-w-[1280px] px-5">
                <div className="border-b">
                    <h2 className="text-5xl font-bold text-center mb-14">
                        NEW ARRIVALS
                    </h2>
                    <Product />
                    <button className=" mx-auto block py-4 px-20 rounded-[62px] border mt-9 font-medium hover:text-white hover:bg-black transition-all mb-16">
                        View All
                    </button>
                </div>
                <div className="pt-16">
                    <h2 className="text-5xl font-bold text-center mb-14">
                        TOP SELLING
                    </h2>
                    <Product />
                    <button className=" mx-auto block py-4 px-20 rounded-[62px] border mt-9 font-medium hover:text-white hover:bg-black transition-all mb-16">
                        View All
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Products;
