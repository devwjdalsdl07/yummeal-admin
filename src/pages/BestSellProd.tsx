import { BarDatum } from "@nivo/bar";
import MyResponsiveBar from "../components/BestSellProdChart";
import { Wrap } from "../style/BestSellProdCss";
import Paging from "../components/Paging";

const BestSellProd = () => {
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
          {data.map((item: IData, idx: number) => (
            <div key={idx} className="table-content-wrap">
              <div>{item.rank}</div>
              <div>{item.fruit}</div>
              <div>{item.price}</div>
              <div>{item.prodNum}</div>
              <div>{item.ea}</div>
            </div>
          ))}
        </div>
      </div>
      <Paging/>
    </Wrap>
  );
};

export default BestSellProd;
