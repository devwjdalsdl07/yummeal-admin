import {
  faCircleUser,
  faHouseChimneyUser,
  faStore,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { HeaderCss } from "../style/SiderCss";
import { useSetRecoilState } from "recoil";
import { accessTokenState } from "../atom/atom";

const Header = () => {
  const setAccesToken = useSetRecoilState(accessTokenState);
  const [infoToggle, setInfoToggle] = useState<boolean>(false);
  const navigate = useNavigate();
  const handleUserMenu = () => {
    setInfoToggle(!infoToggle);
  };
  console.log(infoToggle);
  const handleLogOutClick = () => {
    setAccesToken("");
    localStorage.removeItem("accessToken");
    navigate("/");
    setInfoToggle(false);
  };
  return (
    <HeaderCss>
      <i onClick={handleUserMenu}>
        <FontAwesomeIcon icon={faCircleUser} />
      </i>
      {infoToggle && (
        <div className="userinfo-wrap">
          <div className="home" onClick={() => navigate("/")}>
            <i>
              <FontAwesomeIcon icon={faHouseChimneyUser} />
            </i>
            <div>홈 가기</div>
          </div>
          <div className="shoppingmall">
            <Link to="http://192.168.0.144:5001" target="_blank">
              <i>
                <FontAwesomeIcon icon={faStore} />
              </i>
              <div>쇼핑몰 가기</div>
            </Link>
          </div>
          <button className="logout" onClick={handleLogOutClick}>
            로그아웃
          </button>
        </div>
      )}
    </HeaderCss>
  );
};

export default Header;
