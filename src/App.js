import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Navbar from './components/nav/Navbar'
import Home from './components/views/Home';
import Login from './components/views/Login';
import Profile from './components/views/Profile';
import Signup from './components/views/Signup';
import CreatePost from './components/views/CreatePost';

import { Provider } from 'react-redux'

import './styles/main.scss'
import Store from './redux/Store';

function App() {
  return (
    <Provider store={Store}>
      <BrowserRouter>
        <Navbar />
        <main className="page">
          <Switch>
              <Route path="/" exact component={Home}/>
              <Route path="/signup" component={Signup}/>
              <Route path="/login" component={Login}/>
              <Route path="/profile" component={Profile}/>
              <Route path="/create" component={CreatePost}/>
          </Switch>
        </main>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
