import React from "react";

const Skleton = () => {
    return (
        <div className="grid grid-cols-2 gap-x-2 lg:grid-cols-4 xl:gap-x-10 gap-y-3">
            <div className="w-full flex flex-col items-start gap-y-3">
                <div className="w-full h-[140px] min-[700px]:h-[250px] lg:h-64 bg-neutral-200 rounded-xl"></div>
                <div className="w-full h-3 lg:h-7 bg-neutral-200 rounded-xl"></div>
                <div className="w-3/4 h-3 lg:h-7 bg-neutral-200 rounded-xl"></div>
                <div className="w-1/3 h-3 lg:h-7 bg-neutral-200 rounded-xl"></div>
            </div>
            <div className="w-full flex flex-col items-start gap-y-3">
                <div className="w-full h-[140px] min-[700px]:h-[250px] lg:h-64 bg-neutral-200 rounded-xl"></div>
                <div className="w-full h-3 lg:h-7 bg-neutral-200 rounded-xl"></div>
                <div className="w-3/4 h-3 lg:h-7 bg-neutral-200 rounded-xl"></div>
                <div className="w-1/3 h-3 lg:h-7 bg-neutral-200 rounded-xl"></div>
            </div>
            <div className="w-full flex flex-col items-start gap-y-3">
                <div className="w-full h-[140px] min-[700px]:h-[250px] lg:h-64 bg-neutral-200 rounded-xl"></div>
                <div className="w-full h-3 lg:h-7 bg-neutral-200 rounded-xl"></div>
                <div className="w-3/4 h-3 lg:h-7 bg-neutral-200 rounded-xl"></div>
                <div className="w-1/3 h-3 lg:h-7 bg-neutral-200 rounded-xl"></div>
            </div>
            <div className="w-full flex flex-col items-start gap-y-3">
                <div className="w-full h-[140px] min-[700px]:h-[250px] lg:h-64 bg-neutral-200 rounded-xl"></div>
                <div className="w-full h-3 lg:h-7 bg-neutral-200 rounded-xl"></div>
                <div className="w-3/4 h-3 lg:h-7 bg-neutral-200 rounded-xl"></div>
                <div className="w-1/3 h-3 lg:h-7 bg-neutral-200 rounded-xl"></div>
            </div>
        </div>
    );
};

export default Skleton;
