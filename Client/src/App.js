import React, {Component} from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
//import PRODUCTS from '../src/shared/products';
//import Projects from './pages/Projects';
import Vanity from './pages/Vanity';

export class App extends Component {
  render() {
    return (
      <div className='App'>
      <Router>
            <Navbar />

          <Switch>

            <Route path='/' exact component={Home}/>
            <Route path='/' exact component={Home}/>
          </Switch>
          <div className='container_vanity'>
          <Vanity />
          </div>
          
            <Footer />

      </Router>
    
  </div>
    )
  }
}

export default App;


