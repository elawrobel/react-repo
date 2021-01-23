import React from 'react';

import News from '../components/News';

const data = [
  { id: 1, author: 'Jan Kowalski', title: 'Pilne: Co to był za dzień!', intro: 'Tego świat jeszcze nie widział' },
  { id: 2, author: 'Jan Kowalski', title: 'Wszyscy zazdroszą Polakom!', intro: 'Takiego clickbajtowego tytułu jeszcze nikt nie wymyślił' },
  { id: 3, author: 'Jan Kowalski', title: 'Adam Małysz Zgolił wąs', intro: 'Po przegranym zakładzie z Piotrem Żyłą nasz mistrz olimpijski zgolił wąsy'
  }
];


function Content () {
  return(
    <div>
      { data.map( ( elem ) => (
        <News 
          key={`news-${ elem.id }`}
          header={elem.title}
          intro={elem.intro}
          author={elem.author}
        />
      )) }
    </div>
  );
}

export default Content;