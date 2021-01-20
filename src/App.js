import {BrowserRouter,Route,Switch} from 'react-router-dom';
import Signup from './components/Signup'
import Login from './components/Login'
import Index from './components/Index'
import User from './components/User'
import PageNotFound from './components/PageNotFound'
import UpdateUser from './components/UpdateUser'
import UpdatePosts from './components/UpdatePosts'
import DeletePosts from './components/DeletePosts'

function App() {
  return (
      <BrowserRouter>
          <Switch>
            <Route path="/" exact component={Index} />
            <Route path="/post/update/:id" exact component={UpdatePosts}/>
            <Route path="/post/delete/:id" exact component={DeletePosts}/>
            <Route path="/user/:email" exact component={User}/>
            <Route path="/user/update/:email" exact component={UpdateUser}/>
            <Route path="/signup" exact component={Signup} />
            <Route path="/login" exact component={Login}/>
            <Route path="*" exact component={PageNotFound} />
          </Switch>
      </BrowserRouter>
  );
}

export default App;
