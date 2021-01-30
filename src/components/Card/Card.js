import React, { useState } from 'react';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
  CardHeader,
  CardMedia,
  CardExcerpt,
  CardShowMoreButton,
  CardReveal
} from '.';
import './card.css';

library.add(fas);

function Card({ headline, image, excerpt, showMore }) {
  const [ isOpen, setIsOpen ] = useState(false);

  const reveal = () => {
    setIsOpen((prevState) => !prevState);
  };

  const styles = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  };

  return (
    <div className="card__block col-12 col-md-4">
      <CardHeader headline={headline} />
      <CardMedia image={image} headline={headline} />
      <div style={styles}>
        <CardExcerpt excerpt={excerpt} />
        <CardShowMoreButton clickHandler={reveal}>
          <FontAwesomeIcon icon={ [ 'fas', 'arrow-down' ] } />
        </CardShowMoreButton>
      </div>
      <CardReveal content={showMore} isOpened={isOpen} />
    </div>
  );
}

export default Card;
