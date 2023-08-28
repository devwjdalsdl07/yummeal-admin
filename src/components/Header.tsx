import styled from "@emotion/styled";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const Wrap = styled.div`
    display: flex;
    width: 250px;
    height: 100vh;
    font-size: 25px;
    text-align: center;
    background: #aaa;
    .menuWrap {
      padding: 100px 0;
      width: 100%;
      cursor: pointer;
      .mainMenu {
        padding: 20px;
      }
    }
    .subWrap {
      display: none;
    }
    .subWrap.active {
      display: block;
      padding: 10px;
      .subMenu {
        padding: 5px;
        font-size: 20px;
      }
      .subMenu.active {
        border-radius: 8px;
        background: #fff;
      }
    }
  `;

  const [activeSubWrap, setActiveSubWrap] = useState<number | null>(null);
  const [activeSubMenu, setActiveSubMenu] = useState<number | null>(null);

  interface IProdSub {
    value: string;
    path: string;
  }

  const prodSubMenus: Array<IProdSub> = [
    { value: "상품 조회", path: "/" },
    { value: "상품 등록", path: "/" },
    { value: "판매 현황", path: "/salestatus" },
    { value: "상품 랭킹", path: "/best" },
  ];
  const orderSubMenus: Array<IProdSub> = [
    { value: "배송 관리", path: "/" },
    { value: "배송 상태", path: "/" },
    { value: "주문 현황", path: "/orderstatus" },
  ];

  const handleMenuClick = (
    e: React.MouseEvent<HTMLSpanElement, MouseEvent>,
    index: number,
  ) => {
    e.stopPropagation();
    toggleSubWrap(index);
    setActiveSubMenu(null);
  };

  const toggleSubWrap = (index: number | null) => {
    if (activeSubWrap === index) {
      setActiveSubWrap(null);
    } else {
      setActiveSubWrap(index);
    }
  };

  const toggleSubMenu = (
    index: number,
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  ) => {
    e.stopPropagation();
    setActiveSubMenu(index);
  };

  return (
    <Wrap>
      <ul className="menuWrap">
        <li className="mainMenu">
          <Link to="/">홈</Link>
        </li>
        <li className="mainMenu">
          <Link to="/">회원 관리</Link>
        </li>
        <li className="mainMenu">
          <span onClick={e => handleMenuClick(e, 1)}>상품 관리</span>
          <ul className={`subWrap ${activeSubWrap === 1 ? "active" : ""}`}>
            {prodSubMenus.map((item: IProdSub, index: number) => (
              <li
                key={index + 4}
                className={`subMenu ${activeSubMenu === index ? "active" : ""}`}
              >
                <Link to={item.path} onClick={e => toggleSubMenu(index, e)}>
                  {item.value}
                </Link>
              </li>
            ))}
          </ul>
        </li>
        <li className="mainMenu">
          <span onClick={e => handleMenuClick(e, 2)}>주문 관리</span>
          <ul className={`subWrap ${activeSubWrap === 2 ? "active" : ""}`}>
            {orderSubMenus.map((item: IProdSub, index: number) => (
              <li
                key={index + 4}
                className={`subMenu ${activeSubMenu === index ? "active" : ""}`}
              >
                <Link to={item.path} onClick={e => toggleSubMenu(index, e)}>
                  {item.value}
                </Link>
              </li>
            ))}
          </ul>
        </li>
        <li className="mainMenu">로그아웃</li>
      </ul>
    </Wrap>
  );
};

export default Header;
