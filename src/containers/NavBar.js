import React, { Component } from 'react'
import DoctorList from '../components/DoctorList'
import LogIn from '../components/LogIn'


export default class NavBar extends Component {
    render() {
        return (
            <div>
                <LogIn setToken={this.props.setToken} userFetch={this.props.userFetch} />
                <DoctorList doctors={this.props.doctors} chooseDoctor={this.props.chooseDoctor} />
                
            </div>
        )
    }
}
