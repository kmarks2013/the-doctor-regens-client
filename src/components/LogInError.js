import React from 'react'
import {useAlert} from 'react-alert'

export default function LogInError(error) {
    const alert = useAlert()
    return (
        <div>
            {alert.error(error)}
        </div>
    )
}
