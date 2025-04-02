import React from 'react'
//rafce
const Box = (props) => {
  console.log("props",props)
  return (
    <div>
        <div className={`box ${props.result?props.result:""}`}>
            <h1>{props.title}</h1>
             {/* 조건부 렌더링을 통해 스택가드처리 */}
            <img className='item-img' src={props.item? props.item.img : "https://cdn-icons-png.freepik.com/512/2732/2732700.png"}></img>
            <h1>{props.result? props.result : ""}</h1>
        </div>
    </div>
  )
}

export default Box