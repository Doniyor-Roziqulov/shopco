import { useCreateProductMutation } from "@/context/api/product-api";
import React from "react";

const CreateProduct = () => {
    const [createProduct, { isLoading }] = useCreateProductMutation();
    const handleCreateProduct = (e) => {
        e.preventDefault();
        let formData = new FormData(e.target);
        let data = Object.fromEntries(formData.entries());
        data.url = data.url.split("\n").filter((i) => i);
        data.price = +data.price;
        data.oldPrice = +data.oldPrice;
        data.rating = +data.rating;
        createProduct(data);
    };
    return (
        <div>
            <h2 className="text-3xl mb-8 font-bold">CreateProduct</h2>
            <form
                className="flex flex-col max-w-sm gap-y-5"
                onSubmit={handleCreateProduct}
                action="">
                <input
                    required
                    className="border border-black py-2 rounded-xl pl-2 bg-neutral-100"
                    type="text"
                    name="title"
                    placeholder="Enter title..."
                />
                <input
                    required
                    className="border border-black py-2 rounded-xl pl-2 bg-neutral-100"
                    type="number"
                    name="price"
                    placeholder="Enter price..."
                />
                <input
                    required
                    className="border border-black py-2 rounded-xl pl-2 bg-neutral-100"
                    type="number"
                    name="oldPrice"
                    placeholder="Enter oldprice..."
                />
                <input
                    required
                    className="border border-black py-2 rounded-xl pl-2 bg-neutral-100"
                    type="text"
                    name="desc"
                    placeholder="Enter desc..."
                />
                <input
                    required
                    className="border border-black py-2 rounded-xl pl-2 bg-neutral-100"
                    type="number"
                    name="rating"
                    placeholder="Enter rating..."
                />
                <select
                    required
                    className="border border-black py-2 rounded-xl pl-2 bg-neutral-100"
                    name="category"
                    id="">
                    <option value="">Category</option>
                    <option value="men's clothing">men's clothing</option>
                    <option value="women's clothing">women's clothing</option>
                    <option value="girls clothes">girls clothes</option>
                    <option value="children's clothing">
                        children's clothing
                    </option>
                    <option value="laptops">laptops</option>
                    <option value="phones">phones</option>
                </select>
                <select
                    required
                    className="border border-black py-2 rounded-xl pl-2 bg-neutral-100"
                    name="color"
                    id="">
                    <option value="">Color</option>
                    <option value="white">white</option>
                    <option value="black">black</option>
                    <option value="red">red</option>
                </select>
                <textarea
                    required
                    className="border border-black py-2 rounded-xl pl-2 bg-neutral-100"
                    name="url"
                    placeholder="Enter img url..."
                    id=""></textarea>
                <button className="border py-2 rounded-xl bg-black text-white transition-all hover:bg-white hover:border-black hover:text-black">
                    {isLoading ? "loading..." : "Create"}
                </button>
            </form>
        </div>
    );
};

export default CreateProduct;
