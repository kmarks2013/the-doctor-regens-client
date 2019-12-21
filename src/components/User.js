import React from 'react'

export default function User({user, logout}) {
    return (
        <div>
            <h4>{user? user.username : null}</h4>
            <button onClick={logout}>Log Out</button>
        </div>
    )
}
