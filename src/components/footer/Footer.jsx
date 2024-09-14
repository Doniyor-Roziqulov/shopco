import React from "react";
import logo from "../../../public/logo.svg";
import { FaTwitter, FaGithub, FaFacebookF, FaInstagram } from "react-icons/fa";
import visa from "@/assets/visa.svg";
import card from "@/assets/card.svg";
import pay from "@/assets/pay.svg";
import apple from "@/assets/apple.svg";
import gog from "@/assets/gog.svg";

const Footer = () => {
    return (
        <>
            <div className="bg-[rgb(240,240,240)] pt-[140px] pb-[80px]">
                <div className="container max-w-[1280px] flex flex-col">
                    <div className="flex items-center gap-[113px]">
                        <div className="flex flex-col w-[21%] gap-[25px]">
                            <div className="">
                                <img src={logo} alt="" />
                            </div>
                            <div className="">
                                <p className="leading-[22px] text-[rgb(96,96,96)]">
                                    We have clothes that suits your style and
                                    which you’re proud to wear. From women to
                                    men.
                                </p>
                            </div>
                            <div className="flex items-center gap-[12px] mt-[10px]">
                                <div className="w-[28px] h-[28px] rounded-[50%] border border-[#CCCCCC] flex justify-center items-center">
                                    <FaTwitter />
                                </div>
                                <div className="w-[28px] h-[28px] rounded-[50%] border border-[#CCCCCC] flex justify-center items-center">
                                    <FaFacebookF />
                                </div>
                                <div className="w-[28px] h-[28px] rounded-[50%] border border-[#CCCCCC] flex justify-center items-center">
                                    <FaInstagram />
                                </div>
                                <div className="w-[28px] h-[28px] rounded-[50%] border border-[#CCCCCC] flex justify-center items-center">
                                    <FaGithub />
                                </div>
                            </div>
                        </div>
                        <div className="flex gap-[113px]">
                            <div className="flex flex-col gap-[25px]">
                                <p className="font-medium text-[16px]">
                                    COMPANY
                                </p>
                                <ul className="flex flex-col gap-[20px] text-[rgb(96,96,96)]">
                                    <li className="">About</li>
                                    <li className="">Features</li>
                                    <li className="">Works</li>
                                    <li className="">Career</li>
                                </ul>
                            </div>
                            <div className="flex flex-col gap-[25px]">
                                <p className="font-medium text-[16px]">HELP</p>
                                <ul className="flex flex-col gap-[20px] text-[rgb(96,96,96)]">
                                    <li>Customer Support</li>
                                    <li>Delivery Details</li>
                                    <li>Terms & Conditions</li>
                                    <li>Privacy Policy</li>
                                </ul>
                            </div>
                            <div className="flex flex-col gap-[25px]">
                                <p className="font-medium text-[16px]">FAQ</p>
                                <ul className="flex flex-col gap-[20px] text-[rgb(96,96,96)]">
                                    <li>Account</li>
                                    <li>Manage Deliveries</li>
                                    <li>Orders</li>
                                    <li>Payments</li>
                                </ul>
                            </div>
                            <div className="flex flex-col gap-[25px]">
                                <p className="font-medium text-[16px]">
                                    RESOURCES
                                </p>
                                <ul className="flex flex-col gap-[20px]">
                                    <li>Free eBooks</li>
                                    <li>Development Tutorial</li>
                                    <li>How to - Blog</li>
                                    <li>Youtube Playlist</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="mt-[50px] flex flex-col gap-[20px]">
                        <div className="bg-[rgb(96,96,96)] h-[1px]"></div>
                        <div className="flex items-center justify-between">
                            <div className="flex">
                                <p className="text-[14px] text-[rgb(96,96,96)] ">
                                    Shop.co © 2000-2023, All Rights Reserved
                                </p>
                            </div>
                            <div className="flex gap-[12px]">
                                <div className="w-[46px] h-[30px] rounded-[5px] bg-white flex items-center justify-center">
                                    <img src={visa} alt="" />
                                </div>
                                <div className="w-[46px] h-[30px] rounded-[5px] bg-white flex items-center justify-center">
                                    <img src={card} alt="" />
                                </div>
                                <div className="w-[46px] h-[30px] rounded-[5px] bg-white flex items-center justify-center">
                                    <img src={pay} alt="" />
                                </div>
                                <div className="w-[46px] h-[30px] rounded-[5px] bg-white flex items-center justify-center">
                                    <img src={apple} alt="" />
                                </div>
                                <div className="w-[46px] h-[30px] rounded-[5px] bg-white flex items-center justify-center">
                                    <img src={gog} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Footer;
