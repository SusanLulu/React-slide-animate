import React, { Component } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import 'animate.css/animate.min.css';
import './Home.less';
// terminal:
// npm install --save react-animate-on-scroll
// npm install --save animate.css

export default class Home extends Component {
  render() {
    return (
      <div id="pageHome">
        <div className="section">
          <div>这是我的react 小动画</div>
        </div>
        <div className="section">
          <ScrollAnimation animateIn="wobble" duration="3">
            <div>不要嘛 不要 不要嘛</div>
          </ScrollAnimation>
        </div>
        <div className="section">
          <ScrollAnimation animateIn="hinge" duration="2">
            <div>啊啊啊要  啊要掉了 掉了 </div>
          </ScrollAnimation>
        </div>
        <div className="section">
          <ScrollAnimation animateIn="zoomOutRight" duration="2">
            <div>先走啦</div>
          </ScrollAnimation>
        </div>
        <div className="section">
          <div>3</div>
        </div>
      </div>
    );
  }
}
