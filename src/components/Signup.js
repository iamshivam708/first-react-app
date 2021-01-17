import React, { Component } from 'react'
import axios from 'axios'

export class Signup extends Component {
    
    constructor(props) {
        super(props)
    
        this.state = {
             username:'',
             email:'',
             password:''
        }
    }
    handleUserName = (e) =>{
        e.preventDefault();
        this.setState({
            username: e.target.value
        })
    }
    handleEmail = (e) =>{
        e.preventDefault();
        this.setState({
            email: e.target.value
        })
    }
    handlePassword = (e) =>{
        e.preventDefault();
        this.setState({
            password: e.target.value
        })
    }
    handleSubmit = e =>{
        const user = {
            name: this.state.username,
            email: this.state.email,
            password: this.state.password
        }
        let url = "http://localhost:5000/api/signup"
        axios.post(url,user).then((response) =>{
            console.log(response);
            this.props.history.push("/");
        }).catch(err =>{
            alert("error ocuurred");
        })
    }
    
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" name="username" onChange={this.handleUserName} placeholder="Enter Name" />
                    <input type="email" name="email" onChange={this.handleEmail} placeholder="Enter Email"/>
                    <input type="password" name="password" onChange={this.handlePassword} placeholder="Enter Password"/>
                    <button type="submit">Submit</button>
                </form>
                {this.state.username}-{this.state.email}-{this.state.password}
            </div>
        )
    }
}

export default Signup
