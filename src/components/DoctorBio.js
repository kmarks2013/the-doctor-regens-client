import React from 'react'

export default function DoctorBio({doctor}) {
    return (
        <div>
            <h4>{doctor.bio}</h4>
            {/* <button onClick={doctor ?  doctor.wikilink: null}>More Info</button> */}
        </div>
    )
}
