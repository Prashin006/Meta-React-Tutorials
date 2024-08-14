import React from 'react';

const Btn = () => {
  const handleClick = () => {
    alert('I told you not to click me 👿');
  };
  const handleMouseOut = () => {
    alert('You hovered over me');
  };
  return (
    <button
      type="button"
      style={{ color: 'red', cursor: 'pointer' }}
      onMouseOut={handleMouseOut}
      onClick={handleClick}
    >
      Don't Touch me
    </button>
  );
};

export default Btn;
