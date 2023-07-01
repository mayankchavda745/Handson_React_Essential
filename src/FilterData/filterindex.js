import React , {useState} from 'react'
import Filter from './filter'
import View from './view'

const Filterindex = () => {
    const data = [{price:20000,modal:'A', color:'red'},{price:40000,modal:'C', color:'pink'},{price:90000,modal:'B', color:'red'},
                  {price:10000,modal:'B', color:'blue'},{price:30000,modal:'A', color:'blue'},{price:50000,modal:'C', color:'blue'},
                  {price:60000,modal:'C', color:'pink'},{price:70000,modal:'B', color:'red'},{price:80000,modal:'A', color:'pink'}];
    const [lp, setLp] = useState(-1);
    const [hp, setHp] = useState(100001);
    const [modal, setModal] = useState('');
    const [color, setColor] = useState('');
  return (
    <>
        <div>filterindex</div>
        <Filter setLp={setLp} setHp={setHp} setModal={setModal} setColor={setColor}
                modal={modal} color={color} lp={lp} hp={hp}/>
        <View lp={lp} hp={hp} modal={modal} data={data} color={color} />
    </>
  )
}

export default Filterindex