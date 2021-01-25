import axios from 'axios'
import React, { Component } from 'react'
export default class App extends Component {
  getStudentInfo=()=>{
      axios.get('http://localhost:3000/api/students').then(
        res=>{
          console.log(res.data)
        }
      )
  }
  getCarInfo=()=>{
    axios.get('http://localhost:3000/demo/cars').then(res=>{
      console.log(res.data)
    })
  }
  render() {
    return (
      <div>
        
        <button type="button" className="btn btn-large btn-block btn-default" onClick={this.getStudentInfo}>点击获取学生数据</button>
        
        <button type="button" className="btn btn-large btn-block btn-default" onClick={this.getCarInfo}>点击获取汽车信息</button>
        
        
      </div>
    )
  }
}
