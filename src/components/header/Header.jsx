import { Link, NavLink } from "react-router-dom";
import Baner from "../baner/Baner";
import logo from "../../../public/logo.svg";
import { RxHamburgerMenu } from "react-icons/rx";
import SelectComponent from "../select/Select";
import SearchInput from "../search/SearchInput";
import { LuShoppingCart } from "react-icons/lu";
import { LuUserCircle2 } from "react-icons/lu";
import { useState } from "react";
import { MdOutlineClose } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";

const Header = () => {
    const [data, setData] = useState(false);

    return (
        <>
            <Baner />
            <header className="py-6 overflow-hidden">
                <div className="container max-w-[1280px] flex items-center justify-between">
                    <div className="flex items-center">
                        <button
                            className="lg:hidden"
                            onClick={() => setData(!data)}>
                            {data ? (
                                <MdOutlineClose className="text-2xl mr-3" />
                            ) : (
                                <RxHamburgerMenu className="text-2xl mr-3" />
                            )}
                        </button>
                        <Link
                            className="mr-10 hover:opacity-80 active:opacity-65"
                            to={"/"}>
                            <img src={logo} alt="Logo icon" />
                        </Link>
                    </div>
                    <div className="flex items-center gap-6 xl:gap-x-14">
                        <div
                            onClick={() => setData(false)}
                            className={
                                data
                                    ? "bg-[#0005] w-screen h-screen fixed left-0 top-32 z-10"
                                    : "hidden"
                            }></div>
                        <ul
                            className={
                                data
                                    ? "absolute left-0 top-32 transition-[0.3s] pt-5 h-screen z-20 border-t border-black bg-white pl-7 pr-16 flex flex-col gap-y-6 sm:pl-12 lg:gap-6 lg:relative lg:flex-row lg:h-auto lg:border-none lg:top-0 lg:p-0 lg:items-center"
                                    : "absolute left-[-600px] top-32 transition-[0.3s] lg:gap-6 lg:relative lg:flex-row lg:h-auto lg:border-none lg:top-0 lg:p-0 lg:items-center lg:left-0 lg:flex"
                            }>
                            <li>
                                <SelectComponent />
                            </li>
                            <li className="text-lg lg:text-sm xl:text-base capitalize hover:opacity-80 active:bg-opacity-65">
                                <Link onClick={() => setData(false)} to={"/"}>
                                    On Sale
                                </Link>
                            </li>
                            <li className="text-lg lg:text-sm xl:text-base capitalize hover:opacity-80 active:bg-opacity-65">
                                <Link onClick={() => setData(false)} to={"/"}>
                                    New Arrivals
                                </Link>
                            </li>
                            <li className="text-lg lg:text-sm xl:text-base capitalize hover:opacity-80 active:bg-opacity-65">
                                <Link onClick={() => setData(false)} to={"/"}>
                                    Brands
                                </Link>
                            </li>
                        </ul>
                        <ul className="flex lg:gap-x-2">
                            <li>
                                <SearchInput />
                            </li>
                            <li className="group   p-1 flex items-center cursor-pointer">
                                <NavLink to="/cart">
                                    <LuShoppingCart className="text-2xl group-hover:opacity-80 group-active:opacity-65 transition-all ease-in duration-65" />
                                </NavLink>
                            </li>
                            <li className="group   p-1 flex items-center cursor-pointer">
                                <NavLink to="/wishlist">
                                    <FaRegHeart className="text-2xl group-hover:opacity-80 group-active:opacity-65 transition-all ease-in duration-65" />
                                </NavLink>
                            </li>
                            <li className="group p-1 pr-0 flex items-center cursor-pointer">
                                <NavLink to="/admin/create">
                                    <LuUserCircle2 className="text-2xl group-hover:opacity-80 group-active:opacity-65 transition-all ease-in duration-65" />
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Header;
