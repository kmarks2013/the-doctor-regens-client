import React from 'react'
import logo from '../logo.svg';

export default function Doctor({doctor, nextDoctor}) {
    console.log(doctor)
    return (
        <div onClick={nextDoctor}>
            <h1>{doctor ?  doctor.name: null}</h1>
            <img src={doctor ?  doctor.image: logo} alt="" />
        </div>
    )
}