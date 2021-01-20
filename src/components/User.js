import React, { Component } from 'react'
import Header from './Header'
import axios from 'axios'
import {Link} from 'react-router-dom'

export class User extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
           isAuthorised: 'true',
           user:{}
        }
    }

    componentDidMount = () =>{
        if(sessionStorage.getItem('loggedIn') !== this.state.isAuthorised){
            this.props.history.push("/login");
        }else{
            var email = this.props.match.params.email;
            var url = `http://localhost:5000/api/currentUser/${email}`
            axios.get(url).then(res =>{
                console.log(res);
                this.setState({
                    user: res.data[0]
                })
            }).catch(err =>{
                console.log(err);
            })
        }
    }
    
    render() {
        return (
            <div>
                <Header></Header>
                <div className="container">
                <table className="table">
                    <thead>
                        <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Password</th>
                        <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{this.state.user.name}</td>
                            <td>{this.state.user.email}</td>
                            <td>{this.state.user.password}</td>
                            <td><Link to={"/user/update/"+this.state.user.email}>Update</Link></td>
                        </tr>
                    </tbody>
                </table>
                </div>
            </div>
        )
    }
}

export default User
