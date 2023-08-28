import styled from "@emotion/styled";

export const Wrap = styled.div`
width: 100%;
max-width: 1400px;
margin: 0 auto;
font-size: 15px;
.bar-chart {
  height: 500px;
  margin: 50px 0;
}
.menu {
  display: grid;
  grid-template-columns: 150px 200px 400px 200px 150px;
  text-align: center;
  justify-content: space-between;
  background: #bfb6b6;
  border-bottom: 1px solid #aaa;
  & > div {
    padding: 10px;
  }
}
.table {
  display: grid;
  justify-items: stretch;
  text-align: center;
  border-top: 1px solid #aaa;
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
      width: 130px;
    }
    & > div:nth-of-type(2) {
      width: 180px;
    }
    & > div:nth-of-type(3) {
      width: 380px;
    }
    & > div:nth-of-type(4) {
      width: 180px;
    }
    & > div:nth-of-type(5) {
      width: 130px;
    }
  }
}
`;