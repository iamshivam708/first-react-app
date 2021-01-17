import React,{useState,useEffect} from 'react'

function Hello() {
    const[username,setUsername] = useState('');
    const [post,setPost] = useState('');

    const handleSubmit =() =>{
        alert(`${username} and ${post}`);
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
            <input type="text" value={username} onChange={e => setUsername(e.target.value)} />
            <input type="text" value={post} onChange={e => setPost(e.target.value)} />
            <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default Hello
