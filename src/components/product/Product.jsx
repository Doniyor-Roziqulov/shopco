import { useGetProductQuery } from "@/context/api/product-api";
import React from "react";
import Skleton from "../skleton/Skleton";

const Product = () => {
    const { data, isLoading, error } = useGetProductQuery();
    const lists = data?.map((product) => (
        <div className="w-[296px] " key={product.id}>
            <div className="bg-[#F0EEED] w-full h-[296px] p-5 rounded-[20px]">
                <img
                    className="w-full h-full object-contain hover:scale-105 transition-all"
                    src={product.url[0]}
                    alt=""
                />
            </div>
            <h2 className="text-xl font-bold mb-2 mt-2">
                {product.title.charAt(0).toUpperCase() + product.title.slice(1)}
            </h2>
            <p>{product.desc}</p>
            <p className="text-base text-neutral-500 mb-2">
                Rating ({product.rating})
            </p>
            <p className="text-2xl font-bold">$ {product.price}</p>
        </div>
    ));

    return (
        <div>
            {isLoading && <Skleton />}
            <div className="flex flex-wrap justify-between">{lists}</div>
        </div>
    );
};

export default Product;
