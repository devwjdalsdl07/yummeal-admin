import {
  faCircleUser,
  faHouseChimneyUser,
  faStore,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../atom/atom";
import { HeaderCss } from "../style/SiderCss";

const Header = () => {
  const [accessToken, setAccessToken] = useRecoilState<any>(accessTokenState);
  const [infoToggle, setInfoToggle] = useState<boolean>(false);
  const navigate = useNavigate();
  const location = useLocation();

  // 유저메뉴 토글
  const handleUserMenu = () => {
    setInfoToggle(true);
  };

  // 홈버튼
  const handleHome = () => {
    navigate("/admin");
  };

  // 로그아웃
  const handleLogOut = async () => {
    setAccessToken("");
    localStorage.removeItem("accessToken");
    navigate("/admin");
    setInfoToggle(false);
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
          <div className="bt-close">
            <i>
              <FontAwesomeIcon
                icon={faXmark}
                onClick={() => setInfoToggle(false)}
              />
            </i>
          </div>
          <div className="home" onClick={handleHome}>
            <i>
              <FontAwesomeIcon icon={faHouseChimneyUser} />
            </i>
            <div>홈 가기</div>
          </div>
          <div className="shoppingmall">
            <Link
              to="http://112.222.157.156:5001/"
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
