import axios from 'axios'
import React, { Component } from 'react'

export class Posts extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             posts: '',
             id: ''
        }
    }

    componentDidMount = () =>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/4`)
        .then(res =>{
            console.log(res.data);
        }).catch(err =>{
            console.log(err);
        })
    }

    handleChange = event =>{
        this.setState({
            id: event.target.value
        })
    }
    
    handleClick = event =>{
        event.preventDefault();
        axios.get(`https://jsonplaceholder.typicode.com/posts/${this.state.id}`)
        .then(res =>{
            console.log(res.data);
            this.setState({
                posts: res.data.title
            })
        }).catch(err =>{
            console.log(err);
        })
    }

    render() {
        return (
            <div>
               <form onSubmit={this.handleClick}>
                    <input type="text" value={this.state.id} onChange = {this.handleChange}/>
                    <button type="submit">Submit</button>
                </form> 
                <h3>{this.state.posts}</h3>
            </div>
        )
    }
}

export default Posts
