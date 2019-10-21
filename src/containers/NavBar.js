import React, { Component } from 'react'
import DoctorList from '../components/DoctorList'


export default class NavBar extends Component {
    render() {
        return (
            <div>
                <DoctorList doctors={this.props.doctors} chooseDoctor={this.props.chooseDoctor} />
            </div>
        )
    }
}
