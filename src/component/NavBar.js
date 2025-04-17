import React from 'react'
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm px-4">
      <div className="container-fluid">
        <Link className="navbar-brand fw-bold lm-7" to="/">
        도서관 TEST
        </Link>
        <div className="d-flex gap-4">
          <Link className="nav-link" to="/">메인</Link>
          <Link className="nav-link" to="/mybooks">나의 책</Link>
          <Link className="nav-link text-warning fw-semibold" to="/login">로그인</Link>
        </div>
      </div>
    </nav>
  )
}

export default NavBar