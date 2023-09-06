import MyResponsiveBar from "../components/BestSellProdChart";
import MyResponsivePie from "../components/SaleStatusChart";
import { BestProdWrap } from "../style/BestSellProdCss";

export interface IPieData {
  id: string;
  label: string;
  value: number;
  color: string;
}

const pieData: Array<IPieData> = [
  {
    id: "stylus",
    label: "stylus",
    value: 53,
    color: "hsl(29, 70%, 50%)",
  },
  {
    id: "python",
    label: "python",
    value: 431,
    color: "hsl(25, 70%, 50%)",
  },
  {
    id: "c",
    label: "c",
    value: 10,
    color: "hsl(178, 70%, 50%)",
  },
  {
    id: "lisp",
    label: "lisp",
    value: 351,
    color: "hsl(275, 70%, 50%)",
  },
  {
    id: "make",
    label: "make",
    value: 564,
    color: "hsl(5, 70%, 50%)",
  },
];

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

  return (
    <BestProdWrap>
      <h2>베스트 상품</h2>
      <div className="contents-wrap">
      <div className="pie-chart">
        <MyResponsivePie data={pieData} />
      </div>
        <div className="grid-wrap">
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
      </div>
    </BestProdWrap>
  );
};

export default BestSellProd;
