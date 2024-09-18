import React from "react";
import calvin from "@/assets/calvin.png";
import gucci from "@/assets/gucci.png";
import prada from "@/assets/prada.png";
import zara from "@/assets/zara.png";
import ver from "@/assets/ver.png";

const Animate = () => {
    return (
        <>
            <div className="bg-black logos overflow-x-auto">
                <div className="logos-slide container flex gap-x-4  py-[40px] items-center justify-between ">
                    <img className="imagess block" src={ver} alt="" />
                    <img className="imagess block" src={zara} alt="" />
                    <img className="imagess block" src={gucci} alt="" />
                    <img className="imagess block" src={prada} alt="" />
                    <img className="imagess block" src={calvin} alt="" />
                </div>
                <div className="logos-slide container flex gap-x-4  py-[40px] items-center justify-between ">
                    <img className="imagess" src={ver} alt="" />
                    <img className="imagess" src={zara} alt="" />
                    <img className="imagess" src={gucci} alt="" />
                    <img className="imagess" src={prada} alt="" />
                    <img className="imagess" src={calvin} alt="" />
                </div>
            </div>
        </>
    );
};

export default Animate;
