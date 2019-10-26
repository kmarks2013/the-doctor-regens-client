import React, { Component } from 'react'
import DoctorNames from './DoctorNames'

export default class DoctorList extends Component {
    renderDoctorNames = () => {
        return this.props.doctors.map( (doctor) => {
             return <DoctorNames doctor={doctor} chooseDoctor={this.props.chooseDoctor} key={`doctorbutton-${doctor.id}`}/>
         })
     }

    render() {
        return (
            <div className='doctors'>
               {this.renderDoctorNames()} 
            </div>
        )
    }
}
