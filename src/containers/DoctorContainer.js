import React from 'react'
import Doctor from '../components/Doctor'
import DoctorBio from '../components/DoctorBio'
import DoctorButtons from '../components/DoctorButtons'

export default function DoctorContainer({doctor, nextDoctor}) {    
return (
    <div className='doctor-container'>
        <DoctorButtons />
        <Doctor doctor={doctor} nextDoctor={nextDoctor}/>
        <DoctorBio doctor={doctor}/>
    </div>
    )
}

