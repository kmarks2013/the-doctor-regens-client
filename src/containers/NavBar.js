import React, { Component } from 'react'
import DoctorList from '../components/DoctorList'
import LogIn from '../components/LogIn'
import User from '../components/User'



export default class NavBar extends Component {

    // logInOut = () => {
    //     if (localStorage.id) {
            // <button onClick={() => localStorage.clear()}>LogOut</button>
    //     } else {
        // <LogIn setToken={this.props.setToken} userFetch={this.props.userFetch} />

        //     }
        
        // }
        login = () => {
            if (this.props.user){
               return <User user={this.props.user}/>
            } else {
                return <LogIn setToken={this.props.setToken} userFetch={this.props.userFetch} />
            } 
    
        } 


        render() {
            return (
                <div className='nav-bar'>
                {/* {this.logInOut()} */}
                {this.login()}
                {/* <User user={this.props.user}/> */}
                <DoctorList doctors={this.props.doctors} chooseDoctor={this.props.chooseDoctor} />  
            </div>
        )
    }
}
