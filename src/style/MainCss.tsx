import { styled } from "styled-components";

export const MainWrap = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  font-size: 15px;
  padding: 20px 30px;
  .main-wrap {
    height: 800px;
    overflow-y: auto;
    margin: 40px 0 100px;
    h3 {
      font-size: 25px;
      text-align: center;
    }
    .grid-wrap {
      display: grid;
      gap: 20px;
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: repeat(2, 1fr);
      width: 100%;
      height: 100%;
      padding: 10px;
      .chart-info {
        padding: 20px;
        background-color: #fefefe;
        box-shadow:
          rgba(0, 0, 0, 0.16) 0px 3px 6px,
          rgba(0, 0, 0, 0.23) 0px 3px 6px;
        .pie-chart {
          padding-top: 20px;
          height: 300px;
        }
      }
      .sale-wrap {
        background-color: #fefefe;
        box-shadow:
          rgba(0, 0, 0, 0.16) 0px 3px 6px,
          rgba(0, 0, 0, 0.23) 0px 3px 6px;
        padding: 20px;
        .sale-content {
          padding-top: 90px;
          text-align: center;
          & > div {
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 30px;
            padding-bottom: 20px;
            .sale-content-title {
              font-size: 25px;
            }
            .sale-content-value {
              font-size: 25px;
              font-weight: 700;
              color: #f75d78;
            }
          }
        }
      }
      & > div:last-of-type {
        grid-column: 1/3;
        grid-row: 2/3;
        background-color: #fefefe;
        box-shadow:
          rgba(0, 0, 0, 0.16) 0px 3px 6px,
          rgba(0, 0, 0, 0.23) 0px 3px 6px;
        width: 700px;
        margin: 0 auto;
        padding: 20px;
        .shipment-wrap {
          padding-top: 50px;
          width: 500px;
          height: 100px;
          margin: 0 auto;
          .info-title {
            display: flex;
            justify-content: space-between;
            text-align: center;
            margin: 25px;
            font-size: 35px;
            .icon {
              color: #208ff1;
            }
            p {
              font-size: 20px;
              font-weight: 700;
              margin-bottom: 10px;
            }
            span {
              font-size: 25px;
              font-weight: 500;
              strong {
                color: #208ff1;
              }
            }
          }
        }
      }
    }
  }
`;
