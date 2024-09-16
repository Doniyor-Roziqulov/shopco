import React from "react";
import hero from "@/images/heroimg.png";
import vector from "../../assets/vector.svg";

const Hero = () => {
    return (
        <>
            <div className="bg-[rgb(242,240,241)] pt-[40px]">
                <div className="container max-w-[1280px] flex flex-col lg:flex-row justify-between">
                    <div className="flex flex-col justify-center gap-[48px] lg:w-[50%]">
                        <div className="flex flex-col gap-y-5 lg:gap-[32px]">
                            <div>
                                <h2 className="font-bold text-4xl lg:text-[64px] lg:leading-[64px] ">
                                    FIND CLOTHES THAT MATCHES YOUR STYLE
                                </h2>
                            </div>
                            <div className="flex w-[95%]">
                                <p className="font-[400] text-sm lg:text-[16px] leading-[22px] text-[rgb(97,96,96)]">
                                    Browse through our diverse range of
                                    meticulously crafted garments, designed to
                                    bring out your individuality and cater to
                                    your sense of style.
                                </p>
                            </div>
                            <div className="">
                                <button className="w-full min-[600px]:w-auto py-[15px] border px-[67px] hover:bg-white hover:text-black transition-all hover:border-black  bg-[rgb(0,0,1)] text-white rounded-[64px]">
                                    Shop Now
                                </button>
                            </div>
                        </div>
                        <div className="flex flex-wrap justify-center min-[600px]:justify-start gap-x-4 xl:gap-x-5 lg:gap-[30px]">
                            <div className="">
                                <h3 className="font-bold text-2xl lg:text-[54px] lg:leading-[54px]">
                                    200+
                                </h3>
                                <p className="pb-5 text-[#999] lg:text-[16px] lg:leading-[22.14px]">
                                    Internonal Brands
                                </p>
                            </div>
                            <div className="w-[2px] border border-[#dad9d9] h-[52px] lg:h-[74px]"></div>
                            <div className="">
                                <h3 className="font-bold text-2xl lg:text-[54px] lg:leading-[54px]">
                                    2,000+
                                </h3>
                                <p className="pb-5 text-[#999] lg:text-[16px] lg:leading-[22.14px]">
                                    High-Quality Products
                                </p>
                            </div>
                            <div className="w-[2px] hidden min-[510px]:block border border-[#dad9d9] h-[52px] lg:h-[74px]"></div>
                            <div className="">
                                <h3 className="font-bold text-2xl lg:text-[54px] lg:leading-[54px]">
                                    30,000+
                                </h3>
                                <p className="pb-5 text-xs text-[#999] lg:text-[16px] lg:leading-[22.14px]">
                                    Happy Customers
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="flex relative justify-center lg:w-[50%]">
                        <img
                            className="w-[600px] lg:w-full object-cover"
                            src={hero}
                            alt=""
                        />
                        <img
                            className="absolute right-0 lg:right-[50px] lg:top-10"
                            src={vector}
                            alt=""
                        />
                        <img
                            className="absolute left-0 top-32 lg:left-auto lg:right-[500px] w-[50px] lg:top-[20px]"
                            src={vector}
                            alt="a"
                        />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Hero;
