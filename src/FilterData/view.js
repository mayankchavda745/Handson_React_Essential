import React from 'react'

const View = ({lp,hp,modal,data,color}) => {

  return (
    <>
        <b>View</b><br/>
        <div>Price || Modal || Color</div>
        {data.filter((item)=>{
            if(lp && item.price<lp)
              return false;
            if(hp && item.price>hp)
              return false;
            if(modal && item.modal!==modal)
              return false;
            if(color && item.color!==color)
              return false;
            return true;
          }).map((d,i)=><div key={i}>{d.price} || {d.modal} || {d.color}</div>)}
    </>
  )
}

export default View