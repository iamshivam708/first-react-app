import React, { Component } from 'react'
import Header from './Header'
import axios from 'axios'
import {Link} from 'react-router-dom'

export class Index extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             isAuthorised : 'true',
             title:'',
             description:'',
             posts:[]
        }
    }
    componentDidMount = () =>{
        if(sessionStorage.getItem('loggedIn') !== this.state.isAuthorised){
            this.props.history.push("/login");
        }else{
            let url="http://localhost:5000/api/get/posts";
            axios.get(url).then(res =>{
                this.setState({
                    posts: res.data
                })
            }).catch(err =>{
                console.log(err);
            })
        }
    }

    handleTitle = (e) =>{
        e.preventDefault();
        this.setState
        ({
            title: e.target.value
        })
    }

    handleDescription = (e) =>{
        e.preventDefault();
        this.setState
        ({
            description: e.target.value
        })
    }

    handleSubmit = e =>{
        e.preventDefault();
        const post = {
            title: this.state.title,
            description: this.state.description
        }
        let url = "http://localhost:5000/api/posts";
        axios.post(url,post).then(response =>{
            window.location.reload();
            this.setState({
                title:'',
                description:''
            })
        }).catch(error =>{
            console.log(error);
        })
    }
    
    render() {
        return (
            <div>
                <Header></Header>
                <div className="container mt-5" align="center">
                    <form onSubmit={this.handleSubmit}>
                        <div className="row">
                            <div className="col-5">
                                <input className="form-control" type="text" name="title" placeholder="Enter Title" onChange={this.handleTitle} />
                            </div>
                            <div className="col-5">
                                <input className="form-control" type="text" name="description" placeholder="Enter Description" onChange={this.handleDescription} />
                            </div>
                            <div className="col-2">
                                <button className="btn btn-primary" type="submit">Submit</button>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="container mt-3">
                    <table className="table">
                        <thead>
                        <tr>
                            <th scope="col">Id</th>
                            <th scope="col">Title</th>
                            <th scope="col">Description</th>
                            <th colSpan="2"scope="col">Action</th>
                        </tr>
                        </thead>
                        <tbody>
                            {this.state.posts.map(post =>(
                                <tr key={post.post_id}>
                                <td>{post.post_id}</td>
                                <td>{post.title}</td>
                                <td>{post.description}</td>
                                <td><Link className="btn btn-primary" to={"/post/update/"+post.post_id}>update</Link></td>
                                <td><Link className="btn btn-danger" to={"/post/delete/"+post.post_id}>Delete</Link></td>
                                </tr>
                            ))}
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default Index
