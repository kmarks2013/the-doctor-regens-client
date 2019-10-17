import React, { Component } from 'react'
import DoctorList from '../components/DoctorList'

export default class DoctorContainer extends Component {
    render() {
        return (
            <div className='doctor-container'>
                <DoctorList />
            </div>
        )
    }
}
