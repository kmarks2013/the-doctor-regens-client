import React, { Component } from 'react'
import Comment from './Comment'


export default class CommentList extends Component {
    
    sendComments = () => {
       return this.props.comments.map( (comment) => {
            return <Comment comment={comment} loggedInUserId={this.props.loggedInUserId}editClick={this.props.editClick} deleteClick={this.props.deleteClick} key={`comment-${comment.id}`}/>
        })
    }
    
    render() {
        return (
            <div className='comments'>
            {this.sendComments()}
            </div>
        )
    }
}
 