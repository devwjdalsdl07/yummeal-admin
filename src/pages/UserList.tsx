import { ExclamationCircleFilled } from "@ant-design/icons";
import { Modal } from "antd";
import axios from "axios";
import { useEffect, useState } from "react";
import Paging from "../components/Paging";
import { UserListWrap } from "../style/UserListCss";

interface User {
  iuser: number;
  password: string;
  image: null | string;
  name: string;
  birthday: string;
  mobile_nb: string;
  createdAt: string;
  uid: string;
  providerType: string;
  zipCode: null | string;
  address: null | string;
  addressDetail: null | string;
  nickNm: string;
  point: number;
  delYn: null | string;
}

interface UserListResponse {
  page: number;
  count: number;
  maxPage: number;
  list: User[];
}

const UserList = () => {
  // 회원정보 state
  const [userData, setUserData] = useState<UserListResponse>({
    page: 0,
    count: 0,
    maxPage: 0,
    list: [],
  });
  // 페이징 state
  const [pageNm, setPageNm] = useState<number>(1);
  // ant modal
  const { confirm } = Modal;

  // 회원정보 불러오기
  const userGet = async (page: number) => {
    const res = await axios.get(
      `/api/admin/search?page=${page - 1}&size=10&sort=createdAt`,
    );
    const result = res.data;
    console.log("넘어와주세요", result);
    setUserData(result);
  };

  // 페이지에 따른 회원정보 요청
  useEffect(() => {
    userGet(pageNm);
  }, [pageNm]);

  // 회원탈퇴 모달
  const showConfirm = (uid: string) => {
    confirm({
      title: "정말로 탈퇴시키겠습니까?",
      icon: <ExclamationCircleFilled />,
      content: "탈퇴된 회원정보는 복구되지 않습니다.",
      async onOk() {
        const result = await axios.delete(`/api/admin/uid?uid=${uid}`);
        console.log(result);
      },
      onCancel() {
        console.log("Cancel");
      },
    });
  };

  return (
    <UserListWrap>
      <h2>UserList</h2>
      <div className="contents-wrap">
        <div className="user-info">
          <ul className="user-info-menu">
            <li>유저번호</li>
            <li>이름</li>
            <li>아이디</li>
            <li>닉네임</li>
            <li>마일리지</li>
            <li>가입일</li>
            <li>회원탈퇴</li>
          </ul>
          <ul className="user-info-content">
            {userData?.list?.map((item: User, idx: number) => (
              <li key={idx} className="content-grid">
                <ul>
                  <li>{item.iuser}</li>
                  <li>{item.name}</li>
                  <li>{item.uid}</li>
                  <li>{item.nickNm}</li>
                  <li>{item.point}</li>
                  <li>{item.createdAt}</li>
                  <li>
                    {item.delYn == "0" || item.delYn == null ? (<button
                      className="userdelete"
                      onClick={() => showConfirm(item.uid)}
                    >
                      탈퇴
                    </button>):(<button disabled>탈퇴처리</button>)}
                  </li>
                </ul>
              </li>
            ))}
          </ul>
        </div>
        <Paging
          pageNm={pageNm}
          setPageNm={setPageNm}
          totalItem={userData.count}
        />
      </div>
    </UserListWrap>
  );
};

export default UserList;