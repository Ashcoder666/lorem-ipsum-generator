import React,{useEffect, useState} from 'react'

const Generator = ({data}) => {
    const [number,setNumber] = useState(1);
    const [datas,setDatas] = useState([])
    const [show,setShow] = useState(false)
    const [lorem,setLorems] = useState()
    const paragen = ()=>{
       
        
        let count = parseInt(number) 
        if(count < 0 ){
          count= 1
        }
       setDatas(data.slice(0,count))
       setShow(true)
    }
    
  return (
    <div>
        <label>Enter Number of Paragraphs</label>
      <input type='number' onChange={(e)=>{setNumber(e.target.value)}} />
      <button onClick={paragen} >Generate</button>
      <div>
       {show&&datas.map((item,index)=>{return <p key={index}>{item}</p>})}
      </div>
    </div>
  )
}

export default Generator
