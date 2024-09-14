import React from "react";
import { TfiEmail } from "react-icons/tfi";

const Stay = () => {
    return (
        <>
            <div className="container max-w-[1280px]">
                <div className="flex items-center relative bg-black px-[64px] py-[36px] mb-[-100px] rounded-[20px] mt-[50px] justify-between">
                    <div className="w-[551px]">
                        <h2 className="text-white  font-bold text-[40px] leading-[45px]">
                            STAY UPTO DATE ABOUT OUR LATEST OFFERS
                        </h2>
                    </div>
                    <div className="flex flex-col gap-[14px]">
                        <div className="flex items-center gap-2 bg-white px-[22px] py-[12px] rounded-[62px]">
                            <TfiEmail />
                            <input
                                className="text-[rgb(153,153,153)] w-[349px]"
                                type="text"
                                placeholder="Enter your email address"
                            />
                        </div>
                        <div className="flex items-center gap-2 bg-white px-[16px] py-[12px] rounded-[62px]">
                            <input
                                className="text-[rgb(153,153,153)] w-[349px] text-center"
                                type="text"
                                placeholder="Subscribe to Newsletter"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Stay;
