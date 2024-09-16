import React from "react";

const Empty = ({ url, text }) => {
    return (
        <div className="flex flex-col items-center">
            <div className="w-[400px] h-[300px]">
                <img
                    className="w-full h-full object-contain"
                    src={url}
                    alt="empty"
                />
            </div>
            <p className="font-bold text-2xl">{text} !</p>
        </div>
    );
};

export default Empty;
