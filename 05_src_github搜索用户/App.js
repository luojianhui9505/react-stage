import React, { Component } from "react";
import Search from "./components/Search";
import List from './components/List'
export default class App extends Component {
  // 初始化状态
  state={
    users:[],
    isFirst:true,//是否为第一次打开页面
    isLoad:false,
    err:'',//存储请求相关的错误信息
  }
  updateState=(stateObj)=>{
    this.setState(stateObj)
  }
  render() {
    return (
      <div className="container">
        <Search updateState={this.updateState} />
        <List {...this.state} />
      </div>
    );
  }
}
