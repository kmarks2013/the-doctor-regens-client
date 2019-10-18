import React from 'react';
import DoctorContainer from './containers/DoctorContainer'
import CommentContainer from './containers/CommentContainer'
import './App.css';

const API = "http://localhost:3000/doctors"

class App extends React.Component {
  state = {
    doctors: [],
    currentIndex: 0,
    author: '',
    content: ''
  }


  componentDidMount() {
    console.log("I mounted!")
    fetch(API)
    .then(res => res.json())
    .then(doctorArr => {
    //  console.log(doctorArr)
      this.setState({
        doctors: doctorArr
      })
    })
  }

  theDoctor = () => {
    // const nextDoctor = this.state.currentIndex + 1
    return this.state.doctors[this.state.currentIndex]
  }

  nextDoctor = () => {
    console.log('i have been clicked and i should update the state of the current index to show the next doctor')
    console.log(this.state.doctors.length)
    let newIndex 
    if (this.state.currentIndex === this.state.doctors.length) {
      newIndex = 0
    } else {
      newIndex = this.state.currentIndex + 1
    }
    this.setState({
      currentIndex: newIndex
    })
  }

  handleFormChange = (event) => {
    console.log(event.target.value, event.target.name)
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
    console.log(this.state)
    return (
      <div className="App">
          <DoctorContainer doctor={this.theDoctor()} nextDoctor={this.nextDoctor} />
          <CommentContainer author={this.state.author} content={this.state.content} handleFormChange={this.handleFormChange}/>
      </div>
    );
  }
}

export default App;