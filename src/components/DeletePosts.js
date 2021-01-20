import React, { Component } from 'react'
import axios from 'axios'

export class DeletePosts extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            isAuthorised: 'true',
             id: this.props.match.params.id
        }
    }

    componentDidMount = () =>{
        if(sessionStorage.getItem('loggedIn') !== this.state.isAuthorised){
            this.props.history.push("/login");
        }
    }

    handleDelete = (e) =>{
        e.preventDefault()
        var url = `http://localhost:5000/api/post/delete/${this.state.id}`;
        axios.delete(url).then(res =>{
            this.props.history.push('/');
        }).catch(err =>{
            console.log(err);
        })
    }
    
    render() {
        return (
            <div>
                <button onClick={this.handleDelete}>Delete</button>
            </div>
        )
    }
}

export default DeletePosts
