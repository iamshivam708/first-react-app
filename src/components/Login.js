import React, { Component } from 'react';
import axios from 'axios';

export class Login extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             email:'',
             password:'',
             data:'',
             errorMessage:''
         }
    }

    handleEmail = e =>{
        e.preventDefault();
        this.setState({
            email: e.target.value
        })
    }

    handlePassword = e =>{
        e.preventDefault();
        this.setState({
            password: e.target.value
        })
    }

   handleSubmit = () =>{
       const user = {
           email: this.state.email,
           password: this.state.password
       }
        var url = 'http://localhost:5000/api/login'
        axios.post(url,user)
        .then(response => this.setState({ data: response.data.email }))
        .catch(error => {
            this.setState({ errorMessage: error.message });
            console.error('There was an error!', error);
        });
        
    }
    
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="email" name="email" placeholder="Enter Email" onChange={this.handleEmail} />
                    <input type="password" name="password" placeholder="Enter Password" onChange={this.handlePassword} />
                    <button type="submit">submit</button>
                </form>
                {this.state.email} - {this.state.password}

               error- {this.state.errorMessage}, data - {this.state.data}
            </div>
        )
    }
}

export default Login
