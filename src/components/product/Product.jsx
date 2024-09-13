import { useGetProductQuery } from "@/context/api/product-api";
import React from "react";
import Skleton from "../skleton/Skleton";
import ReactStars from "react-stars";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFlip, Pagination, Navigation } from "swiper/modules";

const Product = () => {
    const ratingChanged = (newRating) => {
        console.log(newRating);
    };
    const { data, isLoading, error } = useGetProductQuery();
    const lists = data?.map((product) => (
        <div className="" key={product.id}>
            <div className="bg-[#F0EEED] w-full h-[145px] min-[490px]:h-[200px] min-[600px]:h-[240px] lg:h-[260px] xl:h-[300px] overflow-hidden rounded-[20px]">
                <Swiper
                    effect={"flip"}
                    grabCursor={true}
                    pagination={true}
                    navigation={false}
                    modules={[EffectFlip, Pagination, Navigation]}
                    className="mySwiper bg-[#F0EEED] w-full lg:h-[300px] rounded-[20px]">
                    {product.url?.map((img, inx) => (
                        <SwiperSlide
                            key={inx}
                            className="flex items-center justify-center">
                            <img
                                className="min-[600px]:h-[220px] min-[600px]:w-[220px] w-[140px] h-[140px] min-[490px]:h-[180px] min-[490px]:w-[180px] lg:w-[240px] xl:w-[280px] xl:h-[280px] lg:h-[240px] object-contain hover:scale-105 transition-all"
                                src={img}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            <h2 className="text-lg lg:text-xl font-bold mb-2 mt-2">
                {product.title.charAt(0).toUpperCase() + product.title.slice(1)}
            </h2>
            <div className="flex items-center mb-2 gap-x-2">
                <ReactStars
                    count={5}
                    onChange={ratingChanged}
                    size={24}
                    color2={"#ffd700"}
                />
                <p className="text-base text-neutral-500">({product.rating})</p>
            </div>

            <p className="text-2xl font-bold">$ {product.price}</p>
        </div>
    ));

    return (
        <div>
            {isLoading && <Skleton />}
            <div className="grid grid-cols-2 gap-x-2 lg:grid-cols-4 xl:gap-x-10 gap-y-3">
                {lists}
            </div>
        </div>
    );
};

export default Product;
