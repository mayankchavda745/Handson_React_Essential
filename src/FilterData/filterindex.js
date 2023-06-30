import React , {useState} from 'react'
import Filter from './filter'
import View from './view'

const Filterindex = () => {
    const [data,setData] = useState([{price:20000,modal:'A'},{price:40000,modal:'B'},{price:90000,modal:'C'},
                                    {price:10000,modal:'B'},{price:30000,modal:'A'},{price:50000,modal:'C'},
                                    {price:60000,modal:'C'},{price:70000,modal:'B'},{price:80000,modal:'A'},]);
    const [lp,setLp] = useState(0);
    const [hp,setHp] = useState(10000);
    const [modal,setModal] = useState('');
    console.log({lp,hp,modal});
  return (
    <>
        <div>filterindex</div>
        <Filter setLp={setLp} setHp={setHp} setModal={setModal}/>
        <View lp={lp} hp={hp} modal={modal} data={data}/>
    </>
  )
}

export default Filterindex