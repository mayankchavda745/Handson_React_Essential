import React, { useState } from 'react'
import Check from './Check'
import Show from './Show'

const Checkindex = () => {
  const data = [{ price: 20000, model: 'Model 1', color: 'Color 1' }, { price: 40000, model: 'Model 3', color: 'Color 3' }, { price: 90000, model: 'Model 2', color: 'Color 1' },
  { price: 10000, model: 'Model 2', color: 'Color 2' }, { price: 30000, model: 'Model 1', color: 'Color 2' }, { price: 50000, model: 'Model 3', color: 'Color 2' },
  { price: 60000, model: 'Model 3', color: 'Color 3' }, { price: 70000, model: 'Model 2', color: 'Color 1' }, { price: 80000, model: 'Model 1', color: 'Color 3' }];
 
  const [lp, setLp] = useState(-1);
  const [hp, setHp] = useState(100001);
  const [model, setModel] = useState([]);
  const [color, setColor] = useState([]);
  return (
    <>
      <Check lp={lp} setLp={setLp} hp={hp} setHp={setHp} model={model} 
             setModel={setModel} color={color} setColor={setColor} />
      <Show model={model} color={color} lp={lp} hp={hp} data={data} />
    </>
  )
}

export default Checkindex