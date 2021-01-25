import React, { Component } from "react";
import axios from 'axios';
import PubSub from 'pubsub-js'
export default class Search extends Component {
  search=()=>{
    // 连续解构赋值
      const {keyWordElement:{value:keyWord}}=this;
      PubSub.publish('atguigu',{isFirst:false,isLoad:true});
      axios.get(`https://api.github.com/search/users?q=${keyWord}`).then(res=>{
        PubSub.publish('atguigu',{isLoad:false,users:res.data.items});

      }).catch(err=>{
        PubSub.publish('atguigu',{isLoad:false,err:err.message});
      })
  }
  handleChange=(event)=>{
    if(event.target.value.trim()==='') {
      alert('搜索关键字不能为空')
      return;
    }
    if(event.keyCode===13){
      this.search()
    }
    
  }
  render() {
    return (
      <section className="jumbotron">
        <h3 className="jumbotron-heading">Search Github Users</h3>
        <div>
          <input ref={c=>this.keyWordElement=c} onKeyUp={this.handleChange} type="text" placeholder="enter the name you search" />
          &nbsp;<button onClick={this.search}>Search</button>
        </div>
      </section>
    );
  }
}
