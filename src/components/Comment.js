import React, {Component} from 'react'

export default class Comment extends Component{
    editDeleteButtons = () =>  {
        if (this.props.loggedInUserId === this.props.comment.user.id){
            return (  
                <div>
                <button onClick={(event) => this.props.editClick(event, this.props.comment)}> Edit Comment </button>
                <button onClick={(event) => this.props.deleteClick(event, this.props.comment)}>Delete Comment</button>
                </div>
            )
            } else{
                return null
            }
    }
    render() { 
    return (
        <div className="comment">
            <p className='comment-user'>{this.props.comment.user.username}</p>
            <p className='comment-content'>{this.props.comment.content}</p>
            {this.editDeleteButtons()}
        </div>
    )
    }
}
 