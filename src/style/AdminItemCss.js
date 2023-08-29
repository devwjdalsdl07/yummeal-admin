import styled from "@emotion/styled";

export const ItemContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;
export const TotalInfoWrap = styled.div`
  border: 1px solid;
  height: 80px;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  .itemCount {
    margin: 10px 0;
    strong {
      color: skyblue;
      margin: 0 5px;
    }
  }
  .itemAdd {
    padding: 20px 30px;
    display: block;
    background: #3971ff;
    color: white;
    border-radius: 15px;
  }
`;

export const SearchFilterWrap = styled.div`
  .textFilter {
    display: flex;
    border: 1px solid;
    font-size: 20px;
    .itemName {
      display: flex;
      align-items: center;
      padding: 10px;
      width: 10%;
      border-right: 1px solid;
    }
    .textFiled {
      padding: 10px;
      width: 80%;
      input {
        width: 70%;
        font-size: 20px;
      }
    }
  }
  .selectFilter {
    display: flex;
    border: 1px solid;
    border-top: none;
    font-size: 20px;
    .saleName {
      padding: 10px;
      width: 10%;
      border-right: 1px solid;
    }
    .saleCheck {
      width: 25%;
      padding: 10px;
      border-right: 1px solid;
    }
    .allergyName {
      width: 10%;
      padding: 10px;
      border-right: 1px solid;
    }
    .allergySelect {
      padding: 10px;
    }
  }
  .cateFilter {
    display: flex;
    border: 1px solid;
    border-top: none;
    font-size: 20px;
    .cateName {
      width: 10%;
      padding: 10px;
      border-right: 1px solid;
    }
    .cateCheck {
      padding: 10px;
      width: 25%;
      border-right: 1px solid;
    }
    .subCateName {
      width: 10%;
      padding: 10px;
      border-right: 1px solid;
    }
    .subCateCheck {
      padding: 10px;
    }
  }
`;

export const ItemListWrap = styled.div`
  .itemListContainer {
    border: 1px solid;
    .itemListTop {
      display: flex;
      border-top: 1px solid;
      border-bottom: 1px solid;
      height: 50px;
      div {
        display: flex;
        align-items: center;
        height: 100%;
        border-right: 1px solid;
        justify-content: center;
      }
    }
    .itemListWrap {
        display: flex;
        height: 100px;
        div {
        display: flex;
        align-items: center;
        height: 100%;
        border-right: 1px solid;
        justify-content: center;
      }
    }
    .checkBox {
      width: 5%;
    }
    .itemNum {
      width: 5%;
    }
    .itemTitle {
      width: 10%;
    }
    .itemName {
      width: 40%;
    }
    .itemPrice {
      width: 10%;
    }
    .itemCate {
      width: 8%;
    }
    .itemSubCate {
      width: 20%;
      border-right: none !important;
    }
  }
`;
