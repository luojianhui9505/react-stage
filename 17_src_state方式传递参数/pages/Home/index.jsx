import React, { Component } from "react";
import {Redirect, Route,Switch} from 'react-router-dom' 
import MyNavLink from '../../components/MyNavLink'
import News from './News'
import Message from './Message'
export default class Home extends Component {
  render() {
    return (
      <div>
        <h3>我是Home的内容</h3>
        <ul className="nav nav-tabs">
          <li>
            {/* <a className="list-group-item active" href="./home-news.html">
              News
            </a> */}
            <MyNavLink to="/home/news">News</MyNavLink>
          </li>
          <li>
            {/* <a className="list-group-item " href="./home-message.html">
              Message
            </a> */}
            <MyNavLink to="/home/message">Message</MyNavLink>
          </li>
        </ul>
        <Switch>
            <Route path="/home/news" component={News} />
            <Route path="/home/message" component={Message} />
            <Redirect to="/home/news" />
        </Switch>
      </div>
    );
  }
}
