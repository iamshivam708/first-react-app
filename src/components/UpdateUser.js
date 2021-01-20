import React, { Component } from 'react'
import axios from 'axios'
import Header from './Header'

export class UpdateUser extends Component {
    
    constructor(props) {
        super(props)
    
        this.state = {
             username:'',
             email:'',
             password:'',
             id:'',
             isAuthorised: 'true'
        }
    }

    componentDidMount = () =>{
        if(sessionStorage.getItem('loggedIn') !== this.state.isAuthorised){
            this.props.history.push("/login");
        }else{
            var email = this.props.match.params.email;
            var url = `http://localhost:5000/api/currentUser/${email}`
            axios.get(url).then(res =>{
                this.setState({
                 id:res.data[0].signup_id,
                 username: res.data[0].name,
                 email: res.data[0].email,
                 password: res.data[0].password 
                })
            }).catch(err =>{
                console.log(err);
            })
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
            email:this.state.email,
            password:this.state.password,
            id: this.state.id
        }
        let url = "http://localhost:5000/api/currentUser/update";
        axios.put(url,user).then((response) =>{
            console.log(response);
            this.props.history.push("/user/"+ this.state.email);
        }).catch(err =>{
            console.log(err);
        })
    }
    
    render() {
        const {username,email,password,id} = this.state
        return (
            <div>
                <Header></Header>
            <div className="container mt-5">
                <h3>Signup Form</h3>
                <form onSubmit={this.handleSubmit} method="PUT">
                    <input type="text" defaultValue={username} className="form-control mt-2" name="username" onChange={this.handleUserName} placeholder="Enter Name" />
                    <input type="email" defaultValue={email} className="form-control mt-2" name="email" onChange={this.handleEmail} placeholder="Enter Email"/>
                    <input type="text" defaultValue={password} className="form-control mt-2" name="password" onChange={this.handlePassword} placeholder="Enter Password"/>
                    <button type="submit" className="btn btn-primary mt-2">Submit</button>
                </form>
                {username}-{email}-{password}-{id}
            </div>
            </div>
        )
    }
}

export default UpdateUser

