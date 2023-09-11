import React from "react";
import { LoginCss } from "../style/LoginCss";

const Login = () => {
  return (
    <LoginCss>
      <div className="contents-wrap">
        <div className="content-info">
          <h2>관리자 로그인</h2>
          <div className="content-input">
           <p><input type="text" placeholder="아이디를 입력하세요"/></p>
           <p><input type="text" placeholder="비밀번호를 입력하세요"/></p>
          </div>
          <div>
            <button>로그인</button>
          </div>
        </div>
      </div>
    </LoginCss>
  );
};

export default Login;
