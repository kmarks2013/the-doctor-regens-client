import React, { Component } from 'react'
import CommentList from '../components/CommentList'
import CommentForm from '../components/CommentForm'

export default class CommentContainer extends Component {

    showForm = () => {
        if (this.props.loggedInUserId){
            return <CommentForm author={this.props.author} editComment={this.props.editComment} content={this.props.content} handleFormChange={this.props.handleFormChange} handleSubmit={this.props.handleSubmit} handleEditSubmit={this.props.handleEditSubmit}/>
        } else {
            return <h4>Create a new account to make a comment!</h4>
        }

    } 

    render() {
        // console.log(this.props.comments)
        return (
            <div>
                <div>
                {this.showForm()}
                </div>
                <div>
                <CommentList editClick={this.props.editClick} comments={this.props.comments} deleteClick={this.props.deleteClick} />
                </div>
            </div>
        )
    }
}
