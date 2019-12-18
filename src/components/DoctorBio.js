import React from 'react'

export default function DoctorBio({doctor, reverseBioComp}) {
    return (
        <div className='doctor-bio'>
            <h5></h5>
            <p>{reverseBioComp()}</p>
            <a className='more-info' href={doctor ?  doctor.wikilink: null} target='_blank'>More Info!</a>
            {/* <button onClick={reverseOnClick}>Reverse Bio</button> */}
        </div>
    )
}
