import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { faSearch, faTimes  } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

const Navbar = ({ authenticate, setAuthenticate }) => {
    const menuList = ['Topping','Soup','Chees','Yogurt','Puree','Desert','Snack','Add'];
    const [showSearch, setShowSearch] = useState(false);
    const [keyword, setKeyword] = useState('');

    const handleSearch = () => {
        if (keyword.trim() === '') {
          alert('검색어를 입력해주세요.');
          return;
        }
        console.log('검색어:', keyword); // 여기서 검색 처리 로직 연결 가능
        alert(`'${keyword}' 검색!`);
        setShowSearch(false); // 검색 후 닫기
      };
      const navigate = useNavigate();

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
        <div className="login-button" onClick={authenticate ? logout : goToLogin}>
          <FontAwesomeIcon icon={faUser} />
          <div>{authenticate ? '로그아웃' : '로그인'}</div>
        </div>
        <div className='nav-section'>
            <img width={100} src='https://apyapy.kr/ade/design/img/logo.png' alt="logo" onClick={goToMain}></img>
        </div>
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