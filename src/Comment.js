//your code here
import React from "react"

class Comment extends React.Component{
    render() {
        return (<div>{this.props.commentText}</div>)
    }
} 
export default Comment