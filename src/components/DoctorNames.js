import React from 'react'

export default function DoctorNames({doctor, chooseDoctor}) {
    return (
        <div>
            <button onClick={(event) => chooseDoctor(event, doctor)} >{doctor.name}</button>
        </div>
    )
}
