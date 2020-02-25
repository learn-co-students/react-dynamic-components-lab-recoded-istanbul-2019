//your code here
// When we speak we are afraid our words will not be heard or welcomed. But when we are silent, we are still afraid. So it is better to speak. - Audrey Lorde
import React, { Component } from 'react';

export default class Comments extends Component {
    render(){
        return (
            <div className="comment">
               {this.props.commentText}
            </div>
        )
    }
}