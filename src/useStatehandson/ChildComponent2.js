import React from 'react';

const ChildComponent2 = ({ show }) => {
  return (
    <div>
      <h2>Child Component 2</h2>
      <p>Show Button 2: {show ? 'true' : 'false'}</p>
    </div>
  );
};

export default ChildComponent2;
