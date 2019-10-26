import React from 'react'

export default function User(props) {
    console.log(props)
    return (
        <div>
            <h4>{props.user.username}</h4>
            <button onClick={() => localStorage.clear()}>Log Out</button>
        </div>
    )
}
