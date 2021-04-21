import React, { Component } from "react";
import './index.css'

export default class Footer extends Component {
  handleCheckedAll=(event)=>{
    console.log(event.target.checked)
      this.props.checkedAll(event.target.checked)
  }
  handleClearAll=()=>{
      this.props.clearAll()
  }
  render() {
    const {todos} =this.props;
    const todoTotal=todos.length;
    const DoneTodo=todos.reduce((pre,todo)=>pre+(todo.done?1:0),0)
    return (
      <div className="todo-footer">
        <label>
          <input type="checkbox" checked={DoneTodo===todoTotal&&todoTotal!==0?true:false} onChange={this.handleCheckedAll} />
        </label>
        <span>
          <span>已完成{DoneTodo}</span> / 全部{todoTotal}
        </span>
        <button onClick={this.handleClearAll} className="btn btn-danger">清除已完成任务</button>
      </div>
    );
  }
}
