import React, { Component } from 'react'
import axios from 'axios'
import Header from './Header'

export class UpdatePosts extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             isAuthorised : 'true',
             id: this.props.match.params.id,
             title:'',
             description:''
        }
    }

    componentDidMount = () =>{
        if(sessionStorage.getItem('loggedIn') !== this.state.isAuthorised){
            this.props.history.push("/login");
        }else{
            var url = `http://localhost:5000/api/get/posts/${this.state.id}`;
            axios.get(url).then(res =>{
                this.setState({
                    title: res.data[0].title,
                    description: res.data[0].description
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
            description: this.state.description,
            id: this.state.id
        }
        let url = "http://localhost:5000/api/post/update";
        axios.put(url,post).then(response =>{
            this.props.history.push('/');
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
                                <input defaultValue={this.state.title} className="form-control" type="text" name="title" placeholder="Enter Title" onChange={this.handleTitle} />
                            </div>
                            <div className="col-5">
                                <input defaultValue={this.state.description} className="form-control" type="text" name="description" placeholder="Enter Description" onChange={this.handleDescription} />
                            </div>
                            <div className="col-2">
                                <button className="btn btn-primary" type="submit">Submit</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default UpdatePosts
