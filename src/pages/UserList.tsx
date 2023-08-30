import { Checkbox } from "antd";
import { CheckboxChangeEvent } from "antd/es/checkbox";
import { CheckboxValueType } from "antd/es/checkbox/Group";
import { useState } from "react";
import { UserListWrap } from "../style/UserListCss";

interface IUserData {
  complete: boolean;
  number: number;
  userName: string;
  userId: string;
  mileage: number;
  orderNm: number;
  joinDate: string;
}

const UserList = () => {
  const data: Array<IUserData> = [
    {
      complete: false,
      number: 1,
      userName: "홍길동",
      userId: "test1@naver.com",
      mileage: 1000,
      orderNm: 5,
      joinDate: "2023-02-13",
    },
    {
      complete: false,
      number: 2,
      userName: "홍길동",
      userId: "test2@naver.com",
      mileage: 1000,
      orderNm: 5,
      joinDate: "2023-02-13",
    },
    {
      complete: false,
      number: 3,
      userName: "홍길동",
      userId: "test3@naver.com",
      mileage: 1000,
      orderNm: 5,
      joinDate: "2023-02-13",
    },
    {
      complete: false,
      number: 4,
      userName: "홍길동",
      userId: "test4@naver.com",
      mileage: 1000,
      orderNm: 5,
      joinDate: "2023-02-13",
    },
  ];
  const plainOptions: CheckboxValueType[] = data.map(item => item.userId);
  const [checkedList, setCheckedList] = useState<CheckboxValueType[]>([]);

  const checkAll = plainOptions.length === checkedList.length;

  const onCheckChange = (userId: string, e: CheckboxChangeEvent) => {
    const newCheckedList = e.target.checked
      ? [...checkedList, userId]
      : checkedList.filter(id => id !== userId);
    setCheckedList(newCheckedList);
  };

  const onCheckAllChange = (e: CheckboxChangeEvent) => {
    setCheckedList(e.target.checked ? plainOptions : []);
  };

  return (
    <UserListWrap>
      <h2>UserList</h2>
      <div className="contents-wrap">
        <div className="prod-info">
          <ul className="prod-info-menu">
            <li>
              <Checkbox onChange={onCheckAllChange} checked={checkAll} />
            </li>
            <li>번호</li>
            <li>이름</li>
            <li>아이디</li>
            <li>마일리지</li>
            <li>주문건수</li>
            <li>가입일</li>
            <li>회원탈퇴</li>
          </ul>
          <ul className="prod-info-content">
            {/* {data.map((item: IUserData, idx: number) => (
              <li key={idx} className="content-grid">
                <ul>
                  <li><input type="checkbox" />{item.complete}</li>
                  <li>{item.number}</li>
                  <li>{item.userName}</li>
                  <li>{item.userId}</li>
                  <li>{item.mileage}</li>
                  <li>{item.orderNm}</li>
                  <li>{item.joinDate}</li>
                </ul>
              </li>
            ))} */}
            {data.map((item: IUserData, idx: number) => (
              <li key={idx} className="content-grid">
                <ul>
                  <li>
                    <Checkbox
                      value={item.userId}
                      checked={checkedList.includes(item.userId)}
                      onChange={e => onCheckChange(item.userId, e)}
                    />
                  </li>
                  <li>{item.number}</li>
                  <li>{item.userName}</li>
                  <li>{item.userId}</li>
                  <li>{item.mileage}</li>
                  <li>{item.orderNm}</li>
                  <li>{item.joinDate}</li>
                  <li>탈퇴버튼</li>
                </ul>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </UserListWrap>
  );
};

export default UserList;
