import React from "react";
import { useEffect, useState } from "react";
import Checkbox from "../components/Checkbox";
import Search from "../components/Search";

import { DatePicker } from "antd";
import { StyledInput, StyledLabel, StyledP } from "../style/DeliveryCss";
import { ProductInfo } from "../style/ProductInfoCss";

const { RangePicker } = DatePicker;
export interface IDataType {
  objNumber: string;
  objOrder: string;
  objId: string;
  objName: string;
  ea: number;
  totalPrice: string;
  discountPrice: string;
  price: string;
}

const Delivery = () => {
  const obj: Array<IDataType> = [
    {
      objNumber: "20230824-123456789",
      objOrder: "2023-08-24",
      objId: "tt@tt.com",
      objName: "[1단계] 한우 죽",
      ea: 5,
      totalPrice: "54000원",
      discountPrice: "4000원",
      price: "50000원",
    },
    {
      objNumber: "20230824-123456789",
      objOrder: "2023-08-24",
      objId: "tt@tt.com",
      objName: "[2단계] 한우 죽",
      ea: 5,
      totalPrice: "54000원",
      discountPrice: "4000원",
      price: "50000원",
    },
    {
      objNumber: "20230824-123456789",
      objOrder: "2023-08-24",
      objId: "tt@tt.com",
      objName: "[1단계] 한우 죽",
      ea: 5,
      totalPrice: "54000원",
      discountPrice: "4000원",
      price: "50000원",
    },
    {
      objNumber: "20230824-123456789",
      objOrder: "2023-08-24",
      objId: "tt@tt.com",
      objName: "[3단계] 한우 죽",
      ea: 5,
      totalPrice: "54000원",
      discountPrice: "4000원",
      price: "50000원",
    },
    {
      objNumber: "20230824-123456789",
      objOrder: "2023-08-24",
      objId: "tt@tt.com",
      objName: "[1단계] 한우 죽",
      ea: 5,
      totalPrice: "54000원",
      discountPrice: "4000원",
      price: "50000원",
    },
    {
      objNumber: "20230824-123456789",
      objOrder: "2023-08-24",
      objId: "tt@tt.com",
      objName: "[4단계] 한우 죽",
      ea: 5,
      totalPrice: "54000원",
      discountPrice: "4000원",
      price: "50000원",
    },
    {
      objNumber: "20230824-123456789",
      objOrder: "2023-08-24",
      objId: "tt@tt.com",
      objName: "[1단계] 한우 죽",
      ea: 5,
      totalPrice: "54000원",
      discountPrice: "4000원",
      price: "50000원",
    },
  ];

  const [cities, setCities] = useState<Array<IDataType>>([]);

  useEffect(() => {
    setCities(obj);
  }, []);

  const lists: Array<JSX.Element> = cities.map((item, index) => {
    return (
      <Checkbox
        key={index}
        objNumber={item.objNumber}
        objOrder={item.objOrder}
        objId={item.objId}
        objName={item.objName}
        ea={item.ea}
        totalPrice={item.totalPrice}
        discountPrice={item.discountPrice}
        price={item.price}
      />
    );
  });
  const text = "";

  const handleSelect = (selectedItem: string) => {
    console.log("Selected Item:", selectedItem);
  };
  const handleAllCheck = (isChecked: boolean) => {
    const updatedCities = cities.map(city => ({
      ...city,
      isSelected: isChecked,
    }));
    setCities(updatedCities);
  };

  return (
    <div className="contents-warp">
      <ProductInfo>
        <Search />
        <RangePicker />

        <div className="box-layout">
          <span>검색걸과 총 {}건 </span>
          <span>검색걸과 총 {}건 </span>
          <span>검색걸과 총 {}건 </span>
        </div>
        <ul className="title">
          <li>
            <StyledLabel htmlFor={text}>
              <StyledInput
                type="checkbox"
                id={text}
                name={text}
                onChange={e => handleAllCheck(e.target.checked)}
              />
              <StyledP>{text}</StyledP>
            </StyledLabel>
          </li>
          <li>주문번호</li>
          <li>주문일시</li>
          <li>아이디</li>
          <li>주문상품</li>
          <li>수량</li>
          <li>총상품금액</li>
          <li>총할인금액</li>
          <li>총주문금액</li>
        </ul>

        {lists}
      </ProductInfo>
    </div>
  );
};

export default Delivery;
