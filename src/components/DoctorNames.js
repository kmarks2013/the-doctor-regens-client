import React from 'react'

export default function DoctorNames({doctor, chooseDoctor}) {
    return (
        <div className='doctor-name'>
            <button onClick={(event) => chooseDoctor(event, doctor)} >{doctor.name}</button>
        </div>
    )
}
