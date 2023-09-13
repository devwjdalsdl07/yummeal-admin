import React from "react";
import { Iitem, TAllergy, TSubCate } from "../pages/AdminItem.js";
import { useNavigate } from "react-router-dom";
import { deleteItem } from "../api/adminItemAxios";

const ItemList = ({
  item,
  allergyArr,
  subCateArr,
  filter,
  setFilter,
}: {
  item: Iitem;
  allergyArr: Array<TAllergy>;
  subCateArr: Array<TSubCate>;
  filter: Array<Iitem>;
  setFilter: React.Dispatch<React.SetStateAction<Iitem[]>>;
}) => {
  const navigate = useNavigate();
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
    navigate("/admin/adminitemedit", { state: item.productId });
  };
  const handleDelClick = async () => {
    const result = await deleteItem(item.productId);
    if (result === 1) {
      setFilter(
        filter.filter(filter => {
          filter.productId !== item.productId;
          return (item.delYn = 1);
        }),
      );
    }
  };
  return (
    <div
      className="itemListWrap"
      style={
        item.delYn === 1
          ? { background: "rgba(249,146,146,0.5)" }
          : undefined || item.quantity <= 0
          ? { background: "rgba(247,205,122,0.4)" }
          : undefined
      }
    >
      <div className="itemNum">
        <span>{item.productId}</span>
      </div>
      <div className="itemName-item">
        <img
          src={`http://192.168.0.144:5001/img/product/${item.productId}/${item.thumbnail}`}
          alt="썸네일"
        />
        <span>{item.name}</span>
      </div>
      <div className="itemPrice">
        <span>
          {item.price
            .toString()
            .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}
        </span>
      </div>
      <div className="itemCate">
        <span>{item.cate} 단계</span>
      </div>
      <div className="itemSubCate">{filterSubCate}</div>
      <div className="itemAllergy">{filterAllergy}</div>
      <div className="itemButton">
        <span className="editButton" onClick={handleEditClick}>
          수정
        </span>
        <span className="delButton" onClick={handleDelClick}>
          삭제
        </span>
      </div>
    </div>
  );
};

export default ItemList;
