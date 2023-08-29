import React from "react";
// import { Iitem } from "../pages/AdminItem";

const ItemList:React.FC = ({item}:any) => {
  return (
    <div className="itemListWrap">
      <div className="checkBox">
        <input type="checkBox" />
      </div>
      <div className="itemNum">
        <span>{item.number}</span>
      </div>
      <div className="itemTitle">
        <span>{item.title}</span>
      </div>
      <div className="itemName">
        <img src="" alt="" />
        <span>{item.name}</span>
      </div>
      <div className="itemPrice">
        <span>{item.price}</span>
      </div>
      <div className="itemCate">
        <span>{item.cate}</span>
      </div>
      <div className="itemSubCate">
        <span>{item.subCate}</span>
      </div>
    </div>
  );
};

export default ItemList;
