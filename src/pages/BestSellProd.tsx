import styled from "@emotion/styled";
import { BarDatum } from "@nivo/bar";
import MyResponsiveBar from "../components/BestSellProdChart";

const BestSellProd = () => {
  const Wrap = styled.div`
    max-width: 1400px;
    margin: 0 auto;
    .bar-chart {
      height: 500px;
      margin-bottom: 50px;
    }
    .menu {
      display: grid;
      grid-template-columns: 150px 200px 400px 200px 150px;
      text-align: center;
      max-width: 1400px;
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
      max-width: 1400px;
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
        & > div:nth-child(1) {
          width: 130px;
        }
        & > div:nth-child(2) {
          width: 180px;
        }
        & > div:nth-child(3) {
          width: 380px;
        }
        & > div:nth-child(4) {
          width: 180px;
        }
        & > div:nth-child(5) {
          width: 130px;
        }
      }
    }
  `;

  type IData = {
    rank: number;
    fruit: string;
    price: string;
    prodNum: number;
    ea: number;
  };

  const data: Array<IData> = [
    { rank: 1, fruit: "체리", price: "체리", prodNum: 123456789, ea: 30 },
    { rank: 2, fruit: "딸기", price: "딸기", prodNum: 234567891, ea: 25 },
    { rank: 3, fruit: "메론", price: "메론", prodNum: 345678912, ea: 10 },
    { rank: 4, fruit: "수박", price: "수박", prodNum: 456789123, ea: 8 },
    { rank: 5, fruit: "복숭아", price: "복숭아", prodNum: 567891234, ea: 6 },
  ];

  const barData: Array<BarDatum> = [
    {
      country: "4",
      hotdog: 12,
      hotdogColor: "hsl(206, 70%, 50%)",
      burger: 34,
      burgerColor: "hsl(194, 70%, 50%)",
      sandwich: 50,
      sandwichColor: "hsl(354, 70%, 50%)",
      kebab: 14,
      kebabColor: "hsl(80, 70%, 50%)",
      fries: 25,
      friesColor: "hsl(13, 70%, 50%)",
    },
    {
      country: "5",
      hotdog: 152,
      hotdogColor: "hsl(213, 70%, 50%)",
      burger: 101,
      burgerColor: "hsl(185, 70%, 50%)",
      sandwich: 108,
      sandwichColor: "hsl(113, 70%, 50%)",
      kebab: 194,
      kebabColor: "hsl(322, 70%, 50%)",
      fries: 166,
      friesColor: "hsl(45, 70%, 50%)",
    },
    {
      country: "6",
      hotdog: 18,
      hotdogColor: "hsl(291, 70%, 50%)",
      burger: 44,
      burgerColor: "hsl(33, 70%, 50%)",
      sandwich: 81,
      sandwichColor: "hsl(147, 70%, 50%)",
      kebab: 181,
      kebabColor: "hsl(332, 70%, 50%)",
      fries: 131,
      friesColor: "hsl(243, 70%, 50%)",
    },
    {
      country: "7",
      hotdog: 178,
      hotdogColor: "hsl(152, 70%, 50%)",
      burger: 80,
      burgerColor: "hsl(227, 70%, 50%)",
      sandwich: 56,
      sandwichColor: "hsl(294, 70%, 50%)",
      kebab: 83,
      kebabColor: "hsl(243, 70%, 50%)",
      fries: 193,
      friesColor: "hsl(147, 70%, 50%)",
    },
    {
      country: "8",
      hotdog: 178,
      hotdogColor: "hsl(88, 70%, 50%)",
      burger: 80,
      burgerColor: "hsl(5, 70%, 50%)",
      sandwich: 56,
      sandwichColor: "hsl(188, 70%, 50%)",
      kebab: 83,
      kebabColor: "hsl(301, 70%, 50%)",
      fries: 193,
      friesColor: "hsl(204, 70%, 50%)",
    },
  ];
  return (
    <Wrap>
      BestSellProd
      <div className="bar-chart">
        <MyResponsiveBar data={barData} />
      </div>
      <div>
        <div className="menu">
          <div>순위</div>
          <div>이미지</div>
          <div>상품명</div>
          <div>상품번호</div>
          <div>판매수량</div>
        </div>
        <div className="table">
          {data.map((item: IData, idx: number) => {
            return (
              <div key={idx} className="table-content-wrap">
                <div>{item.rank}</div>
                <div>{item.fruit}</div>
                <div>{item.price}</div>
                <div>{item.prodNum}</div>
                <div>{item.ea}</div>
              </div>
            );
          })}
        </div>
      </div>
    </Wrap>
  );
};

export default BestSellProd;
