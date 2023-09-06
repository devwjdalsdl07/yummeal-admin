import styled from "@emotion/styled";

export const OrderStatusWrap = styled.div`
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  font-size: 15px;
  padding: 20px 30px;
  .menu {
    width: 1300px;
    margin: 0 auto;
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
