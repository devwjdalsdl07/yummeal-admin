import styled from "@emotion/styled";

export const Wrap = styled.div`
width: 100%;
max-width: 1400px;
margin: 0 auto;
font-size: 15px;
.menu {
  width: 1350px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 50px 100px 150px 150px 100px 350px 150px 150px 150px;
  text-align: center;
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
  width: 1350px;
  margin: 0 auto;
  .table-content-wrap {
    display: flex;
    align-items: center;
    & > div {
      border-bottom: 1px solid #aaa;
    }
    &:hover {
      background: #ebe1e1;
    }
    & > div {
      padding: 10px;
    }
    & > div:nth-of-type(1) {
      width: 50px;
      input {
        width: 15px;
        height: 15px;
      }
    }
    & > div:nth-of-type(2) {
      width: 100px;
    }
    & > div:nth-of-type(3) {
      width: 150px;
    }
    & > div:nth-of-type(4) {
      width: 150px;
    }
    & > div:nth-of-type(5) {
      width: 100px;
    }
    & > div:nth-of-type(6) {
      width: 350px;
    }
    & > div:nth-of-type(7) {
      width: 150px;
    }
    & > div:nth-of-type(8) {
      width: 150px;
    }
    & > div:nth-of-type(9) {
      width: 150px;
    }
    .checkbox {
      cursor: pointer;
    }
    .order-div {
      cursor: pointer;
    }
  }
}
`;