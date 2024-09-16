import Empty from "@/components/empty/Empty";
import Product from "@/components/product/Product";
import Stay from "@/components/stay/Stay";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";

const Wishlist = () => {
    const wishlist = useSelector((state) => state.wishlist?.value);
    console.log(wishlist.length);
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <>
            <div></div>
            <div>
                <div>
                    {wishlist.length > 0 ? (
                        <Product data={wishlist} header={"Your Wishlist"} />
                    ) : (
                        <Empty />
                    )}
                </div>
            </div>
            <Stay />
        </>
    );
};

export default Wishlist;
