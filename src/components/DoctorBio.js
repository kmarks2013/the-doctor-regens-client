import React from 'react'

export default function DoctorBio({doctor}) {
    return (
        <div className='doctor-bio'>
            <h5></h5>
            <p>{doctor ? doctor.bio: null}</p>
            <a className='more-info' href={doctor ?  doctor.wikilink: null} target='_blank'>More Info!</a>
        </div>
    )
}
