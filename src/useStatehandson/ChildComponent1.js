import React from 'react';

const ChildComponent1 = ({ show }) => {
  return (
    <div>
      <h2>Child Component 1</h2>
      <p>Show Button 1: {show ? 'true' : 'false'}</p>
    </div>
  );
};

export default ChildComponent1;
