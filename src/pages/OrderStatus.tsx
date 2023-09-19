import { DatePicker, Spin } from "antd";
import { RangePickerProps } from "antd/es/date-picker";
import axios, { AxiosError } from "axios";
import dayjs from "dayjs";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Paging from "../components/Paging";
import Search from "../components/Search";
import { OrderStatusWrap } from "../style/OrderStatutsCss";

const { RangePicker } = DatePicker;

interface OrderDetail {
  orderDetailId: number;
  productId: number;
  productName: string;
  count: number;
  totalPrice: number;
}

interface UserVo {
  iuser: number;
  name: string;
}

interface OrderData {
  orderId: number;
  ordercode: number;
  iuser: number;
  userName: string;
  payment: number;
  shipment: number;
  cancel: number;
  createdAt: string;
  phoneNm: string;
  request: string;
  reciever: string;
  address: string;
  addressDetail: string;
  delYn: number;
  usepoint: number;
  productName: string;
  orderDetailVo: OrderDetail[];
  userVo: UserVo;
}

export interface OrdersResponse {
  page: number;
  count: number;
  list: OrderData[];
  allcount: number;
}

const OrderStatus = () => {
  const [orderList, setOrderList] = useState<OrdersResponse | null>(null);
  const [pageNm, setPageNm] = useState<number>(1);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isSearch, setIsSearch] = useState<boolean>(false);
  const navigate = useNavigate();

  const orderListGet = async (page: number, query: string) => {
    try {
      const sendQuery = query;
      console.log(
        `/api/admin/order?${sendQuery}page=${
          page - 1
        }&size=10&sort=createdAt,asc`,
      );
      const res = await axios.get(
        `/api/admin/order?${sendQuery}page=${
          page - 1
        }&size=10&sort=createdAt,asc`,
      );
      const result = res.data;
      setOrderList(result);
      setIsLoading(false);
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        const axiosError = error as AxiosError;
        if (axiosError.response) {
          // 서버 응답이 있는 경우
          const errorMessage = axiosError.response.data as any;
          alert(errorMessage.message);
        }
      }
    }
  };

  useEffect(() => {
    orderListGet(pageNm, "");
  }, [pageNm]);

  const handleDetailMove = (ordercode: number) => {
    navigate("/admin/orderdetail", { state: { orderCode: ordercode } });
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

  // 사용자가 검색에서 선택한 항목에 대한 state
  const [orderCodeCheckIndex, setOrderCodeCheckIndex] = useState<
    number | string
  >(0);
  const [orderCodeCheckWord, setOrderCodeCheckWord] = useState<string>("");

  // RangePicker의 onChange 이벤트 핸들러
  // 시작, 끝 날짜
  const [stDay, setStDay] = useState<string>("");
  const [edDay, setEdDay] = useState<string>("");
  const onChange: RangePickerProps["onChange"] = (date, dateString) => {
    const startDate = dayjs(dateString[0]);
    const endDate = dayjs(dateString[1]);
    const formattedStartDate = startDate.format("YYYY-MM-DD");
    const formattedEndDate = endDate.format("YYYY-MM-DD");
    setStDay(formattedStartDate);
    setEdDay(formattedEndDate);
  };

  const handleSearch = () => {
    try {
      let sendQuery = "";
      if (stDay === "" || edDay === "") {
        sendQuery = `filter${orderCodeCheckIndex}=${orderCodeCheckWord}&`;
      } else if (!orderCodeCheckIndex && !orderCodeCheckWord) {
        sendQuery = `startDate=${stDay}&endDate=${edDay}&`;
      } else {
        sendQuery = `filter${orderCodeCheckIndex}=${orderCodeCheckWord}&startDate=${stDay}&endDate=${edDay}&`;
      }
      orderListGet(pageNm, sendQuery);
      setIsSearch(true);
    } catch (error) {
      alert(error);
    }
  };

  const handleReset = () => {
    try {
      setStDay("");
      setEdDay("");
      setOrderCodeCheckWord("");
      setOrderCodeCheckIndex(0);
      const send = `filter0=0&`;
      orderListGet(pageNm, send);
      setIsSearch(false);
    } catch (error) {
      alert(error);
    }
  };

  return (
    <OrderStatusWrap>
      <h2>주문 현황</h2>
      <div className="search-wrap">
        <h3>검색어</h3>
        <Search
          orderCodeCheckIndex={orderCodeCheckIndex}
          setOrderCodeCheckIndex={setOrderCodeCheckIndex}
          orderCodeCheckWord={orderCodeCheckWord}
          setOrderCodeCheckWord={setOrderCodeCheckWord}
        />
      </div>
      <div className="date-search-wrap">
        <div className="date-picker">
          <h3>날짜 조회</h3>
          {/* <div className="search-check">
          <button onClick={handleSearchDay}>어제</button>
          <button onClick={handleSearch}>1주일</button>
          <button onClick={handleSearchmonth}>1개월</button>
        </div> */}
          <RangePicker
            onChange={onChange}
            inputReadOnly={true}
            value={stDay && edDay ? [dayjs(stDay), dayjs(edDay)] : undefined}
            allowClear={false}
            onClick={() => setIsSearch(false)}
          />
        </div>
        <div className="search-bt">
          <button onClick={handleSearch}>검색</button>
          <button onClick={handleReset}>초기화</button>
        </div>
      </div>
      <div className="contents-wrap">
        <div className="menu">
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
          {isLoading && <Spin size="large" />}
          {orderList?.list.map((item: OrderData) => (
            <div key={item.ordercode} className="table-content-wrap">
              <div>{item.orderId}</div>
              <div>{item.createdAt}</div>
              <div
                className="order-div"
                onClick={() => handleDetailMove(item.ordercode)}
              >
                {item.ordercode}
              </div>
              <div>{item.userName}</div>
              <div>
                {item.productName}{" "}
                {item.orderDetailVo.length > 1
                  ? `외 ${item.orderDetailVo.length - 1}건`
                  : null}
              </div>
              <div>{handleTotalPPrice(item).toLocaleString()}</div>
              <div>{item.usepoint.toLocaleString()}</div>
              <div>{handleTotalOPrice(item).toLocaleString()}</div>
            </div>
          ))}
        </div>
        <Paging
          pageNm={pageNm}
          setPageNm={setPageNm}
          totalItem={orderList?.allcount}
        />
      </div>
    </OrderStatusWrap>
  );
};

export default OrderStatus;
