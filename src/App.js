import React from 'react';

import './App.css';

const DAY = 'monday';

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

function App() {

  const checkDay = () => {
    if( DAY === 'monday' ){
      return(
        <div>
          <News header="Nagłówek 1" intro="Intro 1" />
          <News header="Nagłówek 2" intro="Intro 2" />
          <News header="Nagłówek 3" intro="Intro 3" />
        </div>
      );
    }
    return(
      <p>nie ma newsow</p>
    )
  }

  return (
    <div className="App">
      {checkDay()}
    </div>
  );
}

export default App;
