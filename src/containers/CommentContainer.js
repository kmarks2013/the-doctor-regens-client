import React, { Component } from 'react'
import CommentList from '../components/CommentList'
import CommentForm from '../components/CommentForm'

export default class CommentContainer extends Component {
    render() {
        return (
            <div>
            <CommentForm author={this.props.author} content={this.props.content} handleFormChange={this.props.handleFormChange}/>
            <CommentList  />
            </div>
        )
    }
}
