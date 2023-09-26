import { Select, Spin } from "antd";
import axios from "axios";
import { useEffect, useState } from "react";
import MyResponsivePie from "../components/BestSellProdChart";
import { BestProdWrap } from "../style/BestSellProdCss";
import { IProdInfo, ISaleStatus } from "./SalesStatus";
import { instance } from "../api/axios";

// 파이차트 데이터 타입
export interface IPieData {
  productId: number;
  id: string;
  label: string;
  value: number;
  color: string;
}

const thisYear = new Date().getFullYear();
const thisMonth = ("00" + (new Date().getMonth() + 1).toString()).slice(-2);

const BestSellProd = () => {
  const [year, setYear] = useState<string>(thisYear.toString());
  const [month, setMonth] = useState<string>(thisMonth);
  const [salesData, setSalesData] = useState<ISaleStatus>({
    count: 0,
    totalprice: 0,
    vo: [],
  });
  const [pieChart, setPieChart] = useState<Array<IPieData>>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  // 베스트판매량 데이터
  const bestSalesData = async (year: string, month: string) => {
    const res = await instance.get(
      `/api/admin/salevolum?page=0&row=5&year=${year}&month=${month}`,
    );
    const result = await res.data;
    setSalesData(result);
    setIsLoading(false);
  };

  // 차트 데이터
  const chartData = async (year: string, month: string) => {
    const res = await instance.get(
      `/api/admin/salevolum/color?year=${year}&month=${month}`,
    );
    const result = await res.data;
    setPieChart(result);
  };

  useEffect(() => {
    bestSalesData(year, month);
    chartData(year, month);
  }, [year, month]);

  // 셀렉트박스 연도 업데이트
  const handleYearChange = (value: string) => {
    setYear(value);
  };

  // 셀렉트박스 월 업데이트
  const handleMonthChange = (value: string) => {
    setMonth(value);
  };

  return (
    <BestProdWrap>
      <h2>베스트 상품</h2>
      <div className="contents-wrap">
        {isLoading && <Spin size="large" />}
        <div className="pie-chart">
          <MyResponsivePie data={pieChart} />
        </div>
        <div className="grid-wrap">
          <div className="menu">
            <div>상품번호</div>
            <div>이미지</div>
            <div>상품명</div>
            <div>판매수량</div>
            <div>매출액</div>
          </div>
          <div className="table">
            {salesData?.vo?.map((item: IProdInfo, idx: number) => (
              <div key={idx} className="table-content-wrap">
                <div>{item.productId}</div>
                <div className="table-imgbox">
                  <img
                    src={`/img/product/${item.productId}/${item.img}`}
                    alt={item.pname}
                  />
                </div>
                <div>{item.pname}</div>
                <div>{item.count}</div>
                <div>{(item.pprice).toLocaleString()}</div>
              </div>
            ))}
            {salesData.count < 1 && (
              <div className="no-data">데이터가 없습니다</div>
            )}
          </div>
          <div className="select-wrap">
            <Select
              defaultValue={(thisYear).toString()}
              style={{ width: 130 }}
              onChange={handleYearChange}
              options={[
                {
                  value: `${thisYear - 1}`,
                  label: `${thisYear - 1}`,
                },
                {
                  value: `${thisYear}`,
                  label: `${thisYear}`,
                },
              ]}
            />
            <Select
              defaultValue={thisMonth}
              style={{ width: 130 }}
              onChange={handleMonthChange}
              options={[
                { value: "01", label: "1월" },
                { value: "02", label: "2월" },
                { value: "03", label: "3월" },
                { value: "04", label: "4월" },
                { value: "05", label: "5월" },
                { value: "06", label: "6월" },
                { value: "07", label: "7월" },
                { value: "08", label: "8월" },
                { value: "09", label: "9월" },
                { value: "10", label: "10월" },
                { value: "11", label: "11월" },
                { value: "12", label: "12월" },
              ]}
            />
          </div>
        </div>
      </div>
    </BestProdWrap>
  );
};

export default BestSellProd;
