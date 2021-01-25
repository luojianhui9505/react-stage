import React, { Component } from "react";
import qs from 'querystring'
export default class Detail extends Component {
  render() {
    const detailData = [
      {
        id: "01",
        content: "你好，中国",
      },
      {
        id: "02",
        content: "你好、最好的自己",
      },
      {
        id: "03",
        content: "你好、未来的自己",
      },
    ];
    console.log(this.props)
    // 接收search方式传递的参数
    const {search} =this.props.location;
    const {title,id}=qs.parse(search.slice(1));
    const findContent = detailData.find((contentObj) => {
      return contentObj.id === id;
    });
    return (
      <div>
        <ul>
          <li>ID:{id}</li>
          <li>TITLE:{title}</li>
          <li>CONTENT:{findContent.content}</li>
        </ul>
      </div>
    );
  }
}
