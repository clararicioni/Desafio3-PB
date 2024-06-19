import React from 'react';

type Props = {
  isActive: boolean;
  onClick(): void;
};

const Star = ({ isActive, onClick }: Props) => {
  return (
    <button onClick={onClick}>
      <img
        src={isActive ? '/star.png' : '/disabledstar.png'}
        alt="Rating star"
        width={50}
        height={50}
        className="mr-1 max-w-5"
      />
    </button>
  );
};

export default Star;
