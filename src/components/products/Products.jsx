import React, { useState } from "react";
import Product from "../product/Product";
import { Pagination } from "antd";
import { useGetProductQuery } from "@/context/api/product-api";

const Products = () => {
    const [limit, setLimit] = useState(4);
    const { isLoading, data } = useGetProductQuery({
        limit,
        page: 1,
    });
    const { isLoading: isLoading2, data: data2 } = useGetProductQuery({
        limit: 4,
        page: 3,
    });
    return (
        <section className="pt-[72px]">
            <div className="container max-w-[1280px]">
                <div className="border-b">
                    <h2 className="text-3xl lg:text-5xl font-bold text-center mb-14">
                        NEW ARRIVALS
                    </h2>
                    <Product data={data} isLoading={isLoading} />
                    <button
                        onClick={() => setLimit((prev) => prev + 4)}
                        className="w-full lg:w-auto mx-auto block py-4 px-20 rounded-[62px] border mt-9 font-medium hover:text-white hover:bg-black transition-all mb-16">
                        View All
                    </button>
                </div>
                <div className="pt-16">
                    <h2 className="text-3xl lg:text-5xl font-bold text-center mb-14">
                        TOP SELLING
                    </h2>
                    <Product data={data2} isLoading={isLoading2} />
                    <button className="w-full cursor-not-allowed lg:w-auto mx-auto block py-4 px-20 rounded-[62px] border mt-9 font-medium hover:text-white hover:bg-black transition-all mb-16">
                        View All
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Products;
