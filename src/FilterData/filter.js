import React from 'react'

const Filter = ({setLp,setHp,setModal,setColor,modal,color,lp,hp}) => {

  const handleChange = (setState,value) => {
    setState(value);
  }

  return (
    <>
        <b>Filter</b><br/>
        <select value={lp} onChange={(e)=>handleChange(setLp,e.target.value)}>
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
        <select value={hp} onChange={(e)=>handleChange(setHp,e.target.value)}>
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
        <select value={modal} onChange={(e)=>handleChange(setModal,e.target.value)}>
        <option value="">Modal</option>
        <option value="A">A</option>
        <option value="B">B</option>
        <option value="C">C</option>
      </select>
      <br/>
        <select value={color} onChange={(e)=>handleChange(setColor,e.target.value)}>
        <option value="">Color</option>
        <option value="red">red</option>
        <option value="blue">blue</option>
        <option value="pink">pink</option>
      </select>
    </>
  )
}

export default Filter