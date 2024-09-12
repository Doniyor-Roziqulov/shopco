import React from "react";
import { lists } from "@/static";

const pro = lists.map((e, inx) => (
    <div className="relative rounded-xl xl:h-80 bg-white" key={inx}>
        <img
            className="w-full h-full rounded-xl hover:scale-105 transition-all"
            src={e.url}
            alt=""
        />
        <p className="text-2xl font-bold absolute top-[16px] left-[24px]">
            {e.title}
        </p>
    </div>
));

const Dress = () => {
    return (
        <section>
            <div className="container">
                <div className="bg-[#F0F0F0] px-3 pb-4 pt-8 min-[550px]:px-5 lg:px-10 lg:pb-16 lg:pt-12 xl:px-20 rounded-xl">
                    <h2 className="text-3xl text-center lg:text-5xl font-bold mb-5">
                        BROWSE BY DRESS STYLE
                    </h2>
                    <div className="grid grid-cols-1 gap-y-5 min-[800px]:grid-cols-2 gap-x-3 lg:gap-y-7 lg:gap-x-7">
                        {pro}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Dress;
