import styled from "@emotion/styled";

export const BestProdWrap = styled.div`
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  font-size: 15px;
  padding: 20px 30px;
  .pie-chart {
    height: 400px;
    margin-bottom: 30px;
  }
  .grid-wrap {
    padding-bottom: 30px;
  }
  .menu {
    display: grid;
    grid-template-columns: 150px 200px 400px 200px 150px;
    text-align: center;
    width: 1100px;
    background: #e3eaf2;
    border-top: 1px solid #aaa;
    border-bottom: 1px solid #aaa;
    margin: 0 auto;
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
        width: 200px;
      }
      & > div:nth-of-type(5) {
        width: 149px;
      }
    }
  }
  .ant-pagination {
    padding: 20px 0;
    text-align: center;
  }
`;
