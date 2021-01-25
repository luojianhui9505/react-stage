import React, { Component } from 'react'
import PropTypes from 'prop-types';
// 生成随机数
import {nanoid} from 'nanoid';
import './index.css'

export default class Header extends Component {
    // 对接收的props进行类型以及必要性的限制
    static propTypes={
        addTodo:PropTypes.func.isRequired
    }
    handelKeyup=(event)=>{
        const {target,keyCode}=event;
        if(keyCode!==13) return;
        if(target.value.trim()===''){
            alert('输入的内容不能为空');
            return 
        }
        // 将输入的内容拼装成一个对象用于传递给list
        const todoObj={
            id:nanoid(),
            name:target.value,
            done:false
        }
        // 触发父组件的addTodo方法，进行数据更新
        this.props.addTodo(todoObj)
        // 将数据置为空
        target.value=""

    }
    render() {
        return (
            <div className="todo-header">
            <input onKeyUp={this.handelKeyup} type="text" placeholder="请输入你的任务名称，按回车键确认"/>
          </div>
        )
    }
}
