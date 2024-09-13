import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MdOutlineClose } from "react-icons/md";

const Baner = () => {
    const [data, setData] = useState(true);
    return (
        <div className={data ? "w-full bg-black flex" : "hidden"}>
            <div className="container max-w-[1280px] relative flex items-center justify-center gap-x-2">
                <p className="text-white text-center py-2 font-normal text-xs lg:text-sm">
                    Sign up and get 20% off to your first order.
                </p>
                <Link className="font-medium text-xs lg:text-sm underline underline-offset-4 text-white">
                    Sign Up Now
                </Link>
                <button
                    onClick={() => setData(false)}
                    className="absolute right-0">
                    <MdOutlineClose className="text-white" />
                </button>
            </div>
        </div>
    );
};

export default Baner;
