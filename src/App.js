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
  const [userSelect,setUserSelect] = useState(null)

  const play=(userChoice) =>{
    setUserSelect(choice[userChoice]) 
  }
  return (
    <div>
      <div className='main'>
        <Box title="You" item={userSelect}/>
        <Box title="Computer"/>
      </div>
      <div className='main'>
        <button onClick={()=>play("scissors")}>가위</button>
        <button onClick={()=>play("rock")}>바위</button>
        <button onClick={()=>play("paper")}>보</button>
      </div>
    </div>
  );
}

export default App;
