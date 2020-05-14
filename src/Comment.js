import React, { Component } from 'react';
import { render } from 'enzyme';

export default class Comment extends Component {
    render() {
        return (
            <div className="comment">{this.props.commentText}</div>
        );
    }
}
