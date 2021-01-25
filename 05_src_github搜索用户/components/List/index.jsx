import React, { Component } from "react";
import "./index.css";
export default class List extends Component {
  render() {
    const { users, isLoad, isFirst, err } = this.props;
    return isFirst ? (
      <h1>欢迎使用，请输入关键字点击搜索</h1>
    ) : isLoad ? (
      <h1>Loading...</h1>
    ) : err ? (
      <h1 style={{color:'red'}}>{err}</h1>
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
