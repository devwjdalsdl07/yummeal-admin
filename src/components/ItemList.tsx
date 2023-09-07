import React from "react";
import { Iitem, TAllergy, TSubCate } from "../pages/AdminItem.js";
import { useNavigate } from "react-router-dom";

const ItemList = ({
  item,
  allergyArr,
  subCateArr,
}: {
  item: Iitem;
  allergyArr: Array<TAllergy>;
  subCateArr: Array<TSubCate>;
}) => {
  console.log(item)
  const navigate = useNavigate()
  const allergy: Array<TAllergy | undefined> = item.allegyName?.map(item => {
    return allergyArr.find(allergy => allergy.value === item);
  });
  const subCate: Array<TSubCate | undefined> = item.cateDetail?.map(item => {
    return subCateArr.find(subCate => subCate.value === item);
  });
  const filterAllergy: Array<JSX.Element> = allergy?.map((item, idx) => {
    return <span key={idx}>{item?.label}</span>;
  });
  const filterSubCate: Array<JSX.Element> = subCate?.map((item, idx) => {
    return <span key={idx}>{item?.label}</span>;
  });
  const handleEditClick = () => {
    navigate('/adminitemedit',{state:item.productId})
  }
  const handleDelClick = () => {
    console.log("hi")
  }
  return (
    <div className="itemListWrap">
      <div className="itemNum">
        <span>{item.productId}</span>
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
      <div className="itemSubCate">{filterSubCate}</div>
      <div className="itemAllergy">{filterAllergy}</div>
      <div className="itemButton">
        <span className="editButton" onClick={handleEditClick}>수정</span>
        <span className="delButton" onClick={handleDelClick}>삭제</span>
      </div>
    </div>
  );
};

export default ItemList;
