import Topbar from './components/topbar/Topbar';
import Sidebar from './components/sidebar/Sidebar';
import Home from './components/pages/home/Home';
import UserList from './components/pages/userList/UserList';
import User from './components/pages/user/User';
import NewUser from './components/pages/newUser/NewUser';
import ProductList from './components/pages/productList/ProductList';
import Product from './components/pages/product/Product';
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
          <Route path='/newUser'>
            <NewUser />
          </Route>
          <Route path='/products'>
            <ProductList />
          </Route>
          <Route path='/product/:id'>
            <Product />
          </Route>
          <Route path='/newProduct'>
            <NewUser />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
