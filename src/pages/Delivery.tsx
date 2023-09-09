import { DatePicker, Select } from "antd";
import { RangePickerProps } from "antd/es/date-picker";
import dayjs from "dayjs";
import { useEffect, useState } from "react";
import { getOrder } from "../api/DeliveryFatch";
import Checkbox from "../components/Checkbox";
import Paging from "../components/Paging";
import Search from "../components/Search";
import { StyledInput, StyledLabel, StyledP } from "../style/DeliveryCss";
import { ProductInfo } from "../style/ProductInfoCss";

const { RangePicker } = DatePicker;

export interface OrderDetail {
  orderDetailId: number;
  productId: number;
  productName: string;
  count: number;
  totalPrice: number;
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
  // const [selectAll, setSelectAll] = useState(false)

  // 사용자가 검색에서 선택한 항목에 대한 state
  const [orderCodeCheckIndex, setOrderCodeCheckIndex] = useState<number>(0);
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
      sendQuery = `filter${orderCodeCheckIndex}=${orderCodeCheckWord}&`;
    } else if (stDay !== "" || edDay !== "") {
      sendQuery = `startDate=${stDay}&endDate=${edDay}&`;
    } else {
      sendQuery = `filter${orderCodeCheckIndex}=${orderCodeCheckWord}&`;
    }
    OrderSearchFetch(0, sendQuery);
  };

  // useEffect(() => {
  //   console.log(orderCodeCheckIndex);
  // }, [orderCodeCheckIndex]);

  // useEffect(() => {
  //   console.log(orderCodeCheckWord);
  // }, [orderCodeCheckWord]);

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
    OrderSearchFetch(0, "");
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

      console.log("이거찾아줘:", productNumber);
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
    const updatedCities = orderSearch.map(isSelected => ({
      ...isSelected,
      isSelected: !isChecked,
    }));
    setOrderSearch(updatedCities);
    console.log("이거 ????:", updatedCities);
  };
  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
    const sendQuery = `filter4=${value}&`;
    OrderSearchFetch(0, sendQuery);
  };
  const handleReset = () => {
    const send = `filter0=0&`;
    OrderSearchFetch(0, send);
  };
  // const handleChangeDelivery = () => {
  //   const
  // }
  return (
    <ProductInfo>
      <h2>배송 관리</h2>
      <div className="search-wrap">
        <h3>검색어</h3>
        <Search
          orderCodeCheckIndex={orderCodeCheckIndex}
          setOrderCodeCheckIndex={setOrderCodeCheckIndex}
          orderCodeCheckWord={orderCodeCheckWord}
          setOrderCodeCheckWord={setOrderCodeCheckWord}
        />
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
          <button onClick={handleReset}>초기화</button>
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
              // { value: "통합 검색", label: "통합 검색" },
              { value: 1, label: "준비중" },
              { value: 2, label: "배송 중" },
              { value: 0, label: "배송 완료" },
            ]}
          />
          {/* <button>email 발송</button> */}
        </div>
        <div>{/* <button onClick={}> 변경</button> */}</div>
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
