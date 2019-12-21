import React from 'react'

export default function LogInForm(props) {
    return (
        <div className='login'>
        <p>Log In </p>
        <form className='login-form' onSubmit={props.logInSubmitted } >
            <label htmlFor='log_in_username'>Username</label>
            <input type='text' onChange={props.onChange} name="username" value={props.username} /> 
            <label htmlFor='log_in_password'>Password</label>
            <input type='password' onChange={props.onChange} name="password" value={props.password} />
            <input type="submit" />
        </form>
        <button className='sign-up-button' onClick={ () => props.logInOnOff()} > Click to Create an Account</button>
    </div>
    )
}
