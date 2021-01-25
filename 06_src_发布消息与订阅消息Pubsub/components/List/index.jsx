import React, { Component } from "react";
import PubSub from 'pubsub-js'
import "./index.css";
export default class List extends Component {
  // 初始化状态
  state = {
    users: [],
    isFirst: true, //是否为第一次打开页面
    isLoad: false,
    err: "", //存储请求相关的错误信息
  };
  componentDidMount(){
      this.token=PubSub.subscribe('atguigu',(_,stateObj)=>{
        this.setState(stateObj);
      })
  }
  // 组件将要被卸载时执行
  componentWillUnmount(){
    PubSub.unsubscribe(this.token)
  }
  render() {
    const { users, isLoad, isFirst, err } = this.state;
    return isFirst ? (
      <h1>欢迎使用，请输入关键字点击搜索</h1>
    ) : isLoad ? (
      <h1>Loading...</h1>
    ) : err ? (
      <h1 style={{ color: "red" }}>{err}</h1>
    ) : (
      <div className="row">
        {users.map((userObj) => {
          return (
            <div key={userObj.id} className="card">
              <a href={userObj.html_url} rel="noreferrer" target="_blank">
                <img
                  alt="avatar"
                  src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2142857875,120857813&fm=11&gp=0.jpg"
                  style={{ width: "100px" }}
                />
              </a>
              <p className="card-text">{userObj.login}</p>
            </div>
          );
        })}
      </div>
    );
  }
}
