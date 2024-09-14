import React from "react";
import logo from "../../../public/logo.svg";
import { FaTwitter, FaGithub, FaFacebookF, FaInstagram } from "react-icons/fa";
import visa from "@/assets/visa.svg";
import card from "@/assets/card.svg";
import pay from "@/assets/pay.svg";
import apple from "@/assets/apple.svg";
import gog from "@/assets/gog.svg";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <>
            <div className="bg-[rgb(240,240,240)] pt-[140px] pb-[80px]">
                <div className="container max-w-[1280px] flex flex-col">
                    <div className="flex items-center flex-wrap gap-y-7 lg:gap-x-10 xl:gap-[113px]">
                        <div className="flex flex-col  lg:w-[21%] gap-[25px]">
                            <Link to={"/"}>
                                <img src={logo} alt="" />
                            </Link>
                            <div className="">
                                <p className="leading-[22px] text-[rgb(96,96,96)]">
                                    We have clothes that suits your style and
                                    which you’re proud to wear. From women to
                                    men.
                                </p>
                            </div>
                            <div className="flex items-center gap-[12px] mt-[10px]">
                                <Link className="w-[28px] h-[28px] hover:text-white hover:bg-black transition-all  bg-white rounded-[50%] border border-[#CCCCCC] flex justify-center items-center">
                                    <FaTwitter />
                                </Link>
                                <Link className="w-[28px] h-[28px] hover:text-white hover:bg-black transition-all  bg-white rounded-[50%] border border-[#CCCCCC] flex justify-center items-center">
                                    <FaFacebookF />
                                </Link>
                                <Link className="w-[28px] h-[28px] hover:text-white hover:bg-black transition-all  bg-white rounded-[50%] border border-[#CCCCCC] flex justify-center items-center">
                                    <FaInstagram />
                                </Link>
                                <Link className="w-[28px] h-[28px] hover:text-white hover:bg-black transition-all bg-white  rounded-[50%] border border-[#CCCCCC] flex justify-center items-center">
                                    <FaGithub />
                                </Link>
                            </div>
                        </div>
                        <div className="flex gap-x-4 gap-y-8 min-[800px]:justify-between w-full lg:gap-x-20 lg:w-auto lg:justify-between xl:gap-x-[113px] flex-wrap">
                            <div className="flex flex-col gap-[25px]">
                                <p className="font-medium text-[16px]">
                                    COMPANY
                                </p>
                                <ul className="flex flex-col gap-[20px] text-[rgb(96,96,96)]">
                                    <li className="">
                                        <Link>About</Link>
                                    </li>
                                    <li className="">
                                        <Link>Features</Link>
                                    </li>
                                    <li className="">
                                        <Link>Works</Link>
                                    </li>
                                    <li className="">
                                        <Link>Career</Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="flex flex-col gap-[25px]">
                                <p className="font-medium text-[16px]">HELP</p>
                                <ul className="flex flex-col gap-[20px] text-[rgb(96,96,96)]">
                                    <li>
                                        <Link>Customer Support</Link>
                                    </li>
                                    <li>
                                        <Link>Delivery Details</Link>
                                    </li>
                                    <li>
                                        <Link>Terms & Conditions</Link>
                                    </li>
                                    <li>
                                        <Link>Privacy Policy</Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="flex flex-col gap-[25px]">
                                <p className="font-medium text-[16px]">FAQ</p>
                                <ul className="flex flex-col gap-[20px] text-[rgb(96,96,96)]">
                                    <li>
                                        <Link>Account</Link>
                                    </li>
                                    <li>
                                        <Link>Manage Deliveries</Link>
                                    </li>
                                    <li>
                                        <Link>Orders</Link>
                                    </li>
                                    <li>
                                        <Link>Payments</Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="flex flex-col gap-[25px]">
                                <p className="font-medium text-[16px]">
                                    RESOURCES
                                </p>
                                <ul className="flex flex-col gap-[20px] text-[rgb(96,96,96)]">
                                    <li>
                                        <Link>Free eBooks</Link>
                                    </li>
                                    <li>
                                        <Link>Development Tutorial</Link>
                                    </li>
                                    <li>
                                        <Link>How to - Blog</Link>
                                    </li>
                                    <li>
                                        <Link>Youtube Playlist</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="mt-[50px] flex flex-col gap-[20px]">
                        <div className="bg-[rgb(96,96,96)] h-[1px]"></div>
                        <div className="flex items-center flex-wrap gap-y-4 justify-between">
                            <div className="flex">
                                <p className="text-[14px] text-[rgb(96,96,96)] ">
                                    Shop.co © 2000-2023, All Rights Reserved
                                </p>
                            </div>
                            <div className="flex gap-[12px]">
                                <Link className="w-[46px] h-[30px] rounded-[5px] bg-white flex items-center justify-center">
                                    <img src={visa} alt="" />
                                </Link>

                                <Link className="w-[46px] h-[30px] rounded-[5px] bg-white flex items-center justify-center">
                                    <img src={card} alt="" />
                                </Link>

                                <Link className="w-[46px] h-[30px] rounded-[5px] bg-white flex items-center justify-center">
                                    <img src={pay} alt="" />
                                </Link>

                                <Link className="w-[46px] h-[30px] rounded-[5px] bg-white flex items-center justify-center">
                                    <img src={apple} alt="" />
                                </Link>

                                <Link className="w-[46px] h-[30px] rounded-[5px] bg-white flex items-center justify-center">
                                    <img src={gog} alt="" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Footer;
