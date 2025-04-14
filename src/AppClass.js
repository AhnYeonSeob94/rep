import React, { Component } from 'react'
import BoxClass from './component/BoxClass';

export default class AppClass extends Component {

    //생성자
    constructor(props){
        super(props)
        this.state = {
            counter2: 0,
            num:1,
            value:0
        };
        console.log("constructor");
    }

    increase = () =>{
        this.setState({counter2: this.state.counter2 + 1, value: this.state.value+1});
        console.log("increase function", this.state);
        //counter2 값이 0으로 나옴 비동기로 처리되기때문에 즉각 반영되지않음
    };
  componentDidMount(){
    console.log("componentDidMount");
  }

  componentDidUpdate(){
    console.log("componentDidUpdate", this.state);
    //counter2 값이 1로 나옴 최신 업데이트 된 값을 받아볼 수 있음.
  }

  render() {
    console.log("render");
    return (
      <div>
        <div>state:{this.state.counter2}</div>
        <button onClick={this.increase}>클릭!</button>
        {this.state.counter2<3 && <BoxClass num={this.state.value}/>}
      </div>
    )
  }
}
