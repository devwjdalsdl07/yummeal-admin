import axios from "axios";
import { useEffect, useState } from "react";
import MyResponsivePie from "../components/BestSellProdChart";
import { BestProdWrap } from "../style/BestSellProdCss";

export interface IPieData {
  productId: number;
  id: string;
  label: string;
  value: number;
  color: string;
}

const pieData: Array<IPieData> = [
  {
    productId: 5,
    id: "[2단계] 곤드레단호박진밥",
    label: "[2단계] 곤드레단호박진밥",
    value: 20,
    color: "hsl(340, 70%, 50%)",
  },
  {
    productId: 1,
    id: "[1단계] 고구마두부진밥",
    label: "[1단계] 고구마두부진밥",
    value: 10,
    color: "hsl(298, 70%, 50%)",
  },
  {
    productId: 8,
    id: "[3단계] 한우옥수수묽은죽",
    label: "[3단계] 한우옥수수묽은죽",
    value: 5,
    color: "hsl(280, 70%, 50%)",
  },
  {
    productId: 7,
    id: "[3단계] 한우양송이묽은죽",
    label: "[3단계] 한우양송이묽은죽",
    value: 5,
    color: "hsl(38, 70%, 50%)",
  },
  {
    productId: 3,
    id: "[4단계] 토마토치킨리조또",
    label: "[4단계] 토마토치킨리조또",
    value: 5,
    color: "hsl(321, 70%, 50%)",
  },
];

interface ISalesData {
  productId: number;
  count: number;
  img: string;
  pname: string;
  pprice: number;
}

const thisYear = new Date().getFullYear().toString();
const thisMonth = ("00" + (new Date().getMonth() + 2).toString()).slice(-2);

const BestSellProd = () => {
  const [year, setYear] = useState(thisYear);
  const [month, setMonth] = useState(thisMonth);
  const [salesData, setSalesData] = useState<Array<ISalesData>>([]);

  const bestSalesData = async (year: string, month: string) => {
    const res = await axios.get(
      `/api/mypage/salevolum?page=0&row=5&year=${year}&month=${month}`,
    );
    const result = await res.data;
    setSalesData(result);
  };

  useEffect(()=>{
    bestSalesData(year, month)
  },[year, month])

  return (
    <BestProdWrap>
      <h2>베스트 상품</h2>
      <div className="contents-wrap">
        <div className="pie-chart">
          <MyResponsivePie data={pieData} />
        </div>
        <div className="grid-wrap">
          <div className="menu">
            <div>상품번호</div>
            <div>이미지</div>
            <div>상품명</div>
            <div>판매수량</div>
            <div>가격</div>
          </div>
          <div className="table">
            {salesData.map((item: ISalesData, idx: number) => (
              <div key={idx} className="table-content-wrap">
                <div>{item.productId}</div>
                <div>{item.img}</div>
                <div>{item.pname}</div>
                <div>{item.count}</div>
                <div>{item.pprice}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </BestProdWrap>
  );
};

export default BestSellProd;
