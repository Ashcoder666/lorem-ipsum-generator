import React,{useState} from 'react'
import data from './data'
import Generator from './Generator'

const App = () => {
  const [lorems,setLorems]= useState(data)
  return (
    <div>
     <h1>Lorem ipsum Generator</h1>
     <Generator data={lorems}/>
    </div>
  )
}

export default App
