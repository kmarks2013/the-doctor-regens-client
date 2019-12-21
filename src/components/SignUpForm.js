import React from 'react'

export default function SignUpForm({logInSubmitted, onChange, username, password, logInOnOff }) {
    return (
        <div className='sign-up'>
            <p>Sign Up </p>
            <form className='sign-up-form' onSubmit={logInSubmitted} >
                <label htmlFor='sign_up_username'>Username</label>
                <input type='text' onChange={onChange} name="username" value={username} /> 
                <label htmlFor='sign_up_password'>Password</label>
                <input type='password' onChange={onChange} name="password" value={password} />
                <input type="submit" />
            </form>
            <button  className="log-in-button" onClick={ () => logInOnOff()} > Click to Log In </button>
        </div>
    )
}
