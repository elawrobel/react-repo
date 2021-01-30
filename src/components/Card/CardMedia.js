import React from 'react';

function CardMedia({ image, headline }) {
  return (
    <div className="card__media">
      <img src={image} alt={headline} />
    </div>
  );
}

export default CardMedia;
