import React, { useState } from 'react';
import ChildComponent1 from './ChildComponent1';
import ChildComponent2 from './ChildComponent2';

const ParentComponent = () => {
  const [show, setShow] = useState({
    button1: true,
    button2: true
  });

  const handleToggleButton1 = () => {
    setShow(prevState => ({
      ...prevState,
      button1: !prevState.button1
    }));
  };

  const handleToggleButton2 = () => {
    setShow(prevState => ({
      ...prevState,
      button2: !prevState.button2
    }));
  };

  return (
    <div>
      <button onClick={handleToggleButton1}>Toggle Button 1</button>
      <button onClick={handleToggleButton2}>Toggle Button 2</button>
      <ChildComponent1 show={show.button1} />
      <ChildComponent2 show={show.button2} />
    </div>
  );
};

export default ParentComponent;
