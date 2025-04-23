import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useTranslation } from 'react-i18next';
import { Outlet, Link, useNavigate } from 'react-router-dom';
import useLanguageStore from '../store/useLanguageStore';


//1.네비게이션 바를 검은색으로 , 글씨는 흰색으로 바꾸자! (variant를 활용하면 쉬움)
//2. netflix로고를 넣어주자
//3.검색버튼을 빨간색으로 바꿔주자(variant를 이용하면 쉬움)
//4.전체화면색을 검은색으로 바꿔주자
//5.home을 누르면 /로 Movies를 누르면 /movies로 이동하는 기능을 넣어주자!

const AppLayout = () => {
  const {  setLanguage } = useLanguageStore();

  const [keyword, setKeyword] = useState('');
  const navigate = useNavigate();
  const { t,i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'ko' : 'en';
    i18n.changeLanguage(newLang);
    setLanguage(newLang);
  };

  const searchByKeyword =(event)=>{
    event.preventDefault();
    //url을 바꿔주기
    navigate(`/movies?q=${keyword}`);
    setKeyword("");
  };


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
              <Nav.Link as={Link} to="/">{t('home')}</Nav.Link>
              <Nav.Link as={Link} to="/movies">{t('movies')}</Nav.Link>
            </Nav>

            <Form className="d-flex" onSubmit={searchByKeyword}>
              <Form.Control
                type="search"
                placeholder={t('search')}
                className="me-2"
                aria-label="Search"
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
              />
              <Button variant="danger" type="submit" style={{ whiteSpace: 'nowrap', minWidth: '100px' }}>{t('search')}</Button>
              <Button variant="outline-light" className="ms-2" onClick={toggleLanguage}>
                {i18n.language === 'en' ? 'KOR' : 'ENG'}
              </Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Outlet />
    </div>
  )
}

export default AppLayout