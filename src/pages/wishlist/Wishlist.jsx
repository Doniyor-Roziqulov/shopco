import Empty from "@/components/empty/Empty";
import Product from "@/components/product/Product";
import Stay from "@/components/stay/Stay";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import wishlistimg from "@/images/empty_wishlist.png";

const Wishlist = () => {
    const wishlist = useSelector((state) => state.wishlist?.value);
    console.log(wishlist.length);
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <>
            <div className="max-w-[1280px] container pt-10">
                <h1 className="text-2xl font-bold mb-6">YOUR WISHLIST</h1>
                <div>
                    {wishlist.length > 0 ? (
                        <Product data={wishlist} header={"Your Wishlist"} />
                    ) : (
                        <Empty text={"Favorites are empty"} url={wishlistimg} />
                    )}
                </div>
            </div>
            <Stay />
        </>
    );
};

export default Wishlist;
