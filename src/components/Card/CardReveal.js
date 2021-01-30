import React from 'react';

function CardReveal({ content, isOpened }) {
  let setClass = isOpened ? 'card__content is-open' : 'card__content';

  return <div className={setClass}>{content}</div>;
}

export default CardReveal;
