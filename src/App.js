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
    this.doctorFetch()
    localStorage.clear()
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
      this.setState({
        comments: [...this.state.comments, newComment],
      })
    })
  }

  editComment = (commentObj, commentId) => {
    fetch(`http://localhost:3000/comments/${commentId}`, {
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
          <CommentContainer comments={this.state.comments} user={this.state.user} doctor={this.state.doctor} loggedInUserId={this.state.loggedInUserId} editComment={this.editComment} makeNewComment={this.makeNewComment} deleteClick={this.deleteClick}/>
      </div>
    );
  }
}
export default App;