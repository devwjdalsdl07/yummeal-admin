import React from "react";
import {
  ItemContainer,
  ItemListWrap,
  SerchFilterWrap,
  TotalInfoWrap,
} from "../style/AdminItemCss";

const AdminItem: React.FC = () => {
  return (
    <ItemContainer>
      <h1>상품 목록</h1>
      <TotalInfoWrap>
        <span className="itemCount">
          전체 <strong>{}</strong>개
        </span>
        <span className="itemCount">
          판매중 <strong>{}</strong>개
        </span>
        <span className="itemCount">
          판매안함 <strong>{}</strong>개
        </span>
        <span className="itemAdd">상품추가</span>
      </TotalInfoWrap>
      <SerchFilterWrap>
        <div>상품명</div>
        <div>
          <div>판매상태</div>
          <div>단계</div>
        </div>
      </SerchFilterWrap>
      <ItemListWrap></ItemListWrap>
    </ItemContainer>
  );
};

export default AdminItem;
