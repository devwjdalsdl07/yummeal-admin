import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import SearchBar from "../components/SearchBar";
import { OrderStatusWrap } from "../style/OrderStatutsCss";
import Paging from "../components/Paging";

interface OrderDetail {
  orderDetailId: number;
  productId: number;
  count: number;
  totalPrice: number;
}

interface UserVo {
  iuser: number;
  name: string;
}

interface Pageable {
  sort: {
    empty: boolean;
    unsorted: boolean;
    sorted: boolean;
  };
  offset: number;
  pageNumber: number;
  pageSize: number;
  unpaged: boolean;
  paged: boolean;
}

interface OrderData {
  orderId: number;
  ordercode: number;
  iuser: number | null;
  userName: string | null;
  payment: number;
  shipment: number;
  cancel: number;
  createdAt: string | null;
  phoneNm: string;
  request: string;
  reciever: string;
  address: string;
  addressDetail: string;
  delYn: number;
  usepoint: number;
  orderDetailVo: OrderDetail[];
  userVo: UserVo;
}

interface OrdersResponse {
  content: OrderData[];
  pageable: Pageable;
  totalPages: number;
  totalElements: number;
  last: boolean;
  size: number;
  number: number;
  sort: {
    empty: boolean;
    unsorted: boolean;
    sorted: boolean;
  };
  numberOfElements: number;
  first: boolean;
  empty: boolean;
}

const OrderStatus = () => {
  const [orderList, setOrderList] = useState<OrdersResponse|null>(null);
  const [pageNm, setPageNm] = useState<number>(1);
  const navigate = useNavigate();

  const orderListGet = async (page: number) => {
    const res = await axios.get(
      `/api/admin/order?page=${page - 1}&size=10&sort=createdAt,asc`,
    );
    const result = res.data;
    setOrderList(result);
  };

  useEffect(() => {
    orderListGet(pageNm);
  }, [pageNm]);

  // const handleCheckChange = (idx: number) => {
  //   const updatedData = orderList.content.map((item, index) => {
  //     if (idx === index) {
  //       return { ...item, complete: !item.complete };
  //     }
  //     return item;
  //   });
  //   setOrderList(updatedData);
  // };

  const handleDetailMove = (ordercode:number) => {
    navigate("/orderdetail", {state: {orderCode: ordercode}});
  };

  const handleTotalPPrice = (item: OrderData) => {
    if (item.orderDetailVo && item.orderDetailVo.length > 0) {
      const totalPrice = item.orderDetailVo.reduce(
        (acc, index) => acc + index.totalPrice,
        0,
      );
      return totalPrice;
    }
    return 0;
  };

  const handleTotalOPrice = (item: OrderData) => {
    if (item.orderDetailVo && item.orderDetailVo.length > 0) {
      const totalOrderPrice = item.orderDetailVo.reduce(
        (acc, index) => acc + index.totalPrice,
        0,
      );
      return totalOrderPrice - item.usepoint;
    }
    return 0;
  };

  return (
    <OrderStatusWrap>
      <h2>주문 현황</h2>
      <div className="contents-wrap">
        <SearchBar />
        <div className="menu">
          {/* <div>체크</div> */}
          <div>번호</div>
          <div>주문일시</div>
          <div>주문번호</div>
          <div>주문자</div>
          <div>주문상품</div>
          <div>총상품금액</div>
          <div>총할인금액</div>
          <div>총주문금액</div>
        </div>
        <div className="table">
          {orderList?.content.map((item: OrderData, idx: number) => (
            <div key={item.ordercode} className="table-content-wrap">
              {/* <div>
                <input
                  type="checkbox"
                  className="checkbox"
                  checked={item.complete}
                  onChange={() => handleCheckChange(idx)}
                />
              </div> */}
              <div>{item.orderId}</div>
              <div>{item.createdAt == null ? "2023-09-04":item.createdAt}</div>
              <div className="order-div" onClick={()=>handleDetailMove(item.ordercode)}>
                {item.ordercode}
              </div>
              <div>{item.userName == null ? "홍길동":item.userName}</div>
              <div>{"상품명 없음"}</div>
              <div>{handleTotalPPrice(item)}</div>
              <div>{item.usepoint}</div>
              <div>{handleTotalOPrice(item)}</div>
            </div>
          ))}
        </div>
        <Paging pageNm={pageNm} setPageNm={setPageNm} totalItem={orderList?.totalElements}/>
      </div>
    </OrderStatusWrap>
  );
};

export default OrderStatus;
