import {
  faCircleUser,
  faHouseChimneyUser,
  faStore,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { HeaderCss } from "../style/SiderCss";

const Header = ({setIsLogin}:{setIsLogin:React.Dispatch<React.SetStateAction<string | null>>}) => {
  const [infoToggle, setInfoToggle] = useState<boolean>(false);
  const navigate = useNavigate();

  // 유저메뉴 토글
  const handleUserMenu = () => {
    setInfoToggle(!infoToggle);
  };

  // 로그아웃
  const handleLogOut = async () => {
    const res = await axios.get("/api/user/sign-out");
    localStorage.removeItem("accessToken");
    navigate("/");
    setIsLogin(null)
  };

  return (
    <HeaderCss>
      <i onClick={handleUserMenu}>
        <FontAwesomeIcon icon={faCircleUser} />
      </i>
      {infoToggle && (
        <div className="userinfo-wrap">
          <div className="home" onClick={() => navigate("/main")}>
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
          <button className="logout" onClick={handleLogOut}>
            로그아웃
          </button>
        </div>
      )}
    </HeaderCss>
  );
};

export default Header;
