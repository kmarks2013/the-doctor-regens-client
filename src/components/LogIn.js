import React from 'react'

export default class LogIn extends React.Component {
    
    state = {
        logIn: false,
        username: '',
        password: '',
        errors: []
    }   

    onChange= event => {
        this.setState({
            [event.target.name]: event.target.value
        })

    }

    logInSubmitted = (event) => {
        event.preventDefault()
        console.log('iwas submitted')
        if (this.state.logIn === true){
            fetch('http://localhost:3000/login', {
                method: "POST",
                headers: {
                    "Content-Type": 'application/json',
                    "Accepts": 'application/json'
                },
                body: JSON.stringify({
                    'username': this.state.username,
                    'password': this.state.password
                })
            })
            .then(res => res.json())
            .then(data => {
                if (data.errors) {
                    this.setState({
                        errors: data.errors
                    })
                } else {
                    this.props.setToken(data.token, data.user_id)
                    this.props.userFetch(data.user_id)
                }
            })
        } else {
            fetch('http://localhost:3000/users', {
                method: "POST",
                headers: {
                    "Content-Type": 'application/json',
                    "Accepts": 'application/json'
                },
                body: JSON.stringify({
                    'username': this.state.username,
                    'password': this.state.password
                })
            })
            .then(res => res.json())
            .then(data => {
                if (data.errors) {
                    this.setState({
                        errors: data.errors
                    })
                } else {
                    this.props.setToken(data.token, data.user_id)
                    this.props.userFetch(data.user_id)
                }
            })
        }
       
        this.setState({
            username: '',
            password: '',
            errors: []
        })
    }


    render() {
        return (
            < >
            <ul>
                {this.state.errors.map(error => <li>{error}</li>)}
            </ul>
            { 
                this.state.logIn 
                ?    
                <section className='login'>
                <h6>Log In </h6>
                <button className='sign-up-button' onClick={ () => this.setState({logIn: false })} > Create an Account</button>
                <form className='login-form' onSubmit={ this.logInSubmitted } >
                    <label htmlFor='log_in_username'>Username</label>
                    <input type='text' onChange={this.onChange} name="username" value={this.state.username} /> 
                    <label htmlFor='log_in_password'>Password</label>
                    <input type='password' onChange={this.onChange} name="password" value={this.state.password} />
                    <input type="submit" />
                </form>
                </section>
                :
                <section className='sign-up'>
                <h4>Sign Up </h4>
                <button  className="log-in-button" onClick={ () => this.setState( {logIn: true })} > Log In </button>
                <form className='sign-up-form' onSubmit={ this.logInSubmitted } >
                    <label htmlFor='sign_up_username'>Username</label>
                    <input type='text' onChange={this.onChange} name="username" value={this.state.username} /> 
                    <label htmlFor='sign_up_password'>Password</label>
                    <input type='password' onChange={this.onChange} name="password" value={this.state.password} />
                    <input type="submit" />
                </form>
                <div className="clear"></div>

                </section>
            }

            </>
        )
    }
}
