import React, { useState, ChangeEvent, FormEvent } from 'react';
import { Button, Container, Input, LoginForm, Title } from '../style/AdminLoginCss';

const AdminLogin: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log('Email:', email, 'Password:', password);
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const target = event.target;
    if (target.type === 'email') {
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
