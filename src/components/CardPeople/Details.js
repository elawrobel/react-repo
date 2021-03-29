import React from 'react';
import CardPeople from './CardPeople';

function Details(props) {
  const { name, info, dob, photo, contact } = props;
  return (
    <div className="employees__wrapper-details">
      <CardPeople name={name} info={info} dob={dob} photo={photo} contact={contact} />
    </div>
  );
}

export default Details;
