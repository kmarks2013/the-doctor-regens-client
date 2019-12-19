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
        logout = () => {
            localStorage.clear()
            this.forceUpdate()
        }

        login = () => {
            if (this.props.user){
               return <User user={this.props.user} logout={this.logout}/>
            } else {
                return <LogIn setToken={this.props.setToken} userFetch={this.props.userFetch} />
            } 
    
        } 



        render() {
            return (
                <div className='nav-bar'>
                <h2> The Doctor Regens</h2>
                {/* {this.logInOut()} */}
                {this.login()}
                {/* <User user={this.props.user}/> */}
                <DoctorList doctors={this.props.doctors} chooseDoctor={this.props.chooseDoctor} />  
            </div>
        )
    }
}
