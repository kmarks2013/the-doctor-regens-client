import React, { Component } from 'react'
import CommentList from '../components/CommentList'
import CommentForm from '../components/CommentForm'

export default class CommentContainer extends Component {
    render() {
        // console.log(this.props.comments)
        return (
            <div>
            <CommentForm author={this.props.author} editComment={this.props.editComment} content={this.props.content} handleFormChange={this.props.handleFormChange} handleSubmit={this.props.handleSubmit} handleEditSubmit={this.props.handleEditSubmit}/>
            <CommentList editClick={this.props.editClick} comments={this.props.comments} />
            </div>
        )
    }
}
