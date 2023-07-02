import React, { useState } from 'react'

const Check = ({ model, setModel, color, setColor , lp, setLp, hp, setHp}) => {
  const [expanded, setExpanded] = useState(false);
  const [expanded1, setExpanded1] = useState(false);

  const handleArrowClick = (setState) => {
    setState(ps => !ps);
  };

  const handleDropDownChange = (setState,value) => {
    setState(value);
  }

  const updateState = (setState, value, checked) => {
    if (checked) {
      setState(prevState => [...prevState, value]);
    } else {
      setState(prevState => prevState.filter((item) => item !== value));
    }
  }

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    const state_type = e.target.getAttribute('state_type');
    if (state_type === 'Model') {
      updateState(setModel, value, checked);
    }else if(state_type === 'Color'){
      updateState(setColor, value, checked);
    }
  }


  return (
    <div>
       <select value={lp} onChange={(e)=>handleDropDownChange(setLp,e.target.value)}>
        <option value="">Lower Price</option>
        <option value={10000}>10000</option>
        <option value={20000}>20000</option>
        <option value={30000}>30000</option>
        <option value={40000}>40000</option>
        <option value={50000}>50000</option>
        <option value={60000}>60000</option>
        <option value={70000}>70000</option>
        <option value={80000}>80000</option>
        <option value={90000}>90000</option>
      </select>
      <br/>
        <select value={hp} onChange={(e)=>handleDropDownChange(setHp,e.target.value)}>
        <option value="">Higher Price</option>
        <option value={10000}>10000</option>
        <option value={20000}>20000</option>
        <option value={30000}>30000</option>
        <option value={40000}>40000</option>
        <option value={50000}>50000</option>
        <option value={60000}>60000</option>
        <option value={70000}>70000</option>
        <option value={80000}>80000</option>
        <option value={90000}>90000</option>
      </select>
      <br/>
      <div onClick={() => handleArrowClick(setExpanded)}>
        {expanded ? '▼' : '►'} <b>Select Model</b>
      </div>
      {expanded && (
        <div>
          <input type="checkbox" id="checkbox1" state_type='Model' value='Model 1' checked={model.includes('Model 1')} onChange={(e) => handleCheckboxChange(e)} />
          <label htmlFor="checkbox1">Model 1</label>
          <br />
          <input type="checkbox" id="checkbox2" state_type='Model' value='Model 2' checked={model.includes('Model 2')} onChange={(e) => handleCheckboxChange(e)} />
          <label htmlFor="checkbox2">Model 2</label>
          <br />
          <input type="checkbox" id="checkbox3" state_type='Model' value='Model 3' checked={model.includes('Model 3')} onChange={(e) => handleCheckboxChange(e)} />
          <label htmlFor="checkbox3">Model 3</label>
        </div>
      )}

      <div onClick={() => handleArrowClick(setExpanded1)}>
        {expanded1 ? '▼' : '►'} <b>Select Color</b>
      </div>
      {expanded1 && (
        <div>
          <input type="checkbox" id="checkbox1" state_type='Color' value='Color 1' checked={color.includes('Color 1')} onChange={(e) => handleCheckboxChange(e)} />
          <label htmlFor="checkbox1">Color 1</label>
          <br />
          <input type="checkbox" id="checkbox2" state_type='Color' value='Color 2' checked={color.includes('Color 2')} onChange={(e) => handleCheckboxChange(e)} />
          <label htmlFor="checkbox2">Color 2</label>
          <br />
          <input type="checkbox" id="checkbox3" state_type='Color' value='Color 3' checked={color.includes('Color 3')} onChange={(e) => handleCheckboxChange(e)} />
          <label htmlFor="checkbox3">Color 3</label>
        </div>
      )}
    </div>
  );

}

export default Check