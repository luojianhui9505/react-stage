import React, { Component } from "react";
import './index.css'
export default class Item extends Component {
  state={
    mouse:false,
  }
  handleMouse=(flag)=>{
      return ()=>{
        this.setState({
          mouse:flag
        })
      }
  }
  handleChecked=(id)=>{
      return (event)=>{
          this.props.updateTodos(id,event.target.checked)
      }
  }
  handleDelete=(id)=>{
      if(window.confirm('确定删除吗?')){
        this.props.deleteTodo(id)
      }
  }
  render() {
    // 接收从父组件传递过来的数据
    const {id,name,done}=this.props;
    const {mouse} =this.state;
    return (
      <li style={{backgroundColor:mouse?'#ddd':'white'}} onMouseEnter={this.handleMouse(true)}  onMouseLeave={this.handleMouse(false)} >
        <label>
          <input onChange={this.handleChecked(id)} type="checkbox" checked={done} />
          <span>{name}</span>
        </label>
        <button onClick={()=>this.handleDelete(id)} className="btn btn-danger" style={{ display: mouse?'block':'none' }}>
          删除
        </button>
      </li>
    );
  }
}
