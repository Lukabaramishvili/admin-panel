import Topbar from './components/topbar/Topbar';
import Sidebar from './components/sidebar/Sidebar';
import Home from './components/pages/home/Home';
import UserList from './components/pages/userList/UserList';
import User from './components/pages/user/User';
import './app.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Topbar />
      <div className='container'>
        <Sidebar />
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/users'>
            <UserList />
          </Route>
          <Route path='/user/:id'>
            <User />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
