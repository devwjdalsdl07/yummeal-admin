import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { OrderDetailWrap } from "../style/OrderDetailCss";

interface IUser {
  iuser: number;
  password: string;
  image: null | string;
  name: string;
  birthday: string;
  mobile_nb: string;
  createdAt: string;
  uid: string;
  providerType: string;
  zipCode: null | string;
  address: null | string;
  addressDetail: null | string;
  nickNm: string;
  point: number;
  delYn: null | string;
  orderBasketEntityList: IBasket[];
}

interface IBasket {
  orderDetailId: number;
  productId: number;
  productName: string;
  count: number;
  totalPrice: number;
}

interface IOrder {
  orderId: number;
  orderCode: number;
  iuser: IUser;
  payment: number;
  shipment: number;
  cancel: number;
  createdAt: string;
  phoneNm: string;
  request: string;
  receiver: string;
  address: string;
  addressDetail: string;
  delYn: number;
  usepoint: number;
}

const OrderDetail = () => {
  const location = useLocation();
  const { state } = location;
  const [orderInfo, setOrderInfo] = useState<Array<IOrder>>([]);
  const [userInfo, setUserInfo] = useState<IUser | null>(null);

  const detailProd = async () => {
    const res = await axios.get(`/api/admin/order/${state.orderCode}`);
    const result = await res.data;
    setOrderInfo(result);
    setUserInfo(result[0].iuser);
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
console.log(orderInfo)
  return (
    <OrderDetailWrap>
      <h2>주문상품 정보</h2>
      <h3>주문번호 : {orderInfo[0]?.orderCode}</h3>
      <div className="contents-wrap">
        <div className="prod-info">
          <ul className="prod-info-menu">
            <li>상품주문번호</li>
            <li>상품명</li>
            <li>수량</li>
            <li>포인트 사용</li>
            <li>상품합계</li>
            <li>주문상태</li>
          </ul>
          <ul className="prod-info-content">
            {userInfo?.orderBasketEntityList?.map(
              (item: IBasket, idx: number) => (
                <li key={idx} className="content-grid">
                  <ul>
                    <li>{item.orderDetailId}</li>
                    <li>{item.productName}</li>
                    <li>{item.count}</li>
                    <li>{orderInfo[0]?.usepoint?.toLocaleString()}</li>
                    <li>{item.totalPrice?.toLocaleString()}</li>
                    <li>{shipmentStatus(orderInfo[0].shipment)}</li>
                  </ul>
                </li>
              ),
            )}
          </ul>
        </div>
        <div className="order-info-wrap">
          <div>
            <h3>결제정보</h3>
            <ul className="orderinfo">
              <li className="orderinfo-menu">판매금액</li>
              <li className="data">데이터자리</li>
              <li className="orderinfo-menu">적립금 사용</li>
              <li className="data">{orderInfo[0]?.usepoint?.toLocaleString()}원</li>
              <li className="orderinfo-menu">실 결제금액</li>
              <li className="data">데이터자리</li>
            </ul>
          </div>
          <div>
            <h3>결제수단</h3>
            <ul className="payment">
              <li className="payment-menu">결제방법</li>
              <li className="data">데이터자리</li>
              <li className="payment-menu">결제상세</li>
              <li className="data">데이터자리</li>
              <li className="payment-menu">주문일시</li>
              <li className="data">데이터자리</li>
              <li className="payment-menu">결제일시</li>
              <li className="data">데이터자리</li>
            </ul>
          </div>
          <div>
            <h3>혜택지급내역</h3>
            <ul className="pointback">
              <li className="pointback-menu">적립혜택</li>
              <li className="data">데이터자리</li>
            </ul>
          </div>
          <div>
            <h3>주문자 정보</h3>
            <ul className="userinfo">
              <li className="userinfo-menu">주문자명</li>
              <li className="data">{userInfo?.name}</li>
              <li className="userinfo-menu">휴대폰번호</li>
              <li className="data">{userInfo?.mobile_nb}</li>
              <li className="userinfo-menu">이메일</li>
              <li className="data">{userInfo?.uid}</li>
              <li className="userinfo-menu">주문메모</li>
              <li className="data">{orderInfo[0]?.request}</li>
            </ul>
          </div>
        </div>
      </div>
    </OrderDetailWrap>
  );
};

export default OrderDetail;
