import React from 'react';

import News from '../components/News';
import { Card } from '../components/Card';
import Title from '../components/Title';

const data = [
  { id: 1, author: 'Jan Kowalski', title: 'Pilne: Co to był za dzień!', intro: 'Tego świat jeszcze nie widział' },
  { id: 2, author: 'Jan Kowalski', title: 'Wszyscy zazdroszą Polakom!', intro: 'Takiego clickbajtowego tytułu jeszcze nikt nie wymyślił' },
  { id: 3, author: 'Jan Kowalski', title: 'Adam Małysz Zgolił wąs', intro: 'Po przegranym zakładzie z Piotrem Żyłą nasz mistrz olimpijski zgolił wąsy'
  }
];

const articles = [
  { 
    id: 1, 
    title: 'Pilne: Co to był za dzień!', 
    image: 'https://picsum.photos/300/200',
    excerpt: 'Tego świat jeszcze nie widział',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  },
  { 
    id: 2, 
    author: 'Jan Kowalski', 
    title: 'Wszyscy zazdroszą Polakom!', 
    image: 'https://picsum.photos/300/200?grayscale',
    excerpt: 'Takiego tytułu jeszcze nie było',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  },
  { 
    id: 3, 
    author: 'Jan Kowalski', 
    title: 'Wyjątkoowa rozgrywka', 
    image: 'https://picsum.photos/seed/picsum/300/200',
    excerpt: 'Takie dni jak te tez sie zdazaja!',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  }
];

const styles = {
  padding: 16,
};

function Content () {
  return(
    <div>
      <Title headline='Informacje dnia!' />
      <div className="row" style={styles}>
        { data.map( ( elem ) => (
          <News 
            key={`news-${ elem.id }`}
            header={elem.title}
            intro={elem.intro}
            author={elem.author}
          />
        )) }
      </div>
      <Title headline='Artykuły i plotki' />
      <div className="row" style={styles}>
        { articles.map( ( elem ) => (
          <Card
            key={`news-${ elem.id }`}
            headline={elem.title}
            image={elem.image}
            excerpt={elem.excerpt}
            showMore={elem.text}
          />
        )) }
      </div>
    </div>
  );
}

export default Content;