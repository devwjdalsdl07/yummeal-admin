import {
  faCircleUser,
  faHouseChimneyUser,
  faStore,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { HeaderCss } from "../style/SiderCss";

const Header = () => {
  const [infoToggle, setInfoToggle] = useState<boolean>(false);
  const navigate = useNavigate();
  const location = useLocation();

  // 유저메뉴 토글
  const handleUserMenu = () => {
    setInfoToggle(true);
  };

  // 홈버튼
  const handleHome = () => {
    navigate("/");
  };

  // 로그아웃
  const handleLogOut = async () => {
    const res = await axios.get("/api/user/sign-out");
    localStorage.removeItem("accessToken");
    navigate("/");
  };

  useEffect(() => {
    setInfoToggle(false);
  }, [location.pathname]);

  return (
    <HeaderCss>
      <div className="title">
        <h1>YUMMEAL</h1>
        <h2>Admin</h2>
      </div>
      <i onClick={handleUserMenu}>
        <FontAwesomeIcon icon={faCircleUser} />
      </i>
      {infoToggle && (
        <div className="userinfo-wrap">
          <div className="home" onClick={handleHome}>
            <i>
              <FontAwesomeIcon icon={faHouseChimneyUser} />
            </i>
            <div>홈 가기</div>
          </div>
          <div className="shoppingmall">
            <Link
              to="http://192.168.0.144:5001"
              target="_blank"
              onClick={() => setInfoToggle(false)}
            >
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
