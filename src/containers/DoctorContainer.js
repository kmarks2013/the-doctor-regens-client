import React, { Component } from 'react'
// import DoctorList from '../components/DoctorList'
import Doctor from '../components/Doctor'
import DoctorBio from '../components/DoctorBio'

export default class DoctorContainer extends Component {    

    render() {
        // console.log(this.props)
        return (
            <div className='doctor-container'>
                <Doctor doctor={this.props.doctor} nextDoctor={this.props.nextDoctor}/>
                <DoctorBio doctor={this.props.doctor}/>
            </div>
        )
    }
}
