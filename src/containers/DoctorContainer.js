import React, { Component } from 'react'
// import DoctorList from '../components/DoctorList'
import Doctor from '../components/Doctor'
import DoctorBio from '../components/DoctorBio'

export default class DoctorContainer extends Component {    
    state = {
        reverseBio: false
    }

    reverseOnClick = () =>{
        console.log('i have been clicked', this.state.reverseBio)
        this.setState({
            reverseBio: !this.state.reverseBio
        })
        // this will also need to return the doctor prop
    
    }

    reverseBioComp = () => {
        // console.log('this will reverse the bio', this.props.doctor.bio)

        if (this.state.reverseBio === true){
            return this.props.doctor.bio.split("").reverse().join("");
        } else
            return this.props.doctor.bio
    }

    render() {
        // console.log(this.props)
        return (
            <div className='doctor-container'>
                <div className='pull-to-open'>
                <img src='./images/pullToOpen.jpg' alt='' />
                <br/>
                <button> Sonic Devices!</button>
                <br/>
                <button> Companions!</button>
                </div>
                <Doctor doctor={this.props.doctor} nextDoctor={this.props.nextDoctor}/>
                <DoctorBio doctor={this.props.doctor} reverseBioComp={this.reverseBioComp} reverseOnClick={this.reverseOnClick}/>
            </div>
        )
    }
}
