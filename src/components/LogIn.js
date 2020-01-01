import React from 'react'
import SignUpForm from './SignUpForm'
import LogInForm from './LogInForm'
import Error from './Error'
// import { useAlert } from "react-alert";÷

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
                    "Accept": 'application/json'
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
            console.log(this.state.logIn)
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
                console.log(data)
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
    
    logInOnOff = () => {
        this.setState({
            logIn: !this.state.logIn
        })
        console.log(this.state.logIn)
    }
    
    renderErrors = () => {
        this.state.errors.map(error => {
            console.log(error)
            return alert(error)
        })
        this.setState({
            errors:[]
        })
    } 
    

    render() {
        // const alert = useAlert()
        return (
            < >
            {this.state.errors.length > 0 ? this.renderErrors() : null}
            { 
                this.state.logIn
                ?    
                <LogInForm username={this.state.username} password={this.state.password} onChange={this.onChange} logInOnOff={this.logInOnOff} logInSubmitted={this.logInSubmitted}/>
                :
                <SignUpForm username={this.state.username} password={this.state.password} onChange={this.onChange} logInOnOff={this.logInOnOff} logInSubmitted={this.logInSubmitted} />
            }
            </>
        )
    }
}
