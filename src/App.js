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
    editComment: {}

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
    console.log(event.target.value, event.target.name)
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
    .then(r => r.json())
    .then(newComment => {
      debugger
      this.setState({
        comments: [...this.state.comments, newComment]
      })
    })
  }
  
  handleSubmit = (event) => {
    event.preventDefault();
    let formData = {doctor:this.state.doctor.id, content: this.state.content, author: this.state.author}
    this.makeNewComment(formData)
    this.setState({content: '', author: ''})
    console.log(formData, this.state.comments)
  }

  editClick = (event, commentObj) => {
    this.setState({
      editComment: commentObj
    })
    console.log(`this should be the comment object ${commentObj}`, event.target, this.state.editComment)
  }
  
  render() {
    console.log(this.state.currentIndex)
    return (
      <div className="App">
          <DoctorContainer doctor={this.state.doctor} nextDoctor={this.nextDoctor} />
          <CommentContainer comments={this.state.comments} editComment={this.state.editComment} author={this.state.author} content={this.state.content} handleFormChange={this.handleFormChange} handleSubmit={this.handleSubmit} editClick={this.editClick}/>
      </div>
    );
  }
}

export default App;