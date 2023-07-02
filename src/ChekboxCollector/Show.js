import React from 'react'

const Show = ({ model, color, lp, hp, data }) => {
  const valNotExist = (state, value) => {
    if(state.every((item)=>item!==value))
      return true;
    else  
      return false;
  }

  return (
    <>
      <div><b>Show</b></div><br />
      <div><b>Price || Model || Color</b></div>
      {
        data.filter((item) => {
          if (lp && item.price < lp)
            return false;
          if (hp && item.price > hp)
            return false;
          if (model.length>0 && valNotExist(model,item.model))  
            return false;
          if (color.length>0 && valNotExist(color,item.color))
            return false;
          return true;
        }).map((d, i) => <div key={i}>{d.price} || {d.model} || {d.color}</div>)
      }
    </>
  )
}

export default Show