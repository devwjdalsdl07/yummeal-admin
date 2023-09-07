import { styled } from "styled-components";

export const MainWrap = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  font-size: 15px;
  padding: 20px 30px;
  h3{
    text-align: center;
  }
.grid-wrap{
    display: grid;
    grid-template-columns:repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    &>div:last-of-type{
        grid-column: 1/3;
        grid-row: 2/3;
    }
    width: 100%;
    height: 100%;
    .pie-chart{
      height: 300px;
    }
}
`;