import { Spin } from "antd";
import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { OrderDetailWrap } from "../style/OrderDetailCss";

interface OrderDetail {
  productId: number;
  img: string;
  createdAt: string;
  price: number;
  count: number;
  totalPrice: number;
  pname: string;
}

interface Order {
  orderDetailId: number;
  productId: number;
  productName: string;
  count: number;
  totalPrice: number;
  shipment: number;
  orderDetailVo: OrderDetail[];
  usePoint: number;
  givePoint: number;
}

const OrderDetail = () => {
  const location = useLocation();
  const { state } = location;
  const [orderInfo, setOrderInfo] = useState<Order>({
    orderDetailId: 0,
    productId: 0,
    productName: "",
    count: 0,
    totalPrice: 0,
    shipment: 0,
    orderDetailVo: [],
    usePoint: 0,
    givePoint: 0,
  });
  const [prodInfo, setProdInfo] = useState<Array<OrderDetail>>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const detailProd = async () => {
    const res = await axios.get(`/api/admin/order/${state.orderCode}`);
    const result = await res.data;
    setOrderInfo(result);
    setProdInfo(result.orderDetailVo);
    setIsLoading(false);
  };

  useEffect(() => {
    detailProd();
  }, []);

  const shipmentStatus = (shipment: number): string => {
    switch (shipment) {
      case 0:
        return "배송준비중";
      case 1:
        return "배송중";
      case 2:
        return "배송완료";
      default:
        return "";
    }
  };
  console.log(orderInfo);
  return (
    <OrderDetailWrap>
      <h2>주문상품 정보</h2>
      <h3>주문번호 : {state.orderCode}</h3>
      <div className="contents-wrap">
        <div className="prod-info">
          <ul className="prod-info-menu">
            <li>상품번호</li>
            <li>상품명</li>
            <li>수량</li>
            <li>포인트 사용</li>
            <li>상품합계</li>
            <li>주문상태</li>
          </ul>
          <ul className="prod-info-content">
            {isLoading && <Spin size="large" />}
            {prodInfo?.map((item: OrderDetail, idx: number) => (
              <li key={idx} className="content-grid">
                <ul>
                  <li>{item.productId}</li>
                  <li>{item.pname}</li>
                  <li>{item.count}</li>
                  <li>{orderInfo?.usePoint?.toLocaleString()}</li>
                  <li>{item.totalPrice?.toLocaleString()}</li>
                  <li>{shipmentStatus(orderInfo?.shipment)}</li>
                </ul>
              </li>
            ))}
          </ul>
        </div>
        <div className="order-info-wrap">
          <div>
            <h3>결제정보</h3>
            <ul className="orderinfo">
              <li className="orderinfo-menu">판매금액</li>
              <li className="data">
                {orderInfo?.totalPrice?.toLocaleString()}
              </li>
              <li className="orderinfo-menu">적립금 사용</li>
              <li className="data">{orderInfo?.usePoint?.toLocaleString()}</li>
              <li className="orderinfo-menu">실 결제금액</li>
              <li className="data">
                {(orderInfo.totalPrice - orderInfo.usePoint).toLocaleString()}
              </li>
            </ul>
          </div>
          <div>
            <h3>결제수단</h3>
            <ul className="payment">
              <li className="payment-menu">결제방법</li>
              <li className="data">카카오페이</li>
              <li className="payment-menu">주문일시</li>
              <li className="data">{orderInfo?.orderDetailVo[0]?.createdAt}</li>
            </ul>
          </div>
          <div>
            <h3>혜택지급내역</h3>
            <ul className="pointback">
              <li className="pointback-menu">적립혜택</li>
              <li className="data">{orderInfo?.givePoint?.toLocaleString()}</li>
            </ul>
          </div>
          <div>
            <h3>주문자 정보</h3>
            <ul className="userinfo">
              <li className="userinfo-menu">주문자명</li>
              <li className="data">데이터자리</li>
              <li className="userinfo-menu">휴대폰번호</li>
              <li className="data">데이터자리</li>
              <li className="userinfo-menu">이메일</li>
              <li className="data">데이터자리</li>
              <li className="userinfo-menu">주문메모</li>
              <li className="data">데이터자리</li>
            </ul>
          </div>
        </div>
      </div>
    </OrderDetailWrap>
  );
};

export default OrderDetail;
