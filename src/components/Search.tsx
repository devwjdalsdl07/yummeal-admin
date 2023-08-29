import { Select } from "antd";
import React from "react";

const handleChange = (value: string) => {
  console.log(`selected ${value}`);
};
const Search: React.FC = () => (
  <Select
    defaultValue="선택"
    style={{ width: 130 }}
    onChange={handleChange}
    options={[
      { value: "selectId", label: "아이디" },
      { value: "selectNumber", label: "주문번호" },
      { value: "selectProductNumber", label: "상품주문번호" },
    ]}
  />
);

export default Search;
