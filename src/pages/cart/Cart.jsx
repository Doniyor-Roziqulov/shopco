import Stay from "@/components/stay/Stay";
import React, { useEffect } from "react";

const Cart = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <>
            <div className="container max-w-[1280x]">
                <h2>Cart</h2>
            </div>
            <Stay />
        </>
    );
};

export default Cart;
