import { DatePicker, Select } from "antd";
import { RangePickerProps } from "antd/es/date-picker";
import { useEffect, useState } from "react";
import { getOrder } from "../api/DeliveryFatch";
import Checkbox from "../components/Checkbox";
import Search from "../components/Search";
import { StyledInput, StyledLabel, StyledP } from "../style/DeliveryCss";
import { ProductInfo } from "../style/ProductInfoCss";
import Paging from "../components/Paging";
import dayjs from "dayjs";
const { RangePicker } = DatePicker;
export interface OrderDetail {
  orderDetailId: number;
  productId: number;
  productName: string;
  count: number;
  totalPrice: number;
}
export interface UserVo {
  iuser: number;
  name: string;
}
export interface Order {
  orderId: number;
  ordercode: number;
  iuser: number | null;
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
}
export interface OrderResponse {
  content: Order[];
}
const Delivery = () => {
  const [orderSearch, setOrderSearch] = useState<Array<Order>>([]);
  // 사용자가 검색에서 선택한 항목에 대한 state
  const [orderCodeCheckIndex, setOrderCodeCheckIndex] = useState<number>(0);
  // const [selectAll, setSelectAll] = useState(false)
  const [orderCodeCheckWord, setOrderCodeCheckWord] = useState<string>("");
  // RangePicker의 onChange 이벤트 핸들러
  // 시작, 끝 날짜
  const [stDay, setStDay] = useState<string>("");
  const [edDay, setEdDay] = useState<string>("");
  const [pageNm, setPageNm] = useState<number>(1);
  const onChange: RangePickerProps["onChange"] = (date, dateString) => {
    const startDate = dayjs(dateString[0]);
    const endDate = dayjs(dateString[1]);
    const formattedStartDate = startDate.format("YYYY-MM-DD");
    const formattedEndDate = endDate.format("YYYY-MM-DD");
    setStDay(formattedStartDate);
    setEdDay(formattedEndDate);
  };
  const handleSearch = () => {
    let sendQuery = "";
    if (stDay === "" || edDay === "") {
      // 날짜 선택없으면
      sendQuery = `filter${orderCodeCheckIndex}=${orderCodeCheckWord}&`;
    } else if (stDay !== "" || edDay !== "") {
      sendQuery = `startDate=${stDay}&endDate=${edDay}&`;
    } else {
      sendQuery = `filter${orderCodeCheckIndex}=${orderCodeCheckWord}&`;
    }
    orderSearchFetch(0, sendQuery);
  };
  // useEffect(() => {
  //   console.log(orderCodeCheckIndex);
  // }, [orderCodeCheckIndex]);
  // useEffect(() => {
  //   consputole.log(orderCodeCheckWord);
  // }, [oputputProfilerderCodeCheckWord]);
  // 주문내역 조회
  const orderSearchFetch = async (_page: number, _query: string) => {
    const sendQuery = _query;
    // console.log(sendQuery);
    try {
      const orderSearchJson = await getOrder(_page, sendQuery);
      setOrderSearch(orderSearchJson.content);
      console.log(orderSearchJson);
      return orderSearchJson;
    } catch (err) {
      console.log(err);
    }
    OrderSearchFetch(0, sendQuery);
  };
  // 주문내역 조회
  const OrderSearchFetch = async (_page: number, _query: string) => {
    const sendQuery = _query;
    // console.log(sendQuery);
    try {
      const orderSearchJson = await getOrder(_page, sendQuery);
      setOrderSearch(orderSearchJson.content);
      console.log(orderSearchJson);
      return orderSearchJson;
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    orderSearchFetch(0, "");
  }, []);
  const lists: Array<JSX.Element> = orderSearch.map(
    (order: Order, index: number) => {
      const ordercode = order.ordercode; // 주문번호
      const createdAt = order.createdAt; // 주문일시
      const shipment = order.shipment; //배송상태
      const userName = order.userName; // 주문자명
      const productName = order.productName; // 주문상품
      const productNumber =
        order.orderDetailVo.length > 0 ? order.orderDetailVo[0].productId : 0; // 상품주문번호
      const productCount =
        order.orderDetailVo.length > 0 ? order.orderDetailVo[0].count : 0; // 수량
      const totalProductPrice =
        order.orderDetailVo.length > 0 ? order.orderDetailVo[0].totalPrice : 0; // 총상품금액
      const totalDiscount = order.usepoint; // 총할인금액
      const totalOrderAmount = totalProductPrice - totalDiscount; // 총주문금액
      return (
        <Checkbox
          key={order.orderId}
          ordercode={ordercode}
          shipment={shipment}
          createdAt={createdAt}
          userName={userName}
          productName={productName}
          productNumber={productNumber}
          count={productCount}
          totalProductPrice={totalProductPrice}
          totalDiscount={totalDiscount}
          totalOrderAmount={totalOrderAmount}
        />
      );
    },
  );
  const text = "";
  const handleAllCheck = (isChecked: boolean) => {
    const updatedCities = orderSearch.map(order => ({
      ...order,
      isSelected: isChecked,
    }));
    setOrderSearch(updatedCities);
  };
  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
    const sendQuery = `filter4=${value}&`;
    orderSearchFetch(0, sendQuery);
  };
  // const handleDeliveryChange = () =>{
  // const updatedDelivery =
  // }
  return (
    <ProductInfo>
      <h2>배송 관리</h2>
      <div className="search-wrap">
        <h3>검색어</h3>
        <Search
          setOrderCodeCheckIndex={setOrderCodeCheckIndex}
          setOrderCodeCheckWord={setOrderCodeCheckWord}
        />
        {/* <Search /> */}
      </div>
      <div className="search-wrap">
        <h3>조회 검색</h3>
        <div className="search-check">
          {/* <button onClick={handleSearchDay}>어제</button>
          <button onClick={handleSearch}>1주일</button>
          <button onClick={handleSearchmonth}>1개월</button> */}
        </div>
        <RangePicker onChange={onChange} />
        <div className="search-bt">
          <button onClick={handleSearch}>검색</button>
          <button>초기화</button>
        </div>
      </div>
      <div className="contents-wrap">
        <div className="box-layout">
          <span>검색걸과 총 {lists.length}건 </span>
          <Select
            defaultValue="선택"
            style={{ width: 130 }}
            onChange={handleChange}
            options={[
              { value: 1, label: "준비중" },
              { value: 2, label: "배송중" },
              { value: 0, label: "배송완료" },
              { value: 3, label: "주문취소" },
            ]}
          />
          <div className="delivery-bt">
            <ul>
              <li>
                <button>배송중</button>
              </li>
              <li>
                <button>배송완료</button>
              </li>
              <li>
                <button>주문취소</button>
              </li>
            </ul>
          </div>
        </div>
        <div className="content-info">
          <ul className="title">
            <li>
              <StyledLabel htmlFor={text}>
                <StyledInput
                  type="checkbox"
                  id={text}
                  name={text}
                  onChange={e => handleAllCheck(e.target.checked)}
                />
                <StyledP>{text}</StyledP>
              </StyledLabel>
            </li>
            <li>주문번호</li>
            <li>주문일시</li>
            <li>배송상태</li>
            <li>주문자명</li>
            <li>주문상품</li>
            <li>상품주문번호</li>
            <li>수량</li>
            <li>총상품금액</li>
            <li>총할인금액</li>
            <li>총주문금액</li>
          </ul>
          {lists}
        </div>
        <div className="page-bt">
          <Paging pageNm={pageNm} setPageNm={setPageNm} />
        </div>
      </div>
    </ProductInfo>
  );
};
export default Delivery;
