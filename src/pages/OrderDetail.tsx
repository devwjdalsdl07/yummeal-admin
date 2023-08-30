import { OrderDetailWrap } from "../style/OrderDetailCss";

const OrderDetail = () => {
  interface IOrderDetail {
    productId: number;
    prodName: string;
    quantity: number;
    usePoint: number;
    totalPrice: number;
    shipment: number;
  }

  const initData: Array<IOrderDetail> = [
    {
      productId: 1,
      prodName: "블라블라",
      quantity: 1,
      usePoint: 0,
      totalPrice: 10000,
      shipment: 1,
    },
  ];

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

  return (
    <OrderDetailWrap>
      <h2>주문상품 정보</h2>
      <h3>주문번호</h3>
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
            {initData.map((item: IOrderDetail, idx: number) => (
              <li key={idx} className="content-grid">
                <ul>
                  <li>{item.productId}</li>
                  <li>{item.prodName}</li>
                  <li>{item.quantity}</li>
                  <li>{item.usePoint.toLocaleString()}</li>
                  <li>{item.totalPrice.toLocaleString()}</li>
                  <li>{shipmentStatus(item.shipment)}</li>
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
              <li className="data">데이터자리</li>
              <li className="orderinfo-menu">배송비</li>
              <li className="data">데이터자리</li>
              <li className="orderinfo-menu">결제금액</li>
              <li className="data">데이터자리</li>
              <li className="orderinfo-menu">적립금 사용</li>
              <li className="data">데이터자리</li>
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
