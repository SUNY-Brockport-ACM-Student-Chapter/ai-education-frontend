import React from 'react';
import './component-style.css';

const PrevNext = () => {
  return (
    <div className="prevnext-buttonbox">
    <button className='previous button-invalid'>
      <p>❮ Prev</p>
    </button>
    <button className='next'>
      <p>Next ❯</p>
    </button>
    </div>
  );
};

export default PrevNext;