import React from 'react';
import './CardPeople.css';

function CardPeople(props) {
  const { name, info, contact, photo } = props;
  return (
    <div className="card__people">
      <div className="card__people-photo">
        <img className="card__people-image" src={photo} alt={name} />
      </div>
      <div className="card__people-content">
        <h2 className="card__people-name">{name}</h2>
        <p className="card__people-bio">{info}</p>
        <p className="card__people-contact">{contact}</p>
      </div>
    </div>
  );
}

export default CardPeople;
