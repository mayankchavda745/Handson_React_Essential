import React from 'react'

const Filter = ({setLp,setHp,setModal}) => {
  return (
    <>
        <b>Filter</b><br/>
        <label>lowerPrice:</label>
        <input onChange={(e)=>setLp(e.target.value)}/><br/>
        <label>HigherPrice:</label>
        <input onChange={(e)=>setHp(e.target.value)}/><br/>
        <label>Modal:</label>
        <input onChange={(e)=>setModal(e.target.value)}/>
        <br/>
    </>
  )
}

export default Filter