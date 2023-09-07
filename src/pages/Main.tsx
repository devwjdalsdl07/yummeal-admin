import axios from "axios";
import { useEffect, useState } from "react";
import MyResponsivePie from "../components/BestSellProdChart";
import { MainWrap } from "../style/MainCss";
import { IPieData } from "./BestSellProd";

const Main = () => {
  const thisYear = new Date().getFullYear().toString();
  const thisMonth = ("00" + (new Date().getMonth() + 2).toString()).slice(-2);
  const [pieChart, setPieChart] = useState<Array<IPieData>>([]);

  const chartData = async (year: string, month: string) => {
    const res = await axios.get(
      `/api/mypage/salevolum/color?year=${year}&month=${month}`,
    );
    const result = await res.data;
    setPieChart(result);
  };

  useEffect(() => {
    chartData(thisYear, thisMonth);
  }, []);

  return (
    <MainWrap>
      <div className="contents-wrap">
        <div className="grid-wrap">
          <div>
            <h3>이달의 베스트 상품</h3>
            <div className="pie-chart">
              <MyResponsivePie data={pieChart} />
            </div>
          </div>
          <div>
            <h3>이달의 매출????</h3>
          </div>
          <div>
            <h3>이달의 주문배송</h3>
          </div>
        </div>
      </div>
    </MainWrap>
  );
};

export default Main;
