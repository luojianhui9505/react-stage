import React, { Component } from "react";
import Header from "./components/Header";
import List from "./components/List";
import Footer from "./components/Footer";
import "./App.css";
class App extends Component {
  // 初始化数据状态
  state = {
    todos: [
      {
        id: "001",
        name: "吃饭",
        done: true,
      },
      {
        id: "002",
        name: "睡觉",
        done: true,
      },
      {
        id: "003",
        name: "写代码",
        done: false,
      },
      {
        id: "004",
        name: "打游戏",
        done: false,
      },
    ],
  };
  addTodo = (todoObj) => {
    // 获取原有的数据
    const { todos } = this.state;
    const newTodos = [todoObj, ...todos]; //将新添加的数据追加到现有数据的前面
    // 更新状态，触发render函数，从而改变子组件的List列表
    this.setState({
      todos: newTodos,
    });
  };
  updateTodos=(id,done)=>{
      const {todos}=this.state;
      const newTodos=todos.map((todoObj)=>{
            if(todoObj.id===id) return {...todoObj,done:done}//更改当前id对象的checked状态
            else return todoObj
      })
      this.setState({
        todos:newTodos
      })
  }
  deleteTodo=(id)=>{
      const {todos}=this.state;
      const newTodos=todos.filter((todoObj)=>{
          return todoObj.id!==id
      })
      this.setState({
        todos:newTodos
      })
  }
  checkedAll=(done)=>{
    const {todos}=this.state;
    const newTodos=todos.map((todoObj)=>{
      return {...todoObj,done}
    })
    this.setState({
      todos:newTodos
    })
  }
  clearAll=()=>{
      const {todos}=this.state;
      const newTodos=todos.filter((todoObj)=>{
        return !todoObj.done
      })
      this.setState({
        todos:newTodos
      })
  }
  render() {
    const { todos } = this.state;
    return (
      <div className="todo-container">
        <div className="todo-wrap">
          <Header addTodo={this.addTodo} />
          <List todos={todos} updateTodos={this.updateTodos} deleteTodo={this.deleteTodo}  />
          <Footer todos={todos} checkedAll={this.checkedAll} clearAll={this.clearAll} />
        </div>
      </div>
    );
  }
}
export default App;
