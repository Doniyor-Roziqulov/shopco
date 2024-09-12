import React from "react";

const Skleton = () => {
    return (
        <div className="flex justify-between">
            <div className="w-64 flex flex-col items-start gap-y-3">
                <div className="w-64 h-64 bg-neutral-200 rounded-xl"></div>
                <div className="w-64 h-7 bg-neutral-200 rounded-xl"></div>
                <div className="w-56 h-7 bg-neutral-200 rounded-xl"></div>
                <div className="w-40 h-7 bg-neutral-200 rounded-xl"></div>
            </div>
            <div className="w-64 flex flex-col items-start gap-y-3">
                <div className="w-64 h-64 bg-neutral-200 rounded-xl"></div>
                <div className="w-64 h-7 bg-neutral-200 rounded-xl"></div>
                <div className="w-56 h-7 bg-neutral-200 rounded-xl"></div>
                <div className="w-40 h-7 bg-neutral-200 rounded-xl"></div>
            </div>
            <div className="w-64 flex flex-col items-start gap-y-3">
                <div className="w-64 h-64 bg-neutral-200 rounded-xl"></div>
                <div className="w-64 h-7 bg-neutral-200 rounded-xl"></div>
                <div className="w-56 h-7 bg-neutral-200 rounded-xl"></div>
                <div className="w-40 h-7 bg-neutral-200 rounded-xl"></div>
            </div>
            <div className="w-64 flex flex-col items-start gap-y-3">
                <div className="w-64 h-64 bg-neutral-200 rounded-xl"></div>
                <div className="w-64 h-7 bg-neutral-200 rounded-xl"></div>
                <div className="w-56 h-7 bg-neutral-200 rounded-xl"></div>
                <div className="w-40 h-7 bg-neutral-200 rounded-xl"></div>
            </div>
        </div>
    );
};

export default Skleton;
