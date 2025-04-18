import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Outlet, Link } from 'react-router-dom';

//1.네비게이션 바를 검은색으로 , 글씨는 흰색으로 바꾸자! (variant를 활용하면 쉬움)
//2. netflix로고를 넣어주자
//3.검색버튼을 빨간색으로 바꿔주자(variant를 이용하면 쉬움)
//4.전체화면색을 검은색으로 바꿔주자
//5.home을 누르면 /로 Movies를 누르면 /movies로 이동하는 기능을 넣어주자!

const AppLayout = () => {
  return (
    <div style={{ backgroundColor: 'black', minHeight: '100vh' }}>
      <Navbar expand="lg" bg="dark" variant="dark">
        <Container fluid>
          {/* Netflix 로고 */}
          <Navbar.Brand as={Link} to="/">
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
              alt="Netflix Logo"
              height="30"
            />
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="me-auto my-2 my-lg-0" navbarScroll>
              {/* 페이지 이동 */}
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav.Link as={Link} to="/movies">Movies</Nav.Link>
            </Nav>

            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              {/* 빨간색 버튼 */}
              <Button variant="danger">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Outlet />
    </div>
  )
}

export default AppLayout