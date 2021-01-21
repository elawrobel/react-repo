import React, { Fragment } from 'react' ;

import './App.css';

import Timer from './components/Timer';
import Header from './components/Header';
import Footer from './components/Footer';
import Content from './components/Content';

import Articles from './pages/Articles';


function App() {
  return(
    <Fragment>
      <Header />
      <Timer />
      <Content>
        <Articles /> 
      </Content>
      <Footer />
    </Fragment>
  );
}

export default App;
