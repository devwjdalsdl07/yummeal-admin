import { Pagination } from "antd";
import React from "react";

interface IPagingProps {
  pageNm: number;
  setPageNm: React.Dispatch<React.SetStateAction<number>>;
  totalItem?: number | string | undefined;
}

const Paging: React.FC<IPagingProps> = ({ pageNm, setPageNm, totalItem }) => {
  const changeValue = (page: number) => {
    setPageNm(page);
  };

  return (
    <Pagination
      defaultCurrent={1}
      current={pageNm}
      total={totalItem}
      pageSize={10}
      onChange={changeValue}
      showSizeChanger={false}
    />
  );
};

export default Paging;
