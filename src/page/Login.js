import React from 'react'
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';

const Login = ({setAuthenticate}) => {
    const navigate = useNavigate();
    const loginUser = (event) =>{
        event.preventDefault();
        console.log("login function");
        setAuthenticate(true);
        navigate("/");
    }
  return (
    <div className="login-wrapper">
      <div className="login-box">
        <h3>🍀Login</h3>
        <Form onSubmit={loginUser}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>이메일</Form.Label>
            <Form.Control type="email" placeholder="이메일을 입력하세요" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>비밀번호</Form.Label>
            <Form.Control type="password" placeholder="비밀번호를 입력하세요" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="이메일저장" />
          </Form.Group>

          <Button variant="success" type="submit" className="w-100">
            로그인
          </Button>
        </Form>
      </div>
    </div>
  )
}

export default Login