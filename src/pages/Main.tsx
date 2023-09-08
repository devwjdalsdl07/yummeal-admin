import axios from "axios";
import { useEffect, useState } from "react";
import MyResponsivePie from "../components/BestSellProdChart";
import { MainWrap } from "../style/MainCss";
import { IPieData } from "./BestSellProd";
import { ISaleStatus } from "./SalesStatus";

const Main = () => {
  const thisYear = new Date().getFullYear().toString();
  const thisMonth = ("00" + (new Date().getMonth() + 1).toString()).slice(-2);
  const [pieChart, setPieChart] = useState<Array<IPieData>>([]);
  const [saleVolum, setSaleVolum] = useState<ISaleStatus>({
    count: 0,
    totalprice: 0,
    vo: [],
  });

  // 베스트상품 그래프 데이터
  const chartData = async (year: string, month: string) => {
    const res = await axios.get(
      `/api/admin/salevolum/color?year=${year}&month=${month}`,
    );
    const result = await res.data;
    setPieChart(result);
  };

  // 전체 판매량 데이터
  const saleVolumData = async (page: number, year: string, month: string) => {
    const res = await axios.get(
      `/api/admin/salevolum?page=${
        page - 1
      }&row=10&year=${year}&month=${month}`,
    );
    const result = res.data;
    setSaleVolum(result);
  };

  useEffect(() => {
    chartData(thisYear, thisMonth);
    saleVolumData(1, thisYear, thisMonth);
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
            <h3>이달의 매출</h3>
            <div className="sale-content">
              <div>
                <p className="sale-content-title">총 판매품목 :</p>
                <p className="sale-content-value">{saleVolum.count}</p>
              </div>
              <div>
                <p className="sale-content-title">총 판매액 :</p>
                <p className="sale-content-value">{saleVolum.totalprice}</p>
              </div>
            </div>
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
