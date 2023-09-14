import { ExclamationCircleFilled } from "@ant-design/icons";
import { DatePicker, Modal, Select } from "antd";
import { RangePickerProps } from "antd/es/date-picker";
import dayjs from "dayjs";
import { useEffect, useState } from "react";
import { getOrder, putShipment } from "../api/DeliveryFatch";
import Checkbox from "../components/Checkbox";
import Paging from "../components/Paging";
import Search from "../components/Search";
import { StyledInput, StyledLabel, StyledP } from "../style/DeliveryCss";
import { ProductInfo } from "../style/ProductInfoCss";
import { OrdersResponse } from "./OrderStatus";

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
  isSelected?: boolean;
}
export interface OrderResponse {
  content: Order[];
}
const Delivery = () => {
  // 상태 변수 선언
  const [orderSearchAll, setOrderSearchAll] = useState<OrdersResponse | null>(
    null,
  );
  const [orderSearch, setOrderSearch] = useState<Array<Order>>([]);
  const [selectAll, setSelectAll] = useState(false);
  const [orderCodeCheckIndex, setOrderCodeCheckIndex] = useState<
    number | string
  >(0);
  const [orderCodeCheckWord, setOrderCodeCheckWord] = useState<string>("");
  const [stDay, setStDay] = useState<string>("");
  const [edDay, setEdDay] = useState<string>("");
  const [pageNm, setPageNm] = useState<number>(1);

  // ant modal
  const { confirm } = Modal;

  const onChange: RangePickerProps["onChange"] = (date, dateString) => {
    const startDate = dayjs(dateString[0]);
    const endDate = dayjs(dateString[1]);
    const formattedStartDate = startDate.format("YYYY-MM-DD");
    const formattedEndDate = endDate.format("YYYY-MM-DD");
    setStDay(formattedStartDate);
    setEdDay(formattedEndDate);
  };

  // 배송 상태 조회
  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
    const sendQuery = `filter4=${value}&`;
    orderSearchFetch(pageNm, sendQuery);
  };

  // 검색 버튼 클릭

  const handleSearch = () => {
    let sendQuery = "";
    if (stDay === "" || edDay === "") {
      sendQuery = `filter${orderCodeCheckIndex}=${orderCodeCheckWord}&`;
    } else {
      sendQuery = `startDate=${stDay}&endDate=${edDay}&`;
    }
    orderSearchFetch(pageNm, sendQuery);
  };

  // 초기화 버튼 클릭
  const handleReset = () => {
    setStDay("");
    setEdDay("");
    setOrderCodeCheckWord("");
    setOrderCodeCheckIndex(0);
    const send = `filter0=0&`;
    orderSearchFetch(pageNm, send);
  };

  const orderSearchFetch = async (_page: number, _query: string) => {
    const sendQuery = _query;
    try {
      const orderSearchJson = await getOrder(_page, sendQuery);
      setOrderSearch(orderSearchJson.content);
      setOrderSearchAll(orderSearchJson);
      return orderSearchJson;
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    orderSearchFetch(pageNm, "");
  }, [pageNm]);

  const lists: Array<JSX.Element> = orderSearch.map(
    (order: Order, index: number) => {
      const ordercode = order.ordercode;
      const createdAt = order.createdAt;
      const shipment = order.shipment;
      const userName = order.userName;
      const productName = order.productName;
      const productNumber =
        order.orderDetailVo.length > 0 ? order.orderDetailVo[0].productId : 0;
      const productCount =
        order.orderDetailVo.length > 0 ? order.orderDetailVo[0].count : 0;
      const totalProductPrice =
        order.orderDetailVo.length > 0 ? order.orderDetailVo[0].totalPrice : 0;
      const totalDiscount = order.usepoint;
      const totalOrderAmount = totalProductPrice - totalDiscount;
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
          isSelected={order.isSelected || false}
          handleCheckboxChange={() => {
            const updatedOrders = orderSearch.map(item => {
              if (item.orderId === order.orderId) {
                return { ...item, isSelected: !item.isSelected };
              }
              return item;
            });
            setOrderSearch(updatedOrders);
            const allSelected = updatedOrders.every(item => item.isSelected);
            setSelectAll(allSelected);
          }}
        />
      );
    },
  );

  //배송 isSelected = true 찾기
  const deliveryBt: any = orderSearch.filter(item => item.isSelected);

  // 모든 주문 선택/해제

  const handleAllCheck = (isChecked: boolean) => {
    const updatedOrders = orderSearch.map(order => ({
      ...order,
      isSelected: isChecked,
    }));
    setOrderSearch(updatedOrders);
    setSelectAll(isChecked);
  };

  // 회원탈퇴 모달
  const handleShipmentSubmit = async (ordercode: any[], shipment: string) => {
    const ordercodeSubmit = ordercode.map((item: any) => item.ordercode);
    confirm({
      title: "배송상태 변경 하시겠습니까?",
      icon: <ExclamationCircleFilled />,
      content: "변경된 배송상태는 복구되지 않습니다.",
      async onOk() {
        await putShipment(ordercodeSubmit, shipment);
        await orderSearchFetch(0, "");
      },
      onCancel() {
        console.log("Cancel");
      },
    });
  };

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
        <RangePicker
          onChange={onChange}
          inputReadOnly={true}
          value={stDay && edDay ? [dayjs(stDay), dayjs(edDay)] : undefined}
          allowClear={false}
        />

        <div className="search-bt">
          <button onClick={handleSearch}>검색</button>

          <button onClick={handleReset}>초기화</button>
        </div>
      </div>

      <div className="contents-wrap">
        <div className="box-layout">
          <span>
            배송상태<p>조회/변경</p>
          </span>
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
                <button onClick={() => handleShipmentSubmit(deliveryBt, "2")}>
                  배송중
                </button>
              </li>
              <li>
                <button onClick={() => handleShipmentSubmit(deliveryBt, "0")}>
                  배송완료
                </button>
              </li>
              <li>
                <button onClick={() => handleShipmentSubmit(deliveryBt, "3")}>
                  주문취소
                </button>
              </li>
            </ul>
          </div>
        </div>
        <div className="content-info">
          <ul className="title">
            <li>
              <StyledLabel>
                <StyledInput
                  type="checkbox"
                  checked={selectAll}
                  onChange={e => handleAllCheck(e.target.checked)}
                />
                <StyledP></StyledP>
              </StyledLabel>
            </li>
            <li>주문번호</li>
            <li>배송상태</li>
            <li>주문일시</li>
            <li>주문자명</li>
            <li>주문상품</li>
            <li>상품주문번호</li>
            <li>수량</li>
            <li>총상품금액</li>
            <li>총할인금액</li>
            <li>총주문금액</li>
          </ul>
          <div className="item-list">{lists}</div>
        </div>
        <div className="page-bt">
          <Paging
            pageNm={pageNm}
            setPageNm={setPageNm}
            totalItem={orderSearchAll?.totalElements}
          />
        </div>
      </div>
    </ProductInfo>
  );
};
export default Delivery;
