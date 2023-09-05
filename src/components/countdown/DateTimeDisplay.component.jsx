import React from 'react';

const DateTimeDisplay = ({ value, id, isDanger }) => {
  return (
    <div id={id} className={isDanger ? 'countdown danger' : 'countdown'}>
      <p className='dateNum'>{`${value}`}</p>
    </div>
  );
};

export default DateTimeDisplay;
