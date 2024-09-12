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
        <div className="w-[296px] " key={product.id}>
            <div className="bg-[#F0EEED] w-full h-[296px] overflow-hidden rounded-[20px]">
                <Swiper
                    effect={"flip"}
                    grabCursor={true}
                    pagination={true}
                    navigation={false}
                    modules={[EffectFlip, Pagination, Navigation]}
                    className="mySwiper bg-[#F0EEED] w-full h-[296px] rounded-[20px]">
                    <SwiperSlide className="flex items-center justify-center">
                        <img
                            className="w-[270px] h-[270px] object-contain hover:scale-105 transition-all"
                            src={product.url[0]}
                        />
                    </SwiperSlide>
                    <SwiperSlide className="flex items-center justify-center">
                        <img
                            className="w-[270px] h-[270px] object-contain hover:scale-105 transition-all"
                            src={product.url[1]}
                        />
                    </SwiperSlide>
                    <SwiperSlide className="flex items-center justify-center">
                        <img
                            className="w-[270px] h-[270px] object-contain hover:scale-105 transition-all"
                            src={product.url[2]}
                        />
                    </SwiperSlide>
                </Swiper>
            </div>
            <h2 className="text-xl font-bold mb-2 mt-2">
                {product.title.charAt(0).toUpperCase() + product.title.slice(1)}
            </h2>
            <p>{product.desc}</p>
            <p className="text-base text-neutral-500 mb-2 flex items-center gap-x-2">
                <ReactStars
                    count={5}
                    onChange={ratingChanged}
                    size={24}
                    color2={"#ffd700"}
                />
                ({product.rating})
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
