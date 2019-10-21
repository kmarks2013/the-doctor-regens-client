import React from 'react';
import DoctorContainer from './containers/DoctorContainer'
import CommentContainer from './containers/CommentContainer'
import './App.css';

const API = "http://localhost:3000/doctors/"

class App extends React.Component {
  state = {
    doctors: [],
    doctor: {},
    currentIndex: 0,
    comments: [],
    author: '',
    content: '',
    editComment: null

  }

  componentDidMount() {
    console.log("I mounted!")
    fetch(API)
    .then(res => res.json())
    .then(doctorArr => {
    //  console.log(doctorArr)
      this.setState({
        doctors: doctorArr,
        doctor: doctorArr[this.state.currentIndex],
        comments: doctorArr[this.state.currentIndex].comments
      })
    })
  }

  makeNewComment = (commentObj) =>{
    fetch(`http://localhost:3000/doctors/${this.state.doctor.id}/comments` ,{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify(commentObj)
    })
    .then(r => r.json())
    .then(newComment => {
      debugger
      this.setState({
        comments: [...this.state.comments, newComment]
      })
    })
  }


  nextDoctor = () => {
    console.log('i have been clicked and i should update the state of the current index to show the next doctor')
    console.log(this.state.doctors.length)
    let newIndex 
    if (this.state.currentIndex >= 1) {
      // index will eventually be 12 for the range 0-13
      newIndex = 0
    } else {
      newIndex = this.state.currentIndex + 1
    }
    // debugger
    this.setState({
      doctor: this.state.doctors[newIndex],
      currentIndex: newIndex,
      comments: this.state.doctors[newIndex].comments
    })
    // console.log(this.state.currentIndex)
  }

  
  handleFormChange = (event) => {
    console.log(event.target.value)
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  makeNewComment = (commentObj) =>{
    fetch(`http://localhost:3000/doctors/${this.state.doctor.id}/comments` ,{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify(commentObj)
    })
    .then(res => res.json())
    .then(newComment => {
      this.setState({
        comments: [...this.state.comments, newComment]
      })
    })
  }
  
  handleSubmit = (event) => {
    event.preventDefault();
    let formData = {doctor:this.state.doctor.id, content: this.state.content, author: this.state.author}
    this.makeNewComment(formData)
    // console.log(formData , 'i am a new comment')
    this.setState({content: '', author: ''})
  }

  editComment = (commentObj) => {
    fetch(`http://localhost:3000/doctors/${this.state.doctor.id}/comments/${this.state.editComment.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify(commentObj)
    })
    .then(res => res.json())
    .then(editedComment => {
      const comments = this.state.comments.map( comment => {
        return comment.id === editedComment.id ? editedComment : comment
      })
      this.setState({
        comments
      })
    })
  } 


  handleEditSubmit = (event) => {
    event.preventDefault()
    let formData = {content: this.state.content, author: this.state.author}
    this.editComment(formData)
    this.setState({content: '', author: ''})
    // console.log(formData, "i am an edited comment")
  }


  editClick = (event, commentObj) => {
    this.setState({
      author: commentObj.author,
      content: commentObj.content,
      editComment: commentObj
    })
    // console.log(`this should be the comment object`, this.state.editComment)
  }
  
  render() {
    // console.log(this.state)
    return (
      <div className="App">
          <DoctorContainer doctor={this.state.doctor} nextDoctor={this.nextDoctor} />
          <CommentContainer comments={this.state.comments} editComment={this.state.editComment} author={this.state.author} content={this.state.content} handleFormChange={this.handleFormChange} handleSubmit={this.handleSubmit} handleEditSubmit={this.handleEditSubmit} editClick={this.editClick}/>
      </div>
    );
  }
}

export default App;