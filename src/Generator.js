import React,{useEffect, useState} from 'react'

const Generator = ({data}) => {
    const [number,setNumber] = useState(1);
    const [datas,setDatas] = useState(data)
    const [show,setShow] = useState(false)
    const [lorem,setLorems] = useState()
    const paragen = ()=>{
        const newarr = [...datas];
          newarr.splice(number)
          setLorems(newarr)
          setShow(true)
         
     
    }
    
  return (
    <div>
        <label>Enter Number of Paragraphs</label>
      <input type='number' onChange={(e)=>{setNumber(e.target.value)}} />
      <button onClick={paragen} >Generate</button>
      <div>
         {show&&lorem}
      </div>
    </div>
  )
}

export default Generator
