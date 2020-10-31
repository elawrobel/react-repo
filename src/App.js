import React, { Fragment } from 'react';

import './App.css';

// const News = () => <p>Hello !</p>;
function News( { header, intro } ) { // function News( props ) {
  // const { header, intro } = props;
  return(
    <div>
      <h2>{ header }</h2>
      <p>{ intro }</p>
    </div>
  );
}

const data = [ 
  {
    header: 'Nagłówek 1', intro: 'Intro 1',
  }, {
    header: 'Nagłówek 2', intro: 'Intro 2',
  }, { 
    header: 'Nagłówek 3', intro: 'Intro 3',
  } 
];

// data.map( (elem, index) )

function App() {
  return(
    <Fragment>
      { data.map( (elem, index) => (
        <News key={`news-${index}`} header={elem.header} intro={elem.intro} />
      )) }
    </Fragment>
  );
}

export default App;
