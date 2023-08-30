import React, { useEffect, useState } from "react";
import {
  ItemContainer,
  ItemListWrap,
  SearchFilterWrap,
  TotalInfoWrap,
} from "../style/AdminItemCss";
import ItemList from "../components/ItemList";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import { useNavigate } from "react-router";
import { getItem } from "../api/adminItemAxios";

export interface Iitem {
  id: number;
  thumnail: string;
  name: string;
  price: number;
  cate: number;
  subCate: Array<number>;
}

type TAllergy = {
  value: number;
  label: string;
};

const AdminItem = () => {
  const navigate = useNavigate();
  const allergyArr: Array<TAllergy> = [
    { value: 1, label: "난류" },
    { value: 2, label: "우유" },
    { value: 3, label: "메밀" },
    { value: 4, label: "땅콩" },
    { value: 5, label: "대두" },
    { value: 6, label: "밀" },
    { value: 7, label: "잣" },
    { value: 8, label: "호두" },
    { value: 9, label: "게" },
    { value: 10, label: "새우" },
    { value: 11, label: "오징어" },
    { value: 12, label: "고등어" },
    { value: 13, label: "조개류" },
    { value: 14, label: "복숭아" },
    { value: 15, label: "토마토" },
    { value: 16, label: "닭고기" },
    { value: 17, label: "돼지고기" },
    { value: 18, label: "소고기" },
    { value: 19, label: "아황산류" },
    { value: 20, label: "생선류" },
  ];
  const [selectAllergy, setSelectAllergy] = useState<Array<TAllergy>>([]);
  const animatedComponents = makeAnimated();
  const [itemList, setItemList] = useState<Array<Iitem>>([
    {
      id: 1,
      thumnail: "title",
      name: "name",
      price: 1000,
      cate: 1,
      subCate: [1, 3, 5],
    },
    {
      id: 1,
      thumnail: "title",
      name: "name",
      price: 1000,
      cate: 1,
      subCate: [1, 3, 5],
    },
  ]);

  const fetchItem = async () => {
    const result = await getItem();
    console.log(result);
    return result;
  };
  const handleAllergy = (allergyArr: any) => {
    setSelectAllergy(allergyArr);
  };
  const handleAddClick = () => {
    navigate("/adminadd");
  };

  // useEffect(() => setItemList(fetchItem()), []);

  const items: Array<JSX.Element> = itemList.map((item, idx) => {
    return <ItemList key={idx} item={item} />;
  });
  return (
    <div style={{background:"rgb(242,243,247)",height:"100vh"}}>
    <ItemContainer>
      <h1>상품 목록</h1>
      <TotalInfoWrap>
        <span className="itemCount">
          전체 상품<strong>{itemList.length}</strong>개
        </span>
        <span className="itemCount">
          재고보유 상품 <strong>{}</strong>개
        </span>
        <span className="itemCount">
          재고없는 상품 <strong>{}</strong>개
        </span>
        <span className="itemAdd" onClick={handleAddClick}>
          상품추가
        </span>
      </TotalInfoWrap>
      <SearchFilterWrap>
        <div>
          <h2>검색 필터</h2>
        </div>
        <div className="searchContainer">
          <div className="textFilter bg-white">
            <div className="itemName bg-grey">
              <span>상품 이름</span>
            </div>
            <div className="textFiled">
              <input type="text" placeholder="검색어 입력 해주세요." />
            </div>
          </div>
          <div className="selectFilter bg-white">
            <div className="saleName bg-grey">
              <span>재고 상태</span>
            </div>
            <div className="saleCheck">
              <form>
                <input type="radio" name="sale" />
                재고보유 중
                <input type="radio" name="sale" />
                재고 없음
                <input type="radio" name="sale" />
                전체
              </form>
            </div>
            <div className="allergyName bg-grey">
              <span>알러지</span>
            </div>
            <div className="allergySelect">
              <Select
                className="allergy"
                closeMenuOnSelect={false}
                components={animatedComponents}
                onChange={allergyArr => {
                  handleAllergy(allergyArr);
                }}
                value={selectAllergy}
                isMulti
                options={allergyArr}
                placeholder="알러지를 선택하면 제외한 결과가 나타납니다"
                isSearchable={false}
              />
            </div>
          </div>
          <div className="cateFilter bg-white">
            <div className="cateName bg-grey">
              <span>단계</span>
            </div>
            <div className="cateCheck">
              <form>
                <input type="checkBox" /> 1단계
                <input type="checkBox" /> 2단계
                <input type="checkBox" /> 3단계
                <input type="checkBox" /> 4단계
              </form>
            </div>
            <div className="subCateName bg-grey">
              <span>카테고리</span>
            </div>
            <div className="subCateCheck">
              <form>
                <input type="checkBox" /> 곡물류
                <input type="checkBox" /> 야채류
                <input type="checkBox" /> 고기류
                <input type="checkBox" /> 해산물류
                <input type="checkBox" /> 과일류
              </form>
            </div>
          </div>
        </div>
      </SearchFilterWrap>
      <ItemListWrap>
        <h2>상품 리스트</h2>
        <div className="itemListContainer">
          <div>
            검색된 상품 <strong>{itemList.length}</strong> 개
          </div>
          <div className="itemListTop bg-grey">
            <div className="checkBox">
              <input type="checkBox" />
            </div>
            <div className="itemNum">
              <span>No</span>
            </div>
            <div className="itemName">
              <span>상품명</span>
            </div>
            <div className="itemPrice">
              <span>가격</span>
            </div>
            <div className="itemCate">
              <span>단계</span>
            </div>
            <div className="itemSubCate">
              <span>카테고리</span>
            </div>
          </div>
          <div
            className="itemList"
            style={{
              overflowY: "auto",
            }}
          >
            {items}
          </div>
        </div>
      </ItemListWrap>
    </ItemContainer>
    </div>
  );
};

export default AdminItem;
