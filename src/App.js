import { useState } from 'react';
import './App.css';
import Box from './component/Box';

//1. 박스 2개 (타이틀, 사진, 결과)
//2. 가위 바위 보 버튼이 있다.
//3. 버튼을 클릭하면 클릭한 값이 박스에 보임
//4. 컴퓨터는 랜덤하게 아이템 선택이 된다
//5. 3 4 의 결과를 가지고 누가 이겼는지 승패를 따진다
//6. 승패결과에 따라 테두리 색이 바뀐다 (이기면-초록, 지면-빨강, 비기면-검은색)

const choice = {
  rock:{
    name:"Rock"
    ,img:"https://scienceresourcebox.co.nz/cdn/shop/files/Chalkrounded_WEB.jpg?v=1684441843"
  }
  ,scissors:{
    name:"scissors"
    ,img:"https://www.artnews.com/wp-content/uploads/2022/07/AdobeStock_507713455.jpeg?w=1800"
  }
  ,paper:{
    name:"paper"
    ,img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkvV87NS_n0lztGg5kxllQctEyTXdtvyPy8Q&s"
  }

}


function App() {
  const [userSelect,setUserSelect] = useState(null);
  const [computerSelect,setComputerSelect] = useState(null);
  const [res,setResult] = useState(null);
  const [comres,setComResult] = useState(null);

  const [count, setCount] = useState(0);
  const [winCount, setWinCount] = useState(0);
  const [loseCount, setLoseCount] = useState(0);
  const [drawCount, setDrawCount] = useState(0);


  const play = (userChoice) => {
    let userRes = "";
    let comRes = "";

    setUserSelect(choice[userChoice]); 
    
    let computerChoice = randomChoice();
    setComputerSelect(choice[computerChoice]);

    if (
      (userChoice === "scissors" && computerChoice === "paper") ||
      (userChoice === "rock" && computerChoice === "scissors") ||
      (userChoice === "paper" && computerChoice === "rock")
    ) {
      userRes = "win";
      comRes = "lose";
      setWinCount(winCount + 1);
    } else if (userChoice === computerChoice) {
      userRes = "draw";
      comRes = "draw";
      setDrawCount(drawCount + 1);
    } else {
      userRes = "lose";
      comRes = "win";
      setLoseCount(loseCount + 1);
    }

    setResult(userRes);
    setComResult(comRes);
    setCount(count + 1);
  };

  const randomChoice=()=>{
    let itemArr = Object.keys(choice); //객체에 키값만 뽑아서 배열로 만들어주는 함수
    
    let ran = Math.floor(Math.random()*itemArr.length);
    let final = itemArr[ran]
    
    return final
  }

  const winRate = count > 0 ? ((winCount / count) * 100).toFixed(2) : 0;

  return (
    <div>
      <h1>가위 바위 보! 게임</h1>
      <div className='main'>
        <Box title="You" item={userSelect} result={res} />
        <Box title="Computer" item={computerSelect} result={comres}/>
      </div>
      <div className='main'>
        <button onClick={()=>play("scissors")}>
          <i className="fa-solid fa-hand-scissors"></i>
        </button>
        <button onClick={()=>play("rock")}>
          <i className="fa-solid fa-hand-back-fist"></i>
        </button>
        <button onClick={()=>play("paper")}>
          <i className="fa-solid fa-hand"></i>
        </button>
      </div>
      <div className="scoreboard">
        <div className="score-card">총 경기 <br /> {count}</div>
        <div className="score-card win-score">승리 <br /> {winCount}</div>
        <div className="score-card lose-score">패배 <br /> {loseCount}</div>
        <div className="score-card draw-score">무승부 <br /> {drawCount}</div>
        <div className="score-card win-rate">승률 <br /> {winRate}%</div>
      </div>
    </div>
  );
}

export default App;
