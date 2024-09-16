import Empty from "@/components/empty/Empty";
import Stay from "@/components/stay/Stay";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import cart from "@/images/empty_cart.png";
import { MdOutlineDeleteForever } from "react-icons/md";
import {
    removeCart,
    addCart,
    clearCart,
    decreaseQuantity,
} from "@/context/cart";

const Cart = () => {
    const dispatch = useDispatch();
    const items = useSelector((state) => state.cart.value);
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <>
            <div className="container max-w-[1280px] pt-10">
                <h1 className="text-2xl font-bold mb-6">YOUR CART</h1>
                <div className="border rounded-2xl pt-4">
                    {items.length === 0 ? (
                        <Empty text={"Shopping cart is empty"} url={cart} />
                    ) : (
                        items.map((item, index) => (
                            <div className="flex flex-col md:flex-row gap-6 p-6">
                                <div className="flex-1">
                                    <div
                                        key={index}
                                        className="flex items-end relative justify-between border-b pb-5">
                                        <div className="flex items-center">
                                            <img
                                                src={item.url[0]}
                                                alt={item.title}
                                                className="w-20 h-20 object-cover rounded"
                                            />
                                            <div className="ml-4">
                                                <h3 className="text-lg font-semibold">
                                                    {item.name}
                                                </h3>
                                                <p className="text-xl font-bold text-gray-600">
                                                    {item.title}
                                                </p>
                                                <p className="text-sm text-gray-600">
                                                    Color: {item.color}
                                                </p>
                                                <p className="text-xl font-semibold mr-4">
                                                    ${item.price}
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex">
                                            <button
                                                className="ml-4 absolute top-[-20px] right-0 text-red-500"
                                                onClick={() =>
                                                    dispatch(removeCart(item))
                                                }>
                                                <MdOutlineDeleteForever className="text-2xl" />
                                            </button>
                                            <div className="flex items-center bg-gray-200 rounded-2xl px-1">
                                                <button
                                                    className="px-2 py-1 text-lg font-semibold"
                                                    onClick={() =>
                                                        dispatch(
                                                            decreaseQuantity({
                                                                id: item.id,
                                                            })
                                                        )
                                                    }>
                                                    -
                                                </button>
                                                <span className="px-4">
                                                    {item.quantity}
                                                </span>
                                                <button
                                                    className="px-2 py-1 text-lg font-semibold"
                                                    onClick={() =>
                                                        dispatch(
                                                            addCart({
                                                                ...item,
                                                                quantity: 1,
                                                            })
                                                        )
                                                    }>
                                                    +
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </div>
            <Stay />
        </>
    );
};

export default Cart;
