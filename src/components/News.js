import React, { useState } from 'react';

import Author from './Author';
import Scoring from './Scoring';

const styles = {
  border: '1px solid #808e9b',
  backgroundColor: '#e6e6e6',
  padding: 8,
  header:{
    color: '#1e272e',
    fontSize: '24px',
  },
  para: {
    color: '#ffffff',
    backgroundColor: '#6c63ff',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    maxWidth: '25ch',
  },
};


function News ( { header, intro, author } ) {
  const [ score ] = useState( 5 );

  return(
    <div className="col-12 col-md-4">
      <div className="news" style={styles}>
        <h3 style={styles.header}>{ header }</h3>
        <p style={styles.para}>{ intro }</p>
        <Author author={author} />
        <Scoring score={score} />
      </div>
    </div>
  );
}

export default News;