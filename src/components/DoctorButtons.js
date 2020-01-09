import React from 'react'

export default function DoctorButtons() {

    return (
    <div className='pull-to-open'>
        <img onClick={() => alert("We are curretnly updating! Please check back soon for more content!")} src='./images/pullToOpen.jpg' alt='' />
        <br/>
        <button onClick={() => alert("We are currrently updating Please check back soon for more content!")} > Sonic Devices!</button>
        <br/>
        <button onClick={() => alert("We are currrently updating Please check back soon for more content!")}> Companions!</button>
    </div>
    )
}
