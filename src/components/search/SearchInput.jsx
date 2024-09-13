import React from "react";
import { Input } from "antd";
import { FaSearch } from "react-icons/fa";

const SearchInput = () => {
    return (
        <div>
            <Input
                className="sm:bg-gray-light w-11 sm:w-56 md:w-80 xl:w-[500px] p-[12px] rounded-[62px]"
                placeholder="Search for products..."
                bordered={false}
                prefix={
                    <FaSearch className="lg:mr-2 sm:text-gray-400 text-xl" />
                }
            />
        </div>
    );
};

export default SearchInput;
