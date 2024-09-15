import Stay from "@/components/stay/Stay";
import React, { useEffect } from "react";

const Wishlist = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <>
            <div>
                <h2>Wishlist</h2>
            </div>
            <Stay />
        </>
    );
};

export default Wishlist;
