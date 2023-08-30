import { useState } from "react";
import { useNavigate } from "react-router";
import Paging from "../components/Paging";
import SearchBar from "../components/SearchBar";
import { OrderStatusWrap } from "../style/OrderStatutsCss";

const OrderStatus = () => {
  interface IInit {
    complete: boolean;
    rank: number;
    createAt: string;
    orderNm: string;
    userName: string;
    prodName: string;
    totalProdPrice: number;
    discount: number;
    totalOrderPrice: number;
  }

  const initData: Array<IInit> = [
    {
      complete: false,
      rank: 1,
      createAt: "2023-08-18",
      orderNm: "230828 - 1 - 1",
      userName: "홍길동",
      prodName: "체리",
      totalProdPrice: 10000,
      discount: 1000,
      totalOrderPrice: 9000,
    },
    {
      complete: false,
      rank: 2,
      createAt: "2023-08-19",
      orderNm: "230828 - 1 - 2",
      userName: "홍길순",
      prodName: "딸기",
      totalProdPrice: 20000,
      discount: 0,
      totalOrderPrice: 20000,
    },
    {
      complete: false,
      rank: 3,
      createAt: "2023-08-20",
      orderNm: "230828 - 1 - 3",
      userName: "홍길동",
      prodName: "메론",
      totalProdPrice: 30000,
      discount: 0,
      totalOrderPrice: 30000,
    },
    {
      complete: false,
      rank: 4,
      createAt: "2023-08-21",
      orderNm: "230828 - 1 - 4",
      userName: "홍길동",
      prodName: "수박",
      totalProdPrice: 40000,
      discount: 0,
      totalOrderPrice: 40000,
    },
    {
      complete: false,
      rank: 5,
      createAt: "2023-08-22",
      orderNm: "230828 - 1 - 5",
      userName: "홍길동",
      prodName: "복숭아",
      totalProdPrice: 50000,
      discount: 0,
      totalOrderPrice: 50000,
    },
    {
      complete: false,
      rank: 6,
      createAt: "2023-08-23",
      orderNm: "230828 - 1 - 6",
      userName: "홍길동",
      prodName: "사과",
      totalProdPrice: 60000,
      discount: 0,
      totalOrderPrice: 60000,
    },
    {
      complete: false,
      rank: 7,
      createAt: "2023-08-24",
      orderNm: "230828 - 1 - 7",
      userName: "홍길동",
      prodName: "바나나",
      totalProdPrice: 70000,
      discount: 0,
      totalOrderPrice: 70000,
    },
    {
      complete: false,
      rank: 8,
      createAt: "2023-08-25",
      orderNm: "230828 - 1 - 8",
      userName: "홍길동",
      prodName: "포도",
      totalProdPrice: 80000,
      discount: 0,
      totalOrderPrice: 80000,
    },
    {
      complete: false,
      rank: 9,
      createAt: "2023-08-26",
      orderNm: "230828 - 1 - 9",
      userName: "홍길동",
      prodName: "참외",
      totalProdPrice: 90000,
      discount: 0,
      totalOrderPrice: 90000,
    },
    {
      complete: false,
      rank: 10,
      createAt: "2023-08-27",
      orderNm: "230828 - 1 - 10",
      userName: "홍길동",
      prodName: "배",
      totalProdPrice: 100000,
      discount: 0,
      totalOrderPrice: 100000,
    },
  ];

  const [orderList, setOrderList] = useState<Array<IInit>>(initData);
  const navigate = useNavigate();

  const handleCheckChange = (idx: number) => {
    const updatedData = orderList.map((item, index) => {
      if (idx === index) {
        return { ...item, complete: !item.complete };
      }
      return item;
    });
    setOrderList(updatedData);
  };

  const handleDetailMove = () => {
    navigate("/orderdetail");
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
          {orderList.map((item: IInit, idx: number) => (
            <div key={idx} className="table-content-wrap">
              {/* <div>
                <input
                  type="checkbox"
                  className="checkbox"
                  checked={item.complete}
                  onChange={() => handleCheckChange(idx)}
                />
              </div> */}
              <div>{item.rank}</div>
              <div>{item.createAt}</div>
              <div className="order-div" onClick={handleDetailMove}>
                {item.orderNm}
              </div>
              <div>{item.userName}</div>
              <div>{item.prodName}</div>
              <div>{item.totalProdPrice}</div>
              <div>{item.discount}</div>
              <div>{item.totalOrderPrice}</div>
            </div>
          ))}
        </div>
        <Paging />
      </div>
    </OrderStatusWrap>
  );
};

export default OrderStatus;
