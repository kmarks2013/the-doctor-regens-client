import React, { Component } from 'react'
import DoctorList from '../components/DoctorList'
import LogIn from '../components/LogIn'


export default class NavBar extends Component {

    // logInOut = () => {
    //     if (localStorage.id) {
            // <button onClick={() => localStorage.clear()}>LogOut</button>
    //     } else {
        // <LogIn setToken={this.props.setToken} userFetch={this.props.userFetch} />

        //     }
        
        // }
        
        render() {
            return (
                <div>
                {/* {this.logInOut()} */}
                <LogIn setToken={this.props.setToken} userFetch={this.props.userFetch} />
                <DoctorList doctors={this.props.doctors} chooseDoctor={this.props.chooseDoctor} />
                
            </div>
        )
    }
}
