
import React from "react";
import { HeaderCss } from "../style/SiderCss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <HeaderCss>
      <i><FontAwesomeIcon icon={faCircleUser} /></i>
    </HeaderCss>

  );
};

export default Header;
