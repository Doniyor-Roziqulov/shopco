import React from "react";
import { Input } from "antd";
import { FaSearch } from "react-icons/fa";

const SearchInput = () => {
  return (
    <div>
      <Input
        className="bg-gray-light"
        placeholder="Search for products..."
        bordered={false}
        prefix={<FaSearch className="mr-2 text-gray-400 text-xl" />}
        style={{ width: "500px", padding: "12px", borderRadius: "62px" }}
      />
    </div>
  );
};

export default SearchInput;
