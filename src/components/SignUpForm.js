import React from 'react'

export default function SignUpForm(props) {
    return (
        <div className='sign-up'>
            <p>Sign Up </p>
            <form className='sign-up-form' onSubmit={props.logInSubmitted} >
                <label htmlFor='sign_up_username'>Username</label>
                <input type='text' onChange={props.onChange} name="username" value={props.username} /> 
                <label htmlFor='sign_up_password'>Password</label>
                <input type='password' onChange={props.onChange} name="password" value={props.password} />
                <input type="submit" />
            </form>
            <button  className="log-in-button" onClick={ () => this.setState( {logIn: true })} > Click to Log In </button>
        </div>
    )
}
