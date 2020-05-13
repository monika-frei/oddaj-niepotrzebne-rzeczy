import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom'
import 'normalize.css'
import './main.scss'
import Home from './components/Home'
import LogIn from './components/auth/LogIn'
import SignUp from './components/auth/SignUp'
import Form from './components/Form'
import LogOut from './components/auth/LogOut';
import Header from './components/Header'


class App extends Component {
  render() {
  return (
    <HashRouter>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path = "/" component = { Home } />
          <Route path = "/zaloguj" component = { LogIn } />
          <Route path = "/nowekonto" component = { SignUp } />
          <Route path = "/oddaj-rzeczy" component = { Form } />
          <Route path = "/wylogowano" component = { LogOut } />
        </Switch>      
      </div>
    </HashRouter>
  )
  }
}

export default App;
