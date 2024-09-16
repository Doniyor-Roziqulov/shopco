import Stay from "@/components/stay/Stay";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";


const Cart = () => {
    const dispatch = useDispatch()
    const items = useSelector((state) => state.cart.value)

    const subtotal = items.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
    );
    const discount = subtotal * 0.2;
    const deliveryFee = 15;
    const total = subtotal - discount + deliveryFee;

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <>
            <div className="container max-w-[1280x]">
                <div className="flex flex-col md:flex-row gap-6 p-6">
                    <div className="flex-1">
                        <h1 className="text-2xl font-bold mb-6">Ваша корзина</h1>
                        {items.length === 0 ? (
                            <p>Корзина пуста</p>
                        ) : (
                            items.map((item, index) => (
                                <div
                                    key={index}
                                    className="flex items-center justify-between border-b pb-4 mb-4"
                                >
                                    <div className="flex items-center">
                                        <img
                                            src={item.url[0]}
                                            alt={item.name}
                                            className="w-20 h-20 object-cover rounded"
                                        />
                                        <div className="ml-4">
                                            <h3 className="text-lg font-semibold">{item.name}</h3>
                                            <p className="text-sm text-gray-600">Размер: {item.size}</p>
                                            <p className="text-sm text-gray-600">Цвет: {item.color}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center">
                                        <span className="text-lg font-semibold mr-4">
                                            ${item.price}
                                        </span>
                                        <div className="flex items-center">
                                            <button
                                                className="px-2 py-1 text-lg font-semibold bg-gray-200 rounded-l"
                                                onClick={() => dispatch(decreaseQuantity({ id: item.id }))}
                                            >
                                                -
                                            </button>
                                            <span className="px-4">{item.quantity}</span>
                                            <button
                                                className="px-2 py-1 text-lg font-semibold bg-gray-200 rounded-r"
                                                onClick={() => dispatch(addCart({ ...item, quantity: 1 }))}
                                            >
                                                +
                                            </button>
                                        </div>
                                        <button
                                            className="ml-4 text-red-500"
                                            onClick={() => dispatch(removeCart({ id: item.id }))}
                                        >
                                            🗑
                                        </button>
                                    </div>
                                </div>
                            ))
                        )}
                    </div>
                </div>
            </div>
            <Stay />
        </>
    );
};

export default Cart;
