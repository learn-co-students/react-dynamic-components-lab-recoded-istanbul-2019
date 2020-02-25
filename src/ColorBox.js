import React, { Component } from 'react';

export default class ColorBox extends Component {

  state = {
    todos: [
      
    ]
  }

  render() {
      const newOpacity = this.props.opacity;
       return this.props.opacity >= 0.2 ? (<div className="color-box" style={{opacity: newOpacity}}>
         <ColorBox opacity= {newOpacity} />
     </div>) : null;
    
  }

}

