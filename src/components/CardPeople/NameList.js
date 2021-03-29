import React from 'react';

function NameList({ children }) {
  return (
    <div className="employees__wrapper-list">
      <div className="list">{children}</div>
    </div>
  );
}

export default NameList;
