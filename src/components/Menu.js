import {Link} from 'react-router-dom'
const Menu = () =>{
    return(
        <div>
            <ul>
            <Link to="/">Home</Link>
            <Link to="/signup">Signup</Link>
            <Link to="/login">Login</Link>
            </ul>
        </div>
    )
}

export default Menu