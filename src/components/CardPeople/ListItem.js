import React from 'react';

function ListItem({ children, onClick }) {
  return (
    <div className="list__item" onClick={onClick} onKeyUp={ this.handleKeyUp} role="button" tabIndex={0}>
      {children}
    </div>
  );
}

export default ListItem;
