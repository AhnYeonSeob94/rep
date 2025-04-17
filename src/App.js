import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import NavBar from './component/NavBar';
import MyBooksPage from './page/MyBooksPage';
import LoginPage from './page/LoginPage';
import HomePage from './page/HomePage';

function App() {

  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/mybooks" element={<MyBooksPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </Router>
  );
}

export default App;
