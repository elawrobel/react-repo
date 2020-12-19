import React, { Fragment } from 'react' ;

import './App.css';
import News from './components/News';
import Uuid from './components/Uuid';

const data = [
  { id: 1, author: 'Jan Kowalski', title: 'Pilne: Co to był za dzień!', intro: 'Tego świat jeszcze nie widział' },
  { id: 2, author: 'Jan Kowalski', title: 'Wszyscy zazdroszą Polakom!', intro: 'Takiego clickbajtowego tytułu jeszcze nikt nie wymyślił' },
  { id: 3, author: 'Jan Kowalski', title: 'Adam Małysz Zgolił wąs', intro: 'Po przegranym zakładzie z Piotrem Żyłą nasz mistrz olimpijski zgolił wąsy'
  }
];


function App() {
  return(
    <Fragment>
      { data.map( ( elem ) => (
        <News 
          key={`news-${ elem.id }`}
          header={elem.title}
          intro={elem.intro}
          author={elem.author}
        />
      )) }
      <Uuid />
    </Fragment>
  );
}

export default App;
