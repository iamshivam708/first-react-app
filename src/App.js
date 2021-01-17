import {BrowserRouter,Route,Switch} from 'react-router-dom';
import Signup from './components/Signup'
import Login from './components/Login'
import Menu from './components/Menu'
function App() {
  return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route path="/" exact component={Menu} />
            <Route path="/signup" exact component={Signup} />
            <Route path="/login" exact component={Login}/>
          </Switch>
        </div>
      </BrowserRouter>
  );
}

export default App;
