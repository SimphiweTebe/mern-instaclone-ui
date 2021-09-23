import { BrowserRouter, Route } from 'react-router-dom'
import Navbar from './components/nav/Navbar'
import Home from './components/views/Home';
import Login from './components/views/Login';
import Profile from './components/views/Profile';
import Signup from './components/views/Signup';

import './styles/main.scss'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main className="page">
        <Route path="/" exact component={Home}/>
        <Route path="/signup" component={Signup}/>
        <Route path="/login" component={Login}/>
        <Route path="/profile" component={Profile}/>
      </main>
    </BrowserRouter>
  );
}

export default App;
