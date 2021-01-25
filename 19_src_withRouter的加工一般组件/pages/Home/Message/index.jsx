import React, { Component } from "react";
import { Link, Route } from "react-router-dom";
import Detail from "./Detail";

export default class Message extends Component {
  state = {
    messageArr: [
      { id: "01", title: "消息1" },
      { id: "02", title: "消息2" },
      { id: "03", title: "消息3" },
    ],
  };
  replaceButton = (id, title) => {
    // state编程式路由导航replace模式
    this.props.history.replace("/home/message/detail", { id, title });
  };
  pushButton = (id, title) => {
    // state编程式路由导航push模式
    this.props.history.push("/home/message/detail", { id, title });
  };
  render() {
    const { messageArr } = this.state;
    return (
      <div>
        <ul>
          {messageArr.map((msgObj) => {
            return (
              <li key={msgObj.id}>
                <Link
                  to={{
                    pathname: "/home/message/detail",
                    state: { id: msgObj.id, title: msgObj.title },
                  }}
                >
                  {msgObj.title}
                </Link>
                <button
                  onClick={() => this.replaceButton(msgObj.id, msgObj.title)}
                >
                  replace跳转
                </button>
                <button
                  onClick={() => this.pushButton(msgObj.id, msgObj.title)}
                >
                  push跳转
                </button>
              </li>
            );
          })}
        </ul>
        <Route path="/home/message/detail" component={Detail}></Route>
      </div>
    );
  }
}
