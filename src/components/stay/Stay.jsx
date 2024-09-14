import React from "react";
import { TfiEmail } from "react-icons/tfi";

const Stay = () => {
    return (
        <>
            <div className="container max-w-[1280px]">
                <div className="flex flex-col min-[750px]:flex-row items-center relative bg-black px-5 py-6 lg:px-[64px] lg:py-[36px] mb-[-100px] rounded-[20px] mt-[50px] justify-between xl:items-center">
                    <div className="lg:w-[551px] mb-8 lg:mb-0">
                        <h2 className="text-white text-[32px] font-bold lg:text-[40px] lg:leading-[45px]">
                            STAY UPTO DATE ABOUT OUR LATEST OFFERS
                        </h2>
                    </div>
                    <form className="flex flex-col w-full gap-[14px] max-w-[349px]">
                        <div className="flex items-center gap-2 w-full bg-white px-[22px] py-[12px] rounded-[62px]">
                            <TfiEmail className="text-[#999999]" />
                            <input
                                required
                                className="text-[#999999] w-full lg:w-[349px]"
                                type="text"
                                placeholder="Enter your email address"
                            />
                        </div>
                        <button className="mx-auto transition-all hover:bg-black hover:text-white border hover:border-white w-full font-medium bg-white px-[16px] py-[12px] rounded-[62px]">
                            Subscribe to Newsletter
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Stay;
