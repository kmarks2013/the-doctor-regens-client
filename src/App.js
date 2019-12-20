import React from 'react';
import DoctorContainer from './containers/DoctorContainer'
import CommentContainer from './containers/CommentContainer'
import NavBar from './containers/NavBar'
import './App.css';

const doctorAPI = "http://localhost:3000/doctors/"
const userAPI= "http://localhost:3000/users/"

class App extends React.Component {
  state = {
    doctors: [],
    doctor: {},
    currentIndex: 0,
    comments: [],
    username: '',
    loggedInUserId: localStorage.loggedInUserId,
    token: null,
    user: null
  }

  doctorFetch = () => {
    fetch(doctorAPI)
    .then(res => res.json())
    .then(doctorArr => {
      this.setState({
        doctors: doctorArr,
        doctor: doctorArr[this.state.currentIndex],
        comments: doctorArr[this.state.currentIndex].comments
      })
    })
  }

  setToken= (token, userId) => {
    localStorage.token = token
    localStorage.loggedInUserId = userId
    this.setState({
      token: token,
      loggedInUserId: userId,
    })
  }

  userFetch = (id) => {
    console.log(userAPI + id)
    fetch(userAPI + id,{
      headers: {
        "Authorization": this.state.token
      }
    })
    .then(res => res.json())
    .then(user => {
      this.setState({
        user: user
      })
    })
  }


  componentDidMount() {
    console.log("I mounted!")
    this.doctorFetch()
    if (this.state.user) {
      return this.userfetch()
    }
  }

  nextDoctor = () => {
    let newIndex 
      if (this.state.currentIndex >= 12) {
        newIndex = 0
      } else {
        newIndex = this.state.currentIndex + 1
      }
    this.setState({
      doctor: this.state.doctors[newIndex],
      currentIndex: newIndex,
      comments: this.state.doctors[newIndex].comments
    })
  }

  chooseDoctor= (doctorObj) =>{
  
    this.setState({
      doctor: doctorObj,
      currentIndex: doctorObj.regenindex - 1, 
      comments: doctorObj.comments
    })
  }

  //THIS IS NOW IN THE COMMMENT CONTAINER
  // handleFormChange = (event) => {
  //   console.log(event.target.value)
  //   this.setState({
  //     [event.target.name]: event.target.value
  //   })
  // }


  makeNewComment = (commentObj) =>{
    fetch(`http://localhost:3000/comments` ,{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify(commentObj)
    })
    .then(res => res.json())
    .then(newComment => {
      // console.log(newComment)
      this.setState({
        comments: [...this.state.comments, newComment],
        // content: '',
        // editComment: null
      })
    })
    this.submitClear() 

  }

  submitClear = () => {
    this.setState({
      content: '', 
      editComment: null
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    let formData = {doctor_id:this.state.doctor.id, user_id:this.state.loggedInUserId, content: this.state.content}
    this.makeNewComment(formData)
    // this.setState({content: '', editComment: null})
    // console.log(formData , 'i am a new comment')
  }

  editComment = (commentObj) => {
    fetch(`http://localhost:3000/comments/${this.state.editComment.id}`, {
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
        comments,
        // content: '', 
        // editComment: null
      })
    })
    this.submitClear()
  } 

  handleEditSubmit = (event) => {
    event.preventDefault()
    let formData = {content: this.state.content}
    this.editComment(formData)
    // this.setState({content: '', editComment: null})
    // console.log(formData, "i am an edited comment")
  }
  
  //THIS IS NOW IN THE COMMENT CONTAINER
  // editClick = (event, commentObj) => {
  //   this.setState({
  //     content: commentObj.content,
  //     editComment: commentObj
  //   })
  // }


  deleteClick = (event, commentObj) => {
    console.log(event.target, commentObj)
    fetch(`http://localhost:3000/comments/${commentObj.id}`, {
      method: 'DELETE'
    })
    .then(res => res.json())
    .then(
      this.doctorFetch
    )
  }
  
  render() {
    return (
      <div className="main-cointainer" className="App" >
          <NavBar doctors={this.state.doctors} setToken={this.setToken} chooseDoctor={this.chooseDoctor} userFetch={this.userFetch} user={this.state.user} loggedInUserId={this.state.loggedInUserId} />
          <DoctorContainer doctor={this.state.doctor} nextDoctor={this.nextDoctor}  />
          <CommentContainer comments={this.state.comments} user={this.state.user} doctor={this.state.doctor} editComment={this.state.editComment} loggedInUserId={this.state.loggedInUserId} content={this.state.content} handleFormChange={this.handleFormChange} handleSubmit={this.handleSubmit} handleEditSubmit={this.handleEditSubmit} editClick={this.editClick} deleteClick={this.deleteClick}/>
      </div>
    );
  }
}

export default App;