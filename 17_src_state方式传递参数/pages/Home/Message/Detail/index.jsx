import React, { Component } from "react";
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
    const {id,title}=this.props.location.state;
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
