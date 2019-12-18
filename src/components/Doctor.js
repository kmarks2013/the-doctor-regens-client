import React, { Component } from 'react'

export default class Doctor extends Component {
    doctorImage = () => {
        return this.docImage = `../images/${this.props.doctor.image}.png`
    }

    render() {
        return (
            <div className='doctor'>
                <h1 onClick={this.props.nextDoctor}>{this.props.doctor.name}</h1>
                <img  className='doctor-image' onClick={this.props.nextDoctor} src={this.doctorImage()} alt="" />
            </div>
        )
    }
}

// export default function Doctor({doctor, nextDoctor, doctorImage}) {
//     // console.log(doctor)
//     return (
//         <div onClick={this.props.nextDoctor}>
//             {/* <h1>{doctor ?  doctor.name: null}</h1> */}
//             <h1>{this.props.doctor.name}</h1>

//             <img src={this.} alt="" />
//         </div>
//     )