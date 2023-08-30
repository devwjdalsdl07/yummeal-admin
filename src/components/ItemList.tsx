import React from "react";
import { Iitem } from "../pages/AdminItem";

const ItemList = ({ item }: { item: Iitem }) => {
  return (
    <div className="itemListWrap">
      <div className="checkBox">
        <input type="checkBox" />
      </div>
      <div className="itemNum">
        <span>{item.id}</span>
      </div>
      <div className="itemName-item">
        <img src={item.thumnail} alt="썸네일" />
        <span>{item.name}</span>
      </div>
      <div className="itemPrice">
        <span>{item.price}</span>
      </div>
      <div className="itemCate">
        <span>{item.cate} 단계</span>
      </div>
      <div className="itemSubCate">
        <span>{item.subCate}</span>
      </div>
    </div>
  );
};

export default ItemList;
