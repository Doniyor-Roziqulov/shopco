import React from "react";
import hero from "../../assets/friend.png";
import vector from "../../assets/vector.svg";

const Hero = () => {
    return (
        <>
            <div className="hero bg-[rgb(242,240,241)]  min-h-[485px] pt-[40px]">
                <div className="container max-w-[1280px] flex flex-row hero justify-between">
                    <div className="flex flex-col justify-center gap-[48px]  w-[50%] ">
                        <div className="flex flex-col gap-[32px]">
                            <div className="">
                                <h2 className="font-bold text-[64px] leading-[64px] ">
                                    FIND CLOTHES THAT MATCHES YOUR STYLE
                                </h2>
                            </div>
                            <div className="flex w-[95%]">
                                <p className="font-[400] text-[16px] leading-[22px] text-[rgb(97,96,96)]">
                                    Browse through our diverse range of
                                    meticulously crafted garments, designed to
                                    bring out your individuality and cater to
                                    your sense of style.
                                </p>
                            </div>
                            <div className="">
                                <button className="py-[15px] border px-[67px] hover:bg-white hover:text-black transition-all hover:border-black  bg-[rgb(0,0,1)] text-white rounded-[64px]">
                                    Shop Now
                                </button>
                            </div>
                        </div>
                        <div className="flex gap-[30px]">
                            <div className="">
                                <h3 className="font-bold text-[54px] leading-[54px]">
                                    200+
                                </h3>
                                <p className="pb-5 text-[16px] leading-[22.14px]">
                                    Internonal Brands
                                </p>
                            </div>
                            <div className="w-[1px] h-[74px] bg-[rgb(218,217,217)]"></div>
                            <div className="">
                                <h3 className="font-bold text-[54px] leading-[54px]">
                                    2,000+
                                </h3>
                                <p className="pb-5 text-[16px] leading-[22.14px]">
                                    High-Quality Products
                                </p>
                            </div>
                            <div className="w-[1px] h-[74px] bg-[rgb(218,217,217)]"></div>
                            <div className="">
                                <h3 className="font-bold text-[54px] leading-[54px]">
                                    30,000+
                                </h3>
                                <p className="pb-5 text-[16px] leading-[22.14px]">
                                    Happy Customers
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="flex relative ">
                        <img className="w-[500px]" src={hero} alt="" />
                        <img
                            className="absolute right-[50px] top-10"
                            src={vector}
                            alt=""
                        />
                        <img
                            className="relative right-[500px] w-[50px] top-[20px]"
                            src={vector}
                            alt=""
                        />
                        <div className="w-[1px] h-[74px] bg-[rgb(218,217,21)]"></div>
                        <div className="">
                            <h3 className="font-bold text-[54px] leading-[54px]">
                                30,000+
                            </h3>
                            <p className="pb-5 text-[16px] leading-[22.14px]">
                                Happy Customers
                            </p>
                        </div>
                    </div>
                </div>
                <div className="flex ">
                    <img className="w-[500px]" src={hero} alt="" />
                    <img
                        className="absolute right-[200px]"
                        src={vector}
                        alt=""
                    />
                    <img
                        className="absolute right-[630px] w-[50px] top-[320px]"
                        src={vector}
                        alt=""
                    />
                </div>
            </div>
        </>
    );
};

export default Hero;
