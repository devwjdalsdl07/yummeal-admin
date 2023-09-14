import axios, { AxiosError } from "axios";

//주문내역 조회/검색/필터
export const getOrder = async (_page: number, _query: string) => {
  console.log("주문내역 조회 : ", _query);
  try {
    const res = await axios.get(
      `/api/admin/order?${_query}page=${_page - 1}&size=10&sort=createdAt,asc`,
    );
    const result = res.data;
    console.log(result);
    return result;
  } catch (err: unknown) {
    if (axios.isAxiosError(err)) {
      const axiosError = err as AxiosError;
      if (axiosError.response) {
        // 서버 응답이 있는 경우
        const errorMessage = axiosError.response.data as any;
        alert(errorMessage.message);
      }
    }
  }
};

//배송상태변경
export const putShipment = async (orderCode: any[], shipment: string) => {
  try {
    const res = await axios.put(
      `/api/admin/order/shipment?orderCode=${orderCode}&shipment=${shipment}`,
      {
        orderCode: orderCode,
        shipment: shipment,
      },
    );
    const result = res.data;
    console.log(result);
  } catch (err) {
    console.log("왜 실패???:", err);
  }
};
