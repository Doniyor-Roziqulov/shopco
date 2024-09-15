import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import logo from "../../../public/logowhite.svg";

const Admin = () => {
    return (
        <section>
            <div className="flex admin-box">
                <div className="w-80 min-h-screen bg-black pt-9 pr-2 lg:pr-6">
                    <Link className="ml-6 block" to={"/"}>
                        <img src={logo} alt="" />
                    </Link>
                    <ul className="flex flex-col gap-y-2 pl-2 lg:pl-4 mt-8 w-full">
                        <li className="w-full">
                            <NavLink
                                className="text-white text-[10px] lg:text-base block py-2 w-full border rounded-xl hover:bg-neutral-300 hover:text-black transition-all px-2 lg:px-6"
                                to={"/admin/create"}>
                                Create Products
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                className="text-white text-[10px] lg:text-base block py-2 border rounded-xl hover:bg-neutral-300 hover:text-black transition-all px-2 lg:px-6"
                                to={"/admin/delete"}>
                                Delete Product
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                className="text-white text-[10px] lg:text-base block py-2 border rounded-xl hover:bg-neutral-300 hover:text-black transition-all px-2 lg:px-6"
                                to={"/admin/update"}>
                                Update Products
                            </NavLink>
                        </li>
                    </ul>
                </div>
                <div className="flex-1 p-5">
                    <Outlet />
                </div>
            </div>
        </section>
    );
};

export default Admin;
