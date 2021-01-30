import React, { useState } from 'react';

import Author from './Author';
import Scoring from './Scoring';

const styles = {
  border: '1px solid #808e9b',
  backgroundColor: 'rgb(210 218 226 / 48%)',
  padding: 8,
  header:{
    color: '#1e272e',
  },
  para: {
    color: '#1e272e',
    backgroundColor: '#ffc048',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    maxWidth: '25ch',
  },
};


function News ( { header, intro, author } ) {
  const [ score ] = useState( 5 );

  return(
    <div style={styles} className="news col-12 col-md-4">
      <h2 style={styles.header}>{ header }</h2>
      <p style={styles.para}>{ intro }</p>
      <Author author={author} />
      <Scoring score={score} />
    </div>
  );
}

export default News;