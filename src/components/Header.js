import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export class Header extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             loggedIn: 'true',
             email: sessionStorage.getItem('email')
        }
    }
    
    componentDidMount = () =>{
        if(sessionStorage.getItem('loggedIn') === this.state.loggedIn){
            document.getElementById('signup').style.display = "none";
            document.getElementById('login').style.display = "none";
        }else{
            document.getElementById('user').style.display = "none";
            document.getElementById('logout').style.display = "none";
        }
    }
    handleLogout = (e) =>{
        e.preventDefault();
        sessionStorage.removeItem('loggedIn');
        sessionStorage.removeItem('email');
        window.location.reload();
    }

    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container-fluid">
                        <Link className="nav-link" to="/">Student</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav mx-auto">
                            <li className="nav-item">
                            <Link className="nav-link" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                            <Link className="nav-link" to={"/user/"+this.state.email} id="user">User</Link>
                            </li>
                            <li className="nav-item">
                            <Link className="nav-link" id="logout" onClick={this.handleLogout}>Logout</Link>
                            </li>
                            <li className="nav-item">
                            <Link className="nav-link" to="/signup" id="signup">Signup</Link>
                            </li>
                            <li className="nav-item">
                            <Link className="nav-link" to="/login" id="login">Login</Link>
                            </li>
                        </ul>
                        </div>
                    </div>
                    </nav>
            </div>
        )
    }
}

export default Header
