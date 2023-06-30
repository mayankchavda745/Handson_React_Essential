import React from 'react'

const View = ({lp,hp,modal,data}) => {
  return (
    <>
        <b>View</b>
        {data.map((d,i)=>{
            if(d.price>=lp && d.price<=hp && d.modal===modal)
                return <div key={i}>{d.price} || {d.modal}</div>
            else 
                return <div key={i}></div>    
        })}
    </>
  )
}

export default View