import { Select } from "antd";
import axios from "axios";
import { useEffect, useState } from "react";
import Paging from "../components/Paging";
import { SaleStatusWrap } from "../style/SalesStatusCss";

// 판매량 데이터 타입
interface IStatus {
  productId: number;
  count: number;
  pname: string;
  pprice: number;
}

// 올해연도, 월 구하기
const thisYear = new Date().getFullYear()
const thisMonth = ("00"+(new Date().getMonth() + 2).toString()).slice(-2)

const SalesStatus = () => {
  const [saleVolum, setSaleVolum] = useState<Array<IStatus>>([]);
  const [pageNm, setPageNm] = useState(1);
  const [year, setYear] = useState(thisYear.toString());
  const [month, setMonth] = useState(thisMonth);

  // 판매량 데이터
  const saleVolumData = async (page:number, year: string, month: string) => {
    const res = await axios.get(
      `/api/mypage/salevolum?page=${page - 1}&row=10&year=${year}&month=${month}`,
    );
    const result = res.data;
    console.log(result);
    setSaleVolum(result);
  };

  // 셀렉트박스 연도 업데이트
  const handleYearChange = (value: string) => {
    setYear(value);
  };

  // 셀렉트박스 월 업데이트
  const handleMonthChange = (value: string) => {
    setMonth(value);
  };

  useEffect(() => {
    saleVolumData(pageNm, year, month);
  }, [pageNm, year, month]);

  return (
    <SaleStatusWrap>
      <h2>판매현황</h2>
      <div className="contents-wrap">
        <div className="content-wrap">
          <div className="menu">
            <div>상품번호</div>
            <div>상품분류</div>
            <div>상품명</div>
            <div>판매수량</div>
            <div>매출액</div>
          </div>
          <div className="table">
            {saleVolum.map((item: IStatus, idx: number) => (
              <div key={idx} className="table-content-wrap">
                <div>{idx + 1}</div>
                <div>{item.pname.slice(0, 6)}</div>
                <div>{item.pname.slice(6)}</div>
                <div>{item.count}</div>
                <div>{item.pprice}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="select-wrap">
          <Select
            defaultValue="연도 선택"
            style={{ width: 130 }}
            onChange={handleYearChange}
            options={[
              {
                value: `${thisYear - 1}`,
                label: `${thisYear - 1}`,
              },
              {
                value: `${thisYear}`,
                label: `${thisYear}`,
              },
            ]}
          />
          <Select
            defaultValue="월 선택"
            style={{ width: 130 }}
            onChange={handleMonthChange}
            options={[
              { value: "01", label: "1월" },
              { value: "02", label: "2월" },
              { value: "03", label: "3월" },
              { value: "04", label: "4월" },
              { value: "05", label: "5월" },
              { value: "06", label: "6월" },
              { value: "07", label: "7월" },
              { value: "08", label: "8월" },
              { value: "09", label: "9월" },
              { value: "10", label: "10월" },
              { value: "11", label: "11월" },
              { value: "12", label: "12월" },
            ]}
          />
        </div>
        <Paging pageNm={pageNm} setPageNm={setPageNm} totalItem={saleVolum.length} />
      </div>
    </SaleStatusWrap>
  );
};

export default SalesStatus;
