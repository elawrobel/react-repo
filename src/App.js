import React, { Fragment } from 'react' ;

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import SecureRoute from './components/SecureRoute';

import './App.css';

import Timer from './components/Timer';
import Header from './components/Header';
import Footer from './components/Footer';
import Content from './components/Content';

import Contact from './pages/Contact';
import Articles from './pages/Articles';


function App() {
  return(
    <Router>
      <Fragment>
        <Header />
        <Timer />
        <Content>
          <Articles />
          <Contact />
        </Content>
        <Footer />
      </Fragment>
    </Router>

  );
}

export default App;
