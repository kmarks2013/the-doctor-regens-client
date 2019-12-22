import React, {Fragment} from 'react'
import {useAlert} from 'react-alert'

export default function Error({error}) {
    const alert = useAlert()
    console.log(error)
    return (
        <>
            {alert.error('i should be an error')}
        </>
    )
}
