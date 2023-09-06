import styled from "@emotion/styled";

export const SaleStatusWrap = styled.div`
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  font-size: 15px;
  padding: 20px 30px;
  .content-wrap {
    padding-top: 60px;
    width: 100%;
    .menu {
      display: grid;
      grid-template-columns: 150px 200px 400px 150px 200px;
      text-align: center;
      width: 1100px;
      margin: 0 auto;
      border-top: 1px solid #aaa;
      border-bottom: 1px solid #aaa;
      background: #e3eaf2;
      & > div {
        padding: 10px;
      }
    }
    .table {
      display: grid;
      text-align: center;
      & > div {
        border-bottom: 1px solid #aaa;
      }
      .table-content-wrap {
        display: flex;
        width: 1100px;
        margin: 0 auto;
        &:hover {
          background: #e3eaf2;
        }
        & > div {
          padding: 10px;
        }
        & > div:nth-of-type(1) {
          width: 150px;
        }
        & > div:nth-of-type(2) {
          width: 200px;
        }
        & > div:nth-of-type(3) {
          width: 400px;
        }
        & > div:nth-of-type(4) {
          width: 150px;
        }
        & > div:nth-of-type(5) {
          width: 199px;
        }
      }
    }
  }
  .select-wrap {
    width: 90%;
    padding-top: 20px;
    display: flex;
    justify-content: end;
    gap: 20px;
  }
  .ant-pagination {
    padding: 30px 0;
    text-align: center;
  }
`;
