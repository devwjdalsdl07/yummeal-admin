import styled from "@emotion/styled";

export const Wrap = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  font-size: 15px;
  padding: 20px;
  .prod-info {
    h3 {
      padding: 20px 0;
    }
  }
  .prod-info-menu {
    width: 1050px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 150px 400px 100px 150px 150px 100px;
    text-align: center;
    background: #e3eaf2;
    border: 1px solid black;
    & > li {
      line-height: 25px;
      padding: 10px 0;
      border-right: 1px solid black;
      &:last-of-type {
        border: none;
      }
    }
  }
  .prod-info-content {
    display: grid;
    width: 1050px;
    margin: 0 auto;
    border-right: 1px solid black;
    border-left: 1px solid black;
    border-bottom: 1px solid black;
    .content-grid {
      & > ul {
        display: flex;
        margin: 0 auto;
        &:hover {
          background: #e3eaf2;
        }
        & > li {
          line-height: 25px;
          padding: 10px 0;
          text-align: center;
          border-right: 1px solid black;
          &:last-of-type {
            border: none;
          }
        }
        & > li:nth-of-type(1) {
          width: 150px;
        }
        & > li:nth-of-type(2) {
          width: 400px;
        }
        & > li:nth-of-type(3) {
          width: 100px;
        }
        & > li:nth-of-type(4) {
          width: 150px;
        }
        & > li:nth-of-type(5) {
          width: 150px;
        }
        & > li:nth-of-type(6) {
          width: 100px;
        }
      }
    }
  }
  .order-info-wrap {
    display: grid;
    grid-template-columns: repeat(2, auto);
    gap: 20px;
    padding-top: 20px;
    h3 {
      padding: 10px 30px;
    }
    .orderinfo,
    .payment,
    .pointback,
    .userinfo {
      display: grid;
      grid-template-columns: 200px 300px;
      padding: 0 30px;
    }
    .orderinfo-menu,
    .payment-menu,
    .pointback-menu,
    .userinfo-menu {
      background: #e3eaf2;
      line-height: 25px;
      padding: 10px 20px;
      border-top: 1px solid #aaa;
    }
    .orderinfo-menu:nth-of-type(9),
    .payment-menu:nth-of-type(7),
    .pointback-menu:nth-of-type(1),
    .userinfo-menu:nth-of-type(7) {
      border-bottom: 1px solid #aaa;
    }
    .data {
      text-align: end;
      border-top: 1px solid #aaa;
      line-height: 25px;
      padding: 10px 20px;
      &:last-of-type {
        border-bottom: 1px solid #aaa;
      }
    }
  }
  .ant-pagination {
    padding: 20px 0;
    text-align: center;
  }
`;
