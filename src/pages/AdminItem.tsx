import React, { useState } from "react";
import {
  ItemContainer,
  ItemListWrap,
  SearchFilterWrap,
  TotalInfoWrap,
} from "../style/AdminItemCss";
import ItemList from "../components/ItemList";


const AdminItem: React.FC = () => {
  const [itemList, setItemList] = useState([
    {
      number: 1,
      title: "title",
      name: "name",
      price: 1000,
      cate: 1,
      subCate: [1, 3, 5],
    },
  ]);
  
  return (
    <ItemContainer>
      <h1>상품 목록</h1>
      <TotalInfoWrap>
        <span className="itemCount">
          전체 <strong>{itemList.length}</strong>개
        </span>
        <span className="itemCount">
          판매중 <strong>{}</strong>개
        </span>
        <span className="itemCount">
          판매안함 <strong>{}</strong>개
        </span>
        <span className="itemAdd">상품추가</span>
      </TotalInfoWrap>
      <SearchFilterWrap>
        <div>
          <h2>검색 필터</h2>
        </div>
        <div className="searchContainer">
          <div className="textFilter">
            <div className="itemName">
              <span>상품 이름</span>
            </div>
            <div className="textFiled">
              <input type="text" placeholder="검색어 입력 해주세요." />
            </div>
          </div>
          <div className="selectFilter">
            <div className="saleName">
              <span>판매 상태</span>
            </div>
            <div className="saleCheck">
              <input type="radio" name="sale" />
              판매 중
              <input type="radio" name="sale" />
              판매 안함
            </div>
            <div className="allergyName">
              <span>알러지</span>
            </div>
            <div className="allergySelect">
              <span>셀렉트 박스</span>
            </div>
          </div>
          <div className="cateFilter">
            <div className="cateName">
              <span>단계</span>
            </div>
            <div className="cateCheck">
              <input type="checkBox" /> 1단계
              <input type="checkBox" /> 2단계
              <input type="checkBox" /> 3단계
              <input type="checkBox" /> 4단계
            </div>
            <div className="subCateName">
              <span>카테고리</span>
            </div>
            <div className="subCateCheck">
              <input type="checkBox" /> 곡물류
              <input type="checkBox" /> 야채류
              <input type="checkBox" /> 고기류
              <input type="checkBox" /> 해산물류
              <input type="checkBox" /> 과일류
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
          <div className="itemListTop">
            <div className="checkBox">
              <input type="checkBox" />
            </div>
            <div className="itemNum">
              <span>No</span>
            </div>
            <div className="itemTitle">
              <span>타이틀</span>
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
          <div className="itemList">
          
          </div>
        </div>
      </ItemListWrap>
    </ItemContainer>
  );
};

export default AdminItem;
