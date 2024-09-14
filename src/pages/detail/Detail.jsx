import Stay from "@/components/stay/Stay";
import React from "react";
import star3 from "@/assets/star3.svg";
import star4 from "@/assets/star4.svg";
import star5 from "@/assets/star5.svg";
import { FaCheckCircle } from "react-icons/fa";
import { TbDots } from "react-icons/tb";

const Detail = () => {
    return (
        <>
            <div className="container max-w-[1280px]">
                <div></div>
                <div></div>
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
                                    "I absolutely love this t-shirt! The design
                                    is unique and the fabric feels so
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
                                    "The t-shirt exceeded my expectations! The
                                    colors are vibrant and the print quality is
                                    top-notch. Being a UI/UX designer myself,
                                    I'm quite picky about aesthetics, and this
                                    t-shirt definitely gets a thumbs up from
                                    me."
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
                                    "This t-shirt is a must-have for anyone who
                                    appreciates good design. The minimalistic
                                    yet stylish pattern caught my eye, and the
                                    fit is perfect. I can see the designer's
                                    touch in every aspect of this shirt."
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
                                    "As a UI/UX enthusiast, I value simplicity
                                    and functionality. This t-shirt not only
                                    represents those principles but also feels
                                    great to wear. It's evident that the
                                    designer poured their creativity into making
                                    this t-shirt stand out."
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
                                    design speaks volumes about the designer's
                                    skill. It's like wearing a piece of art that
                                    reflects my passion for both design and
                                    fashion."
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
                                    "I'm not just wearing a t-shirt; I'm wearing
                                    a piece of design philosophy. The intricate
                                    details and thoughtful layout of the design
                                    make this shirt a conversation starter."
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
            </div>
            <Stay />
        </>
    );
};

export default Detail;
