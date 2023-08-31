import styled from "@emotion/styled";

export const ItemContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  .bg-white {
    background: white;
  }
  .bg-grey {
    background: rgb(234, 234, 235);
  }
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
    cursor: pointer;
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
      cursor: pointer;
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
      width: 40%;
      padding: 10px;
      .allergy {
        width: 100%;
      }
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
      height: 60px;
      border-bottom: 1px solid;
      background: #fff;
      div {
        display: flex;
        align-items: center;
        height: 100%;
        border-right: 1px solid;
        justify-content: center;
      }
    }
    .itemNum {
      width: 5%;
    }
    .itemName {
      width: 50%;
    }
    .itemName-item {
      display: flex;
      width: 50%;
      justify-content: flex-start !important;
      gap: 10px;
      img {
        width: 60px;
        height: 60px;
        margin-left: 10px;
      }
    }
    .itemPrice {
      width: 10%;
    }
    .itemCate {
      width: 8%;
    }
    .itemSubCate {
      width: 20%;
      gap: 10px;
      flex-wrap: wrap;
    }
    .itemList {
      height: 400px;
    }
    .itemButton {
      width: 10%;
      border-right: none !important;
      gap: 5px;
      span {
        padding: 5px 10px;
        border: 1px solid;
        cursor: pointer;
        border-radius: 10px;
      }
      .delButton {
        background-color: red;
        color: white;
      }
      .editButton {
        background-color: green;
        color: white;
      }
    }
  }
`;
