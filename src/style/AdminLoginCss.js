import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f0f2f5;
`;

export const LoginForm = styled.form`
  width: 600px;
  height: 400px;
  display: flex;
  flex-direction: column;
  border: 1px solid #dedede;
  background: white;
  border-radius: 4px;
  padding: 70px 30px;
  box-shadow:
    0 1px 3px rgba(0, 0, 0, 0.12),
    0 1px 2px rgba(0, 0, 0, 0.24);
`;

export const Title = styled.h1`
  font-size: 24px;
  text-align: center;
  margin-bottom: 20px;
`;

export const Input = styled.input`
  padding: 12px;
  font-size: 16px;
  border: 1px solid #dedede;
  border-radius: 4px;
  margin-bottom: 15px;
`;

export const Button = styled.button`
  font-size: 16px;
  font-weight: bold;
  color: white;
  padding: 12px;
  border: none;
  border-radius: 4px;
  background-color: #0079d3;
  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }
`;
