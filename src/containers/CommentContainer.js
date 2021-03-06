import React, { Component } from 'react'
import CommentList from '../components/CommentList'
import CommentForm from '../components/CommentForm'

export default class CommentContainer extends Component {
    state = {
        content: '',
        editComment: null,
    }

    handleContent =(event) => {
        console.log(event.target.value, event.target.name)
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    editClick = (event, commentObj) => {
        console.log(event, commentObj)
        this.setState({
          content: commentObj.content,
          editComment: commentObj
        })
    }
    
    submitClear = () => {
        this.setState({
          content: '', 
          editComment: null
        })
    }

    // FUTURE REFACTOR CONDITONAL SUBMIT LOGIC
    handleEditSubmit = (event) => {
        event.preventDefault()
        let formData = {content: this.state.content}
        this.props.editComment(formData, this.state.editComment.id)
        this.submitClear()
    }
          
    handleSubmit = (event) => {
        event.preventDefault();
        let formData = {doctor_id:this.props.doctor.id, user_id:this.props.loggedInUserId, content: this.state.content}
        this.props.makeNewComment(formData)
        this.submitClear()
    }
        
    showForm = () => {
        if (this.props.loggedInUserId){
            return <CommentForm editComment={this.state.editComment} content={this.state.content}
            handleContent={this.handleContent} handleSubmit={this.handleSubmit} handleEditSubmit={this.handleEditSubmit}/>
        } else {
            return <h4>Create a new account to make a comment!</h4>
        } 
    }

    render() {
        return (
            <div className='comment-container'>
                <div>
                {this.showForm()}
                </div>
                <CommentList loggedInUserId={this.props.loggedInUserId} editClick={this.editClick} comments={this.props.comments} deleteClick={this.props.deleteClick} />
            </div>
        )
    }
}
