import React, { Component } from 'react';

export default class ColorBox extends Component {

  state = {
    todos: [
      
    ]
  }

  render() {
    let opacity = this.props.opacity;
    return opacity < 0.2 ? null : (
      <div className="color-box" style={{opacity: opacity}}>
        <ColorBox opacity={opacity - 0.1}/>
      </div>
    )
  }

}

