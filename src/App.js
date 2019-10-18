import React from 'react';
import DoctorContainer from './containers/DoctorContainer'
import './App.css';

const API = "http://localhost:3000/doctors"

class App extends React.Component {
  state = {
    doctors: []
  }


  componentDidMount() {
    console.log("I mounted!")
    fetch(API)
    .then(res => res.json())
    .then(doctorArr => {
     console.log(doctorArr)
    })
  }



  render() {
    console.log(this.state)
    return (
      <div className="App">
        <header className="App-header">
          <DoctorContainer doctors={this.state.doctors} />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
