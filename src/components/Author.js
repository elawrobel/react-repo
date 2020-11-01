import React from 'react' ;

const styles = {
  color: '#1e272e',
  fontSize: 12,
};

const Author = ({ author }) => <p style={ styles } >Autor: { author }</p>;

export default Author;