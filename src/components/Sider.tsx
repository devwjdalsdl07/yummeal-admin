import React, { useState } from "react";
import { Link } from "react-router-dom";
import { SiderCss } from "../style/SiderCss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClipboard,
  faUserPen,
  faBox,
  faAngleDown,
  faAngleUp,
} from "@fortawesome/free-solid-svg-icons";

interface MenuItem {
  name: string;
  icon: JSX.Element;
  subMenu?: string[];
}

const Sider: React.FC = () => {
  const [menuItems, setMenuItems] = useState<MenuItem[]>([
    { name: "회원 관리", icon: <FontAwesomeIcon icon={faUserPen} /> },
    {
      name: "상품 관리",
      icon: <FontAwesomeIcon icon={faBox} />,
      subMenu: ["판매 현황", "베스트 상품", "상품 관리"],
    },
    {
      name: "주문 관리",
      icon: <FontAwesomeIcon icon={faClipboard} />,
      subMenu: ["배송 관리", "주문 현황"],
    },
  ]);
  const [selectedSubMenu, setSelectedSubMenu] = useState<string[]>([]);
  const [iconToggle, setIconToggle] = useState<boolean>(false);
  const [iToggle, setIToggle] = useState<boolean>(false);
  const [subActive, setSubActive] = useState<string | null>(null);

  const toggleSubMenu = (index: number) => {
    if (selectedSubMenu.includes(index.toString())) {
      setSelectedSubMenu(
        selectedSubMenu.filter(item => item !== index.toString()),
      );
    } else {
      setSelectedSubMenu(prevSelectedSubMenu => [
        ...prevSelectedSubMenu,
        index.toString(),
      ]);
    }
  };
  return (
    <SiderCss>
      <ul className="menu">
        {menuItems.map((item, index) => (
          <li key={index} className="menu-item">
            <div onClick={() => toggleSubMenu(index)}>
              {item.name !== "" ? (
                <span className="menu-wrap">
                  <span className="icon">{item.icon}</span>
                  <span className="name">
                    {item.name === "회원 관리" ? (
                      <Link to="/admin/userlist">회원 관리</Link>
                    ) : item.name === "상품 관리" ? (
                      <div onClick={() => setIconToggle(!iconToggle)}>
                        <div>상품 관리 </div>
                        <i>
                          <FontAwesomeIcon
                            icon={iconToggle ? faAngleUp : faAngleDown}
                          />
                        </i>
                      </div>
                    ) : item.name === "주문 관리" ? (
                      <div onClick={() => setIToggle(!iToggle)}>
                        <div>주문 관리 </div>
                        <i>
                          <FontAwesomeIcon
                            icon={iToggle ? faAngleUp : faAngleDown}
                          />
                        </i>
                      </div>
                    ) : (
                      item.name
                    )}
                  </span>
                </span>
              ) : (
                <span>{item.name}</span>
              )}
            </div>
            {item.subMenu && selectedSubMenu.includes(index.toString()) && (
              <ul className="sub-menu">
                {item.subMenu.map((subItem, subIndex) => (
                  <li
                    key={subIndex}
                    className={`sub-menu-item ${
                      subItem === subActive ? "active" : ""
                    }`}
                    onClick={() => setSubActive(subItem)}
                  >
                    {subItem === "판매 현황" ? (
                      <Link to="/admin/salestatus">판매 현황</Link>
                    ) : subItem === "베스트 상품" ? (
                      <Link to="/admin/bestsale">베스트 상품</Link>
                    ) : subItem === "배송 관리" ? (
                      <Link to="/admin/delivery">배송 관리</Link>
                    ) : subItem === "주문 현황" ? (
                      <Link to="/admin/orderstatus">주문 현황</Link>
                    ) : subItem === "상품 관리" ? (
                      <Link to="/admin/adminitem">상품관리</Link>
                    ) : (
                      subItem
                    )}
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </SiderCss>
  );
};
export default Sider;
