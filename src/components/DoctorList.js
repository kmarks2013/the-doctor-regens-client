import React, { Component } from 'react'
import Doctor from './Doctor'
import DoctorBio from './DoctorBio'

export default class DoctorList extends Component {
    render() {
        return (
            <div>
            {/* this file will have 2 children the doctor and the doctors bio */}
               <Doctor />
               <DoctorBio />
            </div>
        )
    }
}
