import axios from "axios";
import { useEffect, useState } from "react";
import MyResponsivePie from "../components/BestSellProdChart";
import { MainWrap } from "../style/MainCss";
import { IPieData } from "./BestSellProd";
import { ISaleStatus } from "./SalesStatus";
import { Order } from "./Delivery";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBoxOpen,
  faCircleXmark,
  faDolly,
  faTruckFast,
} from "@fortawesome/free-solid-svg-icons";

const Main = () => {
  const thisYear = new Date().getFullYear().toString();
  const thisMonth = ("00" + (new Date().getMonth() + 1).toString()).slice(-2);
  const [pieChart, setPieChart] = useState<Array<IPieData>>([]);
  const [saleVolum, setSaleVolum] = useState<ISaleStatus>({
    count: 0,
    totalprice: 0,
    vo: [],
  });

  const [orderData, setOrderData] = useState<Array<Order>>([]);

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

  // 주문배송
  const orderStats = async () => {
    const res = await axios.get(
      `/api/admin/order?page=0&size=10000&sort=createdAt,asc`,
    );
    const result = res.data;
    setOrderData(result.content);
  };

  useEffect(() => {
    chartData(thisYear, thisMonth);
    saleVolumData(1, thisYear, thisMonth);
    orderStats();
  }, []);

  const delivered = orderData?.filter(item => item.shipment == 0);
  const shipmentReady = orderData?.filter(item => item.shipment == 1);
  const delivery = orderData?.filter(item => item.shipment == 2);
  const shipmentCancel = orderData?.filter(item => item.shipment == 3);

  return (
    <MainWrap>
      <div className="main-wrap">
        <div className="grid-wrap">
          <div className="chart-info">
            <h3>이달의 베스트 상품</h3>
            <div className="pie-chart">
              <MyResponsivePie data={pieChart} />
            </div>
          </div>
          <div className="sale-wrap">
            <h3>이달의 매출</h3>
            <div className="sale-content">
              <div>
                <p className="sale-content-title">총 판매품목 :</p>
                <p className="sale-content-value">{saleVolum.count}</p>
              </div>
              <div>
                <p className="sale-content-title">총 판매액 :</p>
                <p className="sale-content-value">
                  <strong>{saleVolum.totalprice.toLocaleString()}</strong>원
                </p>
              </div>
            </div>
          </div>
          <div>
            <h3>주문배송</h3>
            <div className="shipment-wrap">
              <ul className="info-title">
                <li>
                  <i className="icon">
                    <FontAwesomeIcon icon={faDolly} />
                  </i>
                  <p>배송준비중</p>
                  <span>
                    <strong>{shipmentReady.length}</strong>건
                  </span>
                </li>
                <li>
                  <i className="icon">
                    <FontAwesomeIcon icon={faTruckFast} />
                  </i>
                  <p>배송중</p>
                  <span>
                    <strong>{delivery.length}</strong>건
                  </span>
                </li>
                <li>
                  <i className="icon">
                    <FontAwesomeIcon icon={faBoxOpen} />
                  </i>
                  <p>배송완료</p>
                  <span>
                    <strong>{delivered.length}</strong>건
                  </span>
                </li>
                <li>
                  <i className="icon">
                    <FontAwesomeIcon icon={faCircleXmark} />
                  </i>
                  <p>주문취소</p>
                  <span>
                    <strong>{shipmentCancel.length}</strong>건
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </MainWrap>
  );
};

export default Main;
