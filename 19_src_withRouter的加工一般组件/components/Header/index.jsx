import React, { Component } from "react";
// 是一个函数，首字母不是大写的
import { withRouter } from "react-router-dom";

class Header extends Component {
  forward = () => {
    this.props.history.goForward();
  };
  back = () => {
    this.props.history.goBack();
  };
  go = () => {
    this.props.history.go(-2);
  };
  render() {
    return (
      <div className="page-header">
        <h2>React Router Demo</h2>
        <button onClick={this.forward}>前进</button>
        <button onClick={this.back}>后退</button>
        <button onClick={this.go}>go</button>
      </div>
    );  
  }
}
// 经过withRouter加工一般组件，让一般组件有了路由组件的属性，返回值是一个新组件
export default withRouter(Header);
