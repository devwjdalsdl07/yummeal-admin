import { styled } from "styled-components";

export const MainWrap = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  font-size: 15px;
  padding: 20px 30px;
  h3{
    font-size: 25px;
    text-align: center;
  }
.grid-wrap{
    display: grid;
    grid-template-columns:repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    &>div {
      padding: 20px;
    }
    &>div:last-of-type{
        grid-column: 1/3;
        grid-row: 2/3;
    }
    width: 100%;
    height: 100%;
    .pie-chart{
      padding-top: 20px;
      height: 300px;
    }
    .sale-content{
      padding-top: 90px;
      text-align: center;
      &>div{
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 30px;
        padding-bottom: 20px;
        .sale-content-title{
          font-size: 20px;
        }
        .sale-content-value{
          font-size: 25px;
          font-weight: 700;
        }
      }
    }
}
`;