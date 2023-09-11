import styled from "@emotion/styled";

export const OrderStatusWrap = styled.div`
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  font-size: 15px;
  padding: 20px 30px;
  .search-wrap {
    display: flex;
    gap: 50px;
    padding-top: 15px;
    margin-left: 40px;
    margin-top: 15px;
    h3 {
      font-size: 22px;
      margin-right: 25px;
      width: 95px;
      color: #152941;
    }
    .search-check {
      display: flex;
      gap: 27px;
      > button {
        width: 60px;
        border-radius: 35px;
        border: 1px solid #d9d9d9;
        background-color: #fff;
        padding: 6px;
        color: #152941;
        :hover {
          background: #61a1f3;
          border: 1px solid #61a1f3;
          color: #fff;
        }
      }
    }
    .search-bar {
      width: 400px;
      height: 32px;
      padding-right: 20px;
      border-radius: 5px;
      border: solid 1px #d9d9d9;
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 1;
      opacity: 1;
      font-size: 15px;
      background: #fff;
      i {
        color: #969696;
      }
      input {
        width: 300px;
        border: none;
        text-align: center;
        overflow: auto;
        font-size: 15px;

        &:focus {
          outline: none;
          width: 220px;
          text-align: left;
        }
      }
    }
  }
  .date-search-wrap {
    display: flex;
    justify-content: space-between;
    padding-top: 15px;
    margin-left: 40px;
    margin-top: 15px;
    h3 {
      font-size: 22px;
      margin-right: 25px;
      width: 95px;
      color: #152941;
    }
    .date-picker {
      display: flex;
      gap: 50px;
    }
    .search-bt {
      > button {
        width: 150px;
        height: 35px;
        margin-right: 35px;
        font-size: 15px;
        border-radius: 8px;
        border: 1px solid #d9d9d9;
        background: #fff;
        :hover {
          background: #ff5d5c;
          border: 1px solid #ff5d5c;
          color: #fff;
        }
      }
    }
  }
  .menu {
    width: 1300px;
    margin: 70px auto 0;
    display: grid;
    grid-template-columns: 100px 150px 150px 100px 350px 150px 150px 150px;
    text-align: center;
    background: #e3eaf2;
    border-top: 1px solid #aaa;
    border-bottom: 1px solid #aaa;
    & > div {
      padding: 10px;
    }
  }
  .table {
    display: grid;
    justify-items: stretch;
    text-align: center;
    width: 1300px;
    margin: 0 auto;
    .table-content-wrap {
      display: flex;
      align-items: center;
      & > div {
        border-bottom: 1px solid #aaa;
        height: 42px;
      }
      &:hover {
        background: #e3eaf2;
      }
      & > div {
        padding: 10px;
      }
      & > div:nth-of-type(1) {
        width: 100px;
      }
      & > div:nth-of-type(2) {
        width: 150px;
      }
      & > div:nth-of-type(3) {
        width: 150px;
      }
      & > div:nth-of-type(4) {
        width: 100px;
      }
      & > div:nth-of-type(5) {
        width: 350px;
      }
      & > div:nth-of-type(6) {
        width: 150px;
      }
      & > div:nth-of-type(7) {
        width: 150px;
      }
      & > div:nth-of-type(8) {
        width: 149px;
      }
      .checkbox {
        cursor: pointer;
      }
      .order-div {
        cursor: pointer;
      }
    }
  }
  .ant-pagination {
    padding: 50px 0;
    text-align: center;
  }
`;
