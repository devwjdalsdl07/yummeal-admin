import React from "react";
import { Iitem, TAllergy } from "../pages/AdminItem";

const ItemList = ({
  item,
  allergyArr,
}: {
  item: Iitem;
  allergyArr: Array<TAllergy>;
}) => {
  const allegy:Array<TAllergy|undefined> = item.allergy.map(cate => {
    return allergyArr.find(allergy => allergy.value === cate);
  });
  const filterAllegy:Array<JSX.Element> = allegy.map((item,idx) => {
    return <span key={idx}>{item?.label}</span>
  })
  return (
    <div className="itemListWrap">
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
        {filterAllegy}
      </div>
      <div className="itemButton">
        <span className="editButton">수정</span>
        <span className="delButton">삭제</span>
      </div>
    </div>
  );
};

export default ItemList;
