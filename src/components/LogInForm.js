import React from 'react'

export default function LogInForm({logInSubmitted, onChange, username, password, logInOnOff }) {
    return (
        <div className='login'>
        <p>Log In </p>
        <form className='login-form' onSubmit={logInSubmitted } >
            <label htmlFor='log_in_username'>Username</label>
            <input type='text' onChange={onChange} name="username" value={username} /> 
            <label htmlFor='log_in_password'>Password</label>
            <input type='password' onChange={onChange} name="password" value={password} />
            <input type="submit" />
        </form>
        <button className='sign-up-button' onClick={ () => logInOnOff()} > Click to Create an Account</button>
    </div>
    )
}
