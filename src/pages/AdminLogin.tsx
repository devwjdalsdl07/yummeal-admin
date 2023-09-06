import React, { useState, ChangeEvent, FormEvent } from "react";
import {
  Button,
  Container,
  Input,
  LoginForm,
  Title,
} from "../style/AdminLoginCss";
import { postLogin } from "../api/adminLoginAxios";
import { useNavigate } from "react-router";

const AdminLogin: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const navigate = useNavigate();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const user = {
      uid: email,
      upw: password,
    };
    const login = await postLogin(user);
    console.log(login);
    if (login == "success") {
      navigate("/");
    } else if (login?.response.data.message) {
      alert(login.response.data.message);
    }
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const target = event.target;
    if (target.type === "email") {
      setEmail(target.value);
    } else {
      setPassword(target.value);
    }
  };

  return (
    <Container>
      <LoginForm onSubmit={handleSubmit}>
        <Title>로그인</Title>
        <Input
          type="email"
          placeholder="이메일 입력"
          value={email}
          onChange={handleInputChange}
        />
        <Input
          type="password"
          placeholder="비밀번호 입력"
          value={password}
          onChange={handleInputChange}
        />
        <Button type="submit">로그인</Button>
      </LoginForm>
    </Container>
  );
};

export default AdminLogin;
