import Stay from "@/components/stay/Stay";
import React, { useEffect, useState } from "react";
import star3 from "@/assets/star3.svg";
import star4 from "@/assets/star4.svg";
import star5 from "@/assets/star5.svg";
import { FaCheckCircle } from "react-icons/fa";
import { TbDots } from "react-icons/tb";
import { useParams } from "react-router-dom";
import {
    useGetProductByIdQuery,
    useGetProductQuery,
} from "@/context/api/product-api";
import ReactStars from "react-stars";
import { VscCheck } from "react-icons/vsc";
import { FiMinus, FiPlus } from "react-icons/fi";
import Product from "@/components/product/Product";
import { useDispatch } from "react-redux";
import { addCart } from "@/context/cart";

const Detail = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    const { id } = useParams();
    const { data } = useGetProductByIdQuery(id);
    const [image, setImage] = useState(0);
    const [count, setCount] = useState(1);
    const { isLoading: isLoading2, data: data2 } = useGetProductQuery({
        limit: 4,
        page: 4,
    });
    const dispatch = useDispatch();

    return (
        <>
            <section className="">
                <div className="container max-w-[1280px] border-t pt-14">
                    <div className="pb-20">
                        <div className="flex flex-col min-[950px]:flex-row gap-x-10">
                            <div className="lg:w-1/2 min-[650px]:items-center lg:flex-row flex gap-y-3 flex-col-reverse gap-x-[14px]">
                                <div className="flex gap-x-3 lg:flex-col gap-y-[14px]">
                                    {data?.url.map((img, inx) => (
                                        <div
                                            onClick={() => setImage(inx)}
                                            key={inx}
                                            className="w-[100px] h-[94px] lg:w-[152px] cursor-pointer active:border-black lg:h-[168px] rounded-[20px] border bg-[#F0EEED] transition-all px-2 py-3">
                                            <img
                                                className="w-full h-full object-contain rounded-[20px]"
                                                src={img}
                                            />
                                        </div>
                                    ))}
                                </div>
                                <div className="w-full h-[290px] min-[420px]:h-[320px] min-[500px]:h-[380px] min-[600px]:h-[450px] min-[650px]:w-[444px] lg:h-[530px] bg-[#F0EEED] rounded-[20px] py-5 px-5">
                                    <img
                                        className="w-full  h-full object-contain"
                                        src={data?.url[image]}
                                        alt=""
                                    />
                                </div>
                            </div>
                            <div>
                                <h2 className="text-2xl lg:text-[40px] font-bold">
                                    {data?.title.toUpperCase()}
                                </h2>
                                <div className="flex items-center gap-x-4">
                                    <ReactStars
                                        count={5}
                                        size={24}
                                        color2={"#ffd700"}
                                    />
                                    <p>({data?.rating})</p>
                                </div>
                                <div className="flex items-center gap-x-3 mb-4">
                                    <p className="text-[32px] font-bold">
                                        ${data?.price * count}
                                    </p>
                                    <del className="text-[32px] font-bold opacity-40">
                                        ${data?.oldPrice}
                                    </del>
                                </div>
                                <p className="text-sm lg:text-base opacity-60 leading-5 font-normal pb-4 border-b border-black border-opacity-10">
                                    {data?.desc}
                                </p>
                                <div className="pt-4">
                                    <p className="text-base opacity-60 font-normal">
                                        Select Colors
                                    </p>
                                    <div className="flex gap-x-4 mt-4 pb-6 border-b">
                                        <button className="flex items-center justify-center w-[37px] h-[37px] rounded-full bg-[#4F4631]">
                                            <VscCheck className="text-white" />
                                        </button>
                                        <button className="w-[37px] h-[37px] rounded-full bg-[#314F4A]"></button>
                                        <button className="w-[37px] h-[37px] rounded-full bg-[#31344F]"></button>
                                    </div>
                                </div>
                                <div className="pt-4 border-b pb-4">
                                    <p className="text-base opacity-60 font-normal mb-2">
                                        Choose Size
                                    </p>
                                    <div className="flex gap-x-2 lg:gap-x-3">
                                        <button className="rounded-full py-[8px] text-sm lg:text-base px-[15px] lg:px-6 lg:py-3 bg-[#F0F0F0] text-[#00000099] transition-all hover:bg-black hover:text-white">
                                            Small
                                        </button>
                                        <button className="rounded-full py-[8px] text-sm lg:text-base px-[15px] lg:px-6 lg:py-3 bg-[#F0F0F0] text-[#00000099] transition-all hover:bg-black hover:text-white">
                                            Medium
                                        </button>
                                        <button className="rounded-full py-[8px] text-sm lg:text-base px-[15px] lg:px-6 lg:py-3 bg-[#F0F0F0] text-[#00000099] transition-all hover:bg-black hover:text-white">
                                            Large
                                        </button>
                                        <button className="rounded-full py-[8px] text-sm lg:text-base px-[15px] lg:px-6 lg:py-3 bg-[#F0F0F0] text-[#00000099] transition-all hover:bg-black hover:text-white">
                                            X-Large
                                        </button>
                                    </div>
                                </div>
                                <div className="flex gap-x-5 pt-5">
                                    <div className="flex items-center justify-between w-[170px] rounded-full bg-[#F0F0F0]">
                                        <button
                                            disabled={count <= 1}
                                            onClick={() => setCount(count - 1)}
                                            className="flex items-center justify-center px-5 py-4">
                                            <FiMinus className="text-xl" />
                                        </button>
                                        <p className="font-medium">{count}</p>
                                        <button
                                            onClick={() => setCount(count + 1)}
                                            className="flex items-center justify-center px-5 py-4">
                                            <FiPlus className="text-xl" />
                                        </button>
                                    </div>
                                    <button
                                        onClick={() =>
                                            dispatch(
                                                addCart({
                                                    ...data,
                                                    quantity: 1,
                                                })
                                            )
                                        }
                                        className="border text-white bg-black py-4 w-full rounded-full transition-all hover:bg-white hover:text-black hover:border-black">
                                        Add to Cart
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-wrap justify-between gap-5">
                        <div className="flex flex-col w-full sm:w-[48%] px-8 py-7 border border-gray-300 rounded-[20px] gap-4">
                            <div className="flex items-center justify-between">
                                <img src={star5} alt="" />
                                <TbDots className="w-6" />
                            </div>
                            <div className="flex flex-col gap-3">
                                <div className="flex items-center gap-1">
                                    <b className="text-xl">Samantha D.</b>
                                    <FaCheckCircle className="text-green-500" />
                                </div>
                                <div>
                                    <p className="leading-[22px] text-gray-600 mb-2.5">
                                        "I absolutely love this t-shirt! The
                                        design is unique and the fabric feels so
                                        comfortable. As a fellow designer, I
                                        appreciate the attention to detail. It's
                                        become my favorite go-to shirt."
                                    </p>
                                </div>
                            </div>
                            <div className="">
                                <p className="text-gray-600 font-medium">
                                    Posted on August 14, 2023
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-col w-full sm:w-[48%] px-8 py-7 border border-gray-300 rounded-[20px] gap-4">
                            <div className="flex items-center justify-between">
                                <img src={star4} alt="" />
                                <TbDots className="w-6" />
                            </div>
                            <div className="flex flex-col gap-3">
                                <div className="flex items-center gap-1">
                                    <b className="text-xl">Alex M.</b>
                                    <FaCheckCircle className="text-green-500" />
                                </div>
                                <div>
                                    <p className="leading-[22px] text-gray-600 mb-2.5">
                                        "The t-shirt exceeded my expectations!
                                        The colors are vibrant and the print
                                        quality is top-notch. Being a UI/UX
                                        designer myself, I'm quite picky about
                                        aesthetics, and this t-shirt definitely
                                        gets a thumbs up from me."
                                    </p>
                                </div>
                            </div>
                            <div className="">
                                <p className="text-gray-600 font-medium">
                                    Posted on August 15, 2023
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-col w-full sm:w-[48%] px-8 py-7 border border-gray-300 rounded-[20px] gap-4">
                            <div className="flex items-center justify-between">
                                <img src={star3} alt="" />
                                <TbDots className="w-6" />
                            </div>
                            <div className="flex flex-col gap-3">
                                <div className="flex items-center gap-1">
                                    <b className="text-xl">Ethan R.</b>
                                    <FaCheckCircle className="text-green-500" />
                                </div>
                                <div>
                                    <p className="leading-[22px] text-gray-600 mb-2.5">
                                        "This t-shirt is a must-have for anyone
                                        who appreciates good design. The
                                        minimalistic yet stylish pattern caught
                                        my eye, and the fit is perfect. I can
                                        see the designer's touch in every aspect
                                        of this shirt."
                                    </p>
                                </div>
                            </div>
                            <div className="">
                                <p className="text-gray-600 font-medium">
                                    Posted on August 16, 2023
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-col w-full sm:w-[48%] px-8 py-7 border border-gray-300 rounded-[20px] gap-4">
                            <div className="flex items-center justify-between">
                                <img src={star4} alt="" />
                                <TbDots className="w-6" />
                            </div>
                            <div className="flex flex-col gap-3">
                                <div className="flex items-center gap-1">
                                    <b className="text-xl">Olivia P.</b>
                                    <FaCheckCircle className="text-green-500" />
                                </div>
                                <div>
                                    <p className="leading-[22px] text-gray-600 mb-2.5">
                                        "As a UI/UX enthusiast, I value
                                        simplicity and functionality. This
                                        t-shirt not only represents those
                                        principles but also feels great to wear.
                                        It's evident that the designer poured
                                        their creativity into making this
                                        t-shirt stand out."
                                    </p>
                                </div>
                            </div>
                            <div className="">
                                <p className="text-gray-600 font-medium">
                                    Posted on August 17, 2023
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-col w-full sm:w-[48%] px-8 py-7 border border-gray-300 rounded-[20px] gap-4">
                            <div className="flex items-center justify-between">
                                <img src={star4} alt="" />
                                <TbDots className="w-6" />
                            </div>
                            <div className="flex flex-col gap-3">
                                <div className="flex items-center gap-1">
                                    <b className="text-xl">Liam K.</b>
                                    <FaCheckCircle className="text-green-500" />
                                </div>
                                <div>
                                    <p className="leading-[22px] text-gray-600 mb-2.5">
                                        "This t-shirt is a fusion of comfort and
                                        creativity. The fabric is soft, and the
                                        design speaks volumes about the
                                        designer's skill. It's like wearing a
                                        piece of art that reflects my passion
                                        for both design and fashion."
                                    </p>
                                </div>
                            </div>
                            <div className="">
                                <p className="text-gray-600 font-medium">
                                    Posted on August 18, 2023
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-col w-full sm:w-[48%] px-8 py-7 border border-gray-300 rounded-[20px] gap-4">
                            <div className="flex items-center justify-between">
                                <img src={star5} alt="" />
                                <TbDots className="w-6" />
                            </div>
                            <div className="flex flex-col gap-3">
                                <div className="flex items-center gap-1">
                                    <b className="text-xl">Ava H.</b>
                                    <FaCheckCircle className="text-green-500" />
                                </div>
                                <div>
                                    <p className="leading-[22px] text-gray-600 mb-2.5">
                                        "I'm not just wearing a t-shirt; I'm
                                        wearing a piece of design philosophy.
                                        The intricate details and thoughtful
                                        layout of the design make this shirt a
                                        conversation starter."
                                    </p>
                                </div>
                            </div>
                            <div className="">
                                <p className="text-gray-600 font-medium">
                                    Posted on August 19, 2023
                                </p>
                            </div>
                        </div>
                    </div>
                    <button className="mx-auto block mt-9 border rounded-full py-4 px-14 transition-all hover:bg-black hover:text-white">
                        Load More Reviews
                    </button>
                    <h2 className="font-bold text-5xl text-center mt-16 mb-12">
                        YOU MIGHT ALSO LIKE
                    </h2>
                    <Product data={data2} isLoading={isLoading2} />
                </div>
            </section>
            <Stay />
        </>
    );
};

export default Detail;
