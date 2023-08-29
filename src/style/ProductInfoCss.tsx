import styled from "@emotion/styled";
export const ProductInfo = styled.div`
  flex-grow: 1;
  min-width: auto;
  height: 100%;

  .box-layout {
    margin: 30px 0;
    padding: 20px 0;
    border-bottom: 1px solid #969696;
    font-size: 25px;
    font-weight: 600;
  }

  .title {
    margin: 0;
    display: grid;
    grid-template-columns: repeat(9, 1fr);
    border-top: 1px solid #bfb6b6;
    border-bottom: 1px solid #bfb6b6;
    background: #efeeee;
    list-style: none;

    li {
      padding: 10px;
      text-align: center;
      font-weight: bold;
      border-right: 1px solid #bfb6b6;

      &:last-child {
        border-right: none;
      }
    }
    .i {
      text-align: end;
      padding-top: 10px;
      padding-right: 40px;
    }
  }

  /* .sample {
    appearance: none;
    border: 1.5px solid gainsboro;
    border-radius: 0.35rem;
    width: 1.5rem;
    height: 1.5rem;
    background: #fff;
  } */
`;
