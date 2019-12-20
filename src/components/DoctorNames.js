import React from 'react'

export default function DoctorNames({doctor, chooseDoctor}) {
    return (
        <div className='doctor-name'>
            <button onClick={() => chooseDoctor(doctor)} >{doctor.name}</button>
        </div>
    )
}