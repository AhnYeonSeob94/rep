import './App.css';
import { useEffect, useState } from 'react';
import Timer from './Timer';

function App() {
  const [count, setCount] = useState(0);
  const [value, setValue] = useState(0);
  const [showTimer, setShowTimer] = useState(true);
  const handleClick = () =>{
    setCount((prev)=>prev +1);
    setValue((prev) => prev +1);
    setValue(value+1)

  };
  //useEffect는 콜백함수와, 배열을 매개변수로 받음
  useEffect(()=>{
    console.log("App Start!")
    // 앱초기작업들, api호출
  },[]);

  useEffect(()=>{
    console.log("Update!!");
  },[count]);

  useEffect(()=>{
    console.log("다른일!!");
  },[value]);
  
  return (
    <div className="App">
      {console.log("Render!")}
      <h1>{count}</h1>
      <h2>value:{value}</h2>
      <button onClick={handleClick}>증가</button>
      <button onClick={()=>setShowTimer(prev=>!prev)}>타이머 보이기</button>
      {showTimer && <Timer/>}
    </div>
  );
}

export default App;
