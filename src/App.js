import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Box from './component/Box';

function App() {
  let count = useSelector(state=>state.count)
  let id = useSelector(state=>state.id)
  let password = useSelector(state=>state.password)
  const dispatch = useDispatch();

  const increase=()=>{
    dispatch({type:"INCREMENT", payload: {num: 5} });

  }
  const decrease=()=>{
    dispatch({type:"DECREMENT", payload: {num: 5} });

  }

  const login=()=>{
    dispatch({type:"LOGIN",payload: {id:"asd", password: "123"}});
  }
  return (
    <div>
      <h1>{id},{password}</h1>
      <h1>{count}</h1>
      <button onClick={increase}>증가!</button>
      <button onClick={decrease}>감소!</button>
      <button onClick={login}>로그인</button>
      <Box/>
    </div>
  );
}

export default App;
