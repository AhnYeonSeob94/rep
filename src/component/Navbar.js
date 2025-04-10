import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { faSearch, faTimes  } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

const Navbar = ({ authenticate, setAuthenticate }) => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const menuList = ['Topping','Soup','Cheese','Yogurt','Puree','Desert','Snack','Add'];
    const [showSearch, setShowSearch] = useState(false);
    const [keyword, setKeyword] = useState('');
    const navigate = useNavigate();

    const handleSearch = () => {
        if (keyword.trim() === '') {
          alert('검색어를 입력해주세요.');
          return;
        }
        navigate(`/?q=${keyword}`);
        setShowSearch(false); // 검색 후 닫기
        setKeyword(''); 
      };
      

      const goToLogin = () =>{
        navigate("/login");
      }

      const logout = () => {
        setAuthenticate(false);
        alert("로그아웃 되었습니다.");
        navigate('/');
      };

      const goToMain = () =>{
        navigate("/");
      }

  return (
    
    <>
    <div> 
        <div className="login-button">
          <FontAwesomeIcon icon={faUser} />
          <button onClick={authenticate ? logout : goToLogin}>
            {authenticate ? '로그아웃' : '로그인'}
          </button>
        </div>

         {/* 햄버거 메뉴 버튼 (모바일용) */}
         <div
          className="hamburger"
          onClick={() => setMobileMenuOpen(true)}
          
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/*로고 영역 */}
        <div className='nav-section'>
            <img className='logo' width={100} src='https://apyapy.kr/ade/design/img/logo.png' alt="logo" onClick={goToMain}></img>
        </div>

        {/* 메뉴 영역 */}
        <div className='menu-area'>  
            <ul className='menu-list'>
                {menuList.map((menu)=>
                <li key={menu}>{menu}</li>
                )}
            </ul>
            <div className="search-icon" onClick={() => setShowSearch(true)}>
                <FontAwesomeIcon icon={faSearch} />
                <input type='text' placeholder='검색' />
            </div>
        </div>
    </div>

    {/* 모바일 메뉴 오버레이 */}
    {mobileMenuOpen && (
      <div className="mobile-menu-overlay" onClick={() => setMobileMenuOpen(false)}>
        <div className="mobile-menu" onClick={(e) => e.stopPropagation()}>
          <button className="close-btn" onClick={() => setMobileMenuOpen(false)}>✕</button>
          <ul>
            {menuList.map(menu => (
              <li key={menu}>{menu}</li>
            ))}
          </ul>
        </div>
      </div>
    )}

    {/* 오버레이 검색창 */}
    {showSearch && (
        <div className="search-overlay" onClick={() => setShowSearch(false)}>
          <div className="search-box" onClick={e => e.stopPropagation()}>
            <div className="search-header">
              <button className="close-btn" onClick={() => setShowSearch(false)}>
                <FontAwesomeIcon icon={faTimes} />
              </button>
            </div>
            <input 
              type="text" 
              placeholder="검색어를 입력하세요" 
              value={keyword} 
              onChange={e => setKeyword(e.target.value)}
              onKeyDown={(e)=>{
                if(e.key === 'Enter'){
                  handleSearch();
                }
              }} 
              autoFocus 
            />
            <button className="submit-btn" onClick={handleSearch}>검색</button>
          </div>
        </div>
      )}
    </>

  )
}

export default Navbar