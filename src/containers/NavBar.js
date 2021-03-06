import React, { Component } from 'react'
import DoctorList from '../components/DoctorList'
import LogIn from '../components/LogIn'
import User from '../components/User'

export default class NavBar extends Component {
        login = () => {
            if (this.props.user){
               return <User user={this.props.user} logout={this.props.logout}/>
            } else {
                return <LogIn setToken={this.props.setToken} userFetch={this.props.userFetch} />
            } 
    
        }
        
        render() {
            return (
                <div className='nav-bar'>
                <div className='title-log'>
                    <div className='title'>
                    <h2>The Doctor Regens</h2>
                    <img className='logo' src='/doctor-who-logo-transparent-1.png' />
                    </div>
                    {this.login()}
                </div>
                <DoctorList doctors={this.props.doctors} chooseDoctor={this.props.chooseDoctor} />  
            </div>
        )
    }
}
