import React from 'react'

export default function User(props) {
    return (
        <div>
            <h4>{props.user.username}</h4>
            <button onClick={props.logout}>Log Out</button>
        </div>
    )
}
