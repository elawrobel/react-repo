import React, { useState } from 'react';

import {
  NameList,
  Details,
  ListItem,
} from '.';


function Employees({ data }) {
  const [ name, setName ] = useState('');
  const [ dob, setDOB ] = useState('');
  const [ info, setInfo ] = useState('');
  const [ photo, setPhoto ] = useState('');
  const [ contact, setContact ] = useState('');

  const handleClick = (el) => {
    setInfo(el.info);
    setName(el.name);
    setDOB(el.dob);
    setPhoto(el.imageURL);
    setContact(el.contact);
  };
  return (
    <div className="employees__container">
      <NameList>
        {data.map((el) => (
          <ListItem key={el.id} onClick={() => handleClick(el)}>
            {el.name}
          </ListItem>
        ))}
      </NameList>
      <Details name={name} info={info} dob={dob} photo={photo} contact={contact} />
    </div>
  );
}

export default Employees;
