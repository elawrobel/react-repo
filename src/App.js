import React, { Fragment } from 'react' ;

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import './App.css';

import Timer from './components/Timer';
import Header from './components/Header';
import Footer from './components/Footer';
import Content from './components/Content';

import Home from './pages/Home';
import Contact from './pages/Contact';
import Articles from './pages/Articles';


function App() {

  const styles = {
    position: 'absolute',
    left: '-999px',
    width: '1px',
    height: '1px',
    top: 'auto',

    '&:focus': {
      background: '#efefef',
      display: 'inline-block',
      height: 'auto',
      width: 'auto',
      position: 'static',
      margin: 'auto',
    },

    '&:hover': {
      background: '#40a9ff'
    }
  };


  return(
    <Router>

      <Fragment>
        <a class="skip-to-content-link" href="#main" style={styles} >Skip to content</a>
        <Header />
        <Timer />
        <Content >
          <Switch>
            {/* <Route path="/">
              <Home />
            </Route> */}
            <Route path="/articles">
              <Articles />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Content>
        <Footer />
      </Fragment>

    </Router>
  );
}

export default App;
