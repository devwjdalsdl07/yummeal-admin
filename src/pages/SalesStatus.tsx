import styled from "@emotion/styled";
import { DatumId } from "@nivo/pie";
import MyResponsivePie from "../components/SaleStatusChart";

const SalesStatus = () => {
  const Wrap = styled.div`
    max-width: 1400px;
    margin: 0 auto;
    .pie-chart {
      height: 500px;
      margin-bottom: 50px;
    }
    .menu {
      display: grid;
      grid-template-columns: 150px 200px 400px 150px 200px;
      text-align: center;
      max-width: 1400px;
      justify-content: space-between;
      background: #bfb6b6;
      border-bottom: 1px solid #aaa;
      & > div {
        padding: 10px;
      }
    }
    .table {
      display: grid;
      justify-items: stretch;
      text-align: center;
      max-width: 1400px;
      & > div {
        border-bottom: 1px solid #aaa;
      }
      .table-content-wrap {
        display: flex;
        justify-content: space-between;
        &:hover {
          background: #ebe1e1;
        }
        & > div {
          padding: 10px;
        }
        & > div:nth-child(1) {
          width: 130px;
        }
        & > div:nth-child(2) {
          width: 180px;
        }
        & > div:nth-child(3) {
          width: 380px;
        }
        & > div:nth-child(4) {
          width: 130px;
        }
        & > div:nth-child(5) {
          width: 180px;
        }
      }
    }
  `;

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
  const pieData: Array<DatumId> = [
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
      SalesStatus
      <div>
        <div className="pie-chart">
          <MyResponsivePie data={pieData} />
        </div>
        <div className="menu">
          <div>순위</div>
          <div>상품분류</div>
          <div>상품명</div>
          <div>판매수량</div>
          <div>매출액</div>
        </div>
        <div className="table">
          {initialData.map((item: IStatus, idx: number) => {
            return (
              <div key={idx} className="table-content-wrap">
                <div>{item.rank}</div>
                <div>{item.category}</div>
                <div>{item.prodname}</div>
                <div>{item.volumn}</div>
                <div>{item.totalprice}</div>
              </div>
            );
          })}
        </div>
      </div>
    </Wrap>
  );
};

export default SalesStatus;
