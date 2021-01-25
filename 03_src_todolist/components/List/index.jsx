import React, { Component } from "react";
import PropTypes from 'prop-types';
import Item from '../Item'
import './index.css'

export default class List extends Component {
  static propTypes={
    todos:PropTypes.array.isRequired,
    updateTodos:PropTypes.func.isRequired
  }
  render() {
    // 接收从父组件传递过来的参数
    const {todos,updateTodos,deleteTodo} =this.props;
    return (
      <ul className="todo-main">
       {todos.map(todo=>{
         return <Item key={todo.id} {...todo} updateTodos={updateTodos} deleteTodo={deleteTodo} />
       })}
      </ul>
    );
  }
}
