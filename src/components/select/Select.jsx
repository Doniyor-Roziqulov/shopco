import React from "react";
import { Select } from "antd";

const SelectComponent = () => {
    const handleChange = (value) => {
        console.log(`selected ${value}`);
    };

    const { Option } = Select;
    return (
        <>
            <Select
                className="text-lg"
                bordered={false}
                defaultValue="Shop"
                style={{ width: 94 }}
                onChange={handleChange}>
                <Option value="tshirt">T-Shirt</Option>
                <Option value="shorts">Shorts</Option>
                <Option value="hoodies">Hoodies</Option>
            </Select>
        </>
    );
};

export default SelectComponent;
