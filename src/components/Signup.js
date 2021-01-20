import React, { Component } from 'react'
import axios from 'axios'
import Header from './Header'

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
        e.preventDefault();
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
                <Header></Header>
            <div className="container mt-5">
                <h3>Signup Form</h3>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" className="form-control mt-2" name="username" onChange={this.handleUserName} placeholder="Enter Name" />
                    <input type="email" className="form-control mt-2" name="email" onChange={this.handleEmail} placeholder="Enter Email"/>
                    <input type="password" className="form-control mt-2" name="password" onChange={this.handlePassword} placeholder="Enter Password"/>
                    <button type="submit" className="btn btn-primary mt-2">Submit</button>
                </form>
            </div>
            </div>
        )
    }
}

export default Signup
