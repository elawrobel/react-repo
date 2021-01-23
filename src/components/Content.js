import React from 'react';

const styles = {
  padding: 8,
  margin: 8,
};


function Content ({ children }) {
  return(
    <main style={styles}>{ children }</main>
  );
}

export default Content;