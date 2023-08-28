import MyResponsivePie from "../components/SaleStatusChart";
import { Wrap } from "../style/SalesStatusCss";

export interface IPieData {
  id: string;
  label: string;
  value: number;
  color: string;
}

const SalesStatus = () => {
  interface IStatus {
    rank: number;
    category: string | number;
    prodname: string;
    volumn: number;
    totalprice: string | number;
  }

  const initialData: Array<IStatus> = [
    {
      rank: 1,
      category: "체리",
      prodname: "체리",
      volumn: 123456789,
      totalprice: 30,
    },
    {
      rank: 2,
      category: "딸기",
      prodname: "딸기",
      volumn: 234567891,
      totalprice: 25,
    },
    {
      rank: 3,
      category: "메론",
      prodname: "메론",
      volumn: 345678912,
      totalprice: 10,
    },
    {
      rank: 4,
      category: "수박",
      prodname: "수박",
      volumn: 456789123,
      totalprice: 8,
    },
    {
      rank: 5,
      category: "복숭아",
      prodname: "복숭아",
      volumn: 567891234,
      totalprice: 6,
    },
    {
      rank: 6,
      category: "사과",
      prodname: "사과",
      volumn: 678912345,
      totalprice: 5,
    },
    {
      rank: 7,
      category: "바나나",
      prodname: "바나나",
      volumn: 789123456,
      totalprice: 4,
    },
    {
      rank: 8,
      category: "포도",
      prodname: "포도",
      volumn: 891234567,
      totalprice: 3,
    },
    {
      rank: 9,
      category: "참외",
      prodname: "참외",
      volumn: 912345678,
      totalprice: 2,
    },
    {
      rank: 10,
      category: "배",
      prodname: "배",
      volumn: 1234567890,
      totalprice: 1,
    },
  ];

  const pieData: Array<IPieData> = [
    {
      id: "stylus",
      label: "stylus",
      value: 53,
      color: "hsl(29, 70%, 50%)",
    },
    {
      id: "python",
      label: "python",
      value: 431,
      color: "hsl(25, 70%, 50%)",
    },
    {
      id: "c",
      label: "c",
      value: 10,
      color: "hsl(178, 70%, 50%)",
    },
    {
      id: "lisp",
      label: "lisp",
      value: 351,
      color: "hsl(275, 70%, 50%)",
    },
    {
      id: "make",
      label: "make",
      value: 564,
      color: "hsl(5, 70%, 50%)",
    },
  ];

  return (
    <Wrap>
      <div className="pie-chart">
        <MyResponsivePie data={pieData} />
      </div>
      <div className="content-wrap">
        <div className="menu">
          <div>순위</div>
          <div>상품분류</div>
          <div>상품명</div>
          <div>판매수량</div>
          <div>매출액</div>
        </div>
        <div className="table">
          {initialData.map((item: IStatus, idx: number) => (
            <div key={idx} className="table-content-wrap">
              <div>{item.rank}</div>
              <div>{item.category}</div>
              <div>{item.prodname}</div>
              <div>{item.volumn}</div>
              <div>{item.totalprice}</div>
            </div>
          ))}
        </div>
      </div>
    </Wrap>
  );
};

export default SalesStatus;
