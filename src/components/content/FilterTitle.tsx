"use client";

import { Select } from "@arco-design/web-react";

const FilterTitle = () => {
  return (
    <div className="flex items-start justify-between w-full mb-16">
      <div className="font-bold leading-27 text-18 text-101010">
        Product List
      </div>
      <div className="text-o16">
        <Select
          bordered={false}
          className="w-100 !text-o16"
          options={[{ value: "Select", label: "Select" }]}
          value="Select"
        />
      </div>
    </div>
  );
};
export default FilterTitle;
