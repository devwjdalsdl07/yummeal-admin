import axios from "axios";
// //주문내역 조회/검색/필터
// export const getOrderSearch = async (
//   _ordercode: number | undefined,
//   _orderDetailId: number,
//   _shipment: number,
//   _startDate: string | undefined,
//   _endDate: string | undefined,
//   _page: number,
// ) => {
//   try {
//     const res = await axios.get(
//       `/api/admin/order?filter2=${_ordercode}&filter3=${_orderDetailId}&filter4=${_shipment}&startDate=${_startDate}&endDate=${_endDate}&page=${_page}&size=10&sort=createdAt`,
//     );

//     const result = res.data;
//     console.log("getOrderSearch 요청완료 성공!!", result);
//     return result;
//   } catch (err) {
//     console.log(err);
//   }
// };

// 주문내역 조회
export const getOrder = async (_page: number, _query: string) => {
  try {
    const res = await axios.get(
      `/api/admin/order?page=${_page}&size=10&sort=createdAt,asc`,
    );
    const result = res.data;
    console.log(result);
    return result;
  } catch (err) {
    console.log(err);
  }
};

// //배송상태 변경
// export const putShipment = async (orderCode:number,shipment:number) => {
//   try {
//     const res = await axios.put(
//       `/api/admin/order/shipment?orderCode=${orderCode}&shipment=${shipment}`
//     )
//   } catch (err) {
//     console.log(err);
//   }
// };

//주문상품정보 > 특정 주문 번호에서 주문한 상품 전체조회
export const getOrderItemAll = async (_orderCode: number) => {
  try {
    const res = await axios.get(`/api/admin/order/${_orderCode}`);
    const result = res.data;
    console.log("getOrderAll 요청완료 성공!!", result);
    return result;
  } catch (err) {
    console.log(err);
  }
};
