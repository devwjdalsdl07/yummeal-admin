import styled from "@emotion/styled";

export const Wrap = styled.div`
    width: 100%;
    max-width: 1400px;
    margin: 0 auto;
    font-size: 15px;
    .pie-chart {
      height: 450px;
      margin-bottom: 30px;
    }
    .content-wrap {
      width: 100%;
      .menu {
        display: grid;
        grid-template-columns: 150px 200px 400px 150px 200px;
        text-align: center;
        justify-content: space-between;
        border-bottom: 1px solid #aaa;
        background: #bfb6b6;
        & > div {
          padding: 10px;
        }
      }
      .table {
        display: grid;
        justify-items: stretch;
        text-align: center;
        & > div {
          border-bottom: 1px solid #aaa;
        }
        .table-content-wrap {
          display: flex;
          justify-content: space-between;
          &:hover {
            background: #ebe1e1;
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
            width: 200px;
          }
        }
      }
    }
  `;