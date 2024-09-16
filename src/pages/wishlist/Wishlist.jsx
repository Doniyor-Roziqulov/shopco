import Empty from "@/components/empty/Empty";
import Stay from "@/components/stay/Stay";
import React, { useEffect } from "react";

const Wishlist = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <>
            <div>
                <Empty />
            </div>
            <Stay />
        </>
    );
};

export default Wishlist;
