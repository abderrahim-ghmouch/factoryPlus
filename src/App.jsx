import Dashboard from './pages/dashboard'

import { Route,Routes } from 'react-router-dom'
import AddMachine from './pages/addMachine'

import { useState, useEffect } from 'react'


import Machine from './pages/machines'

import Nav from './components/nav'

function App(){

  const [machine, setMachine] = useState([])

  const Add=(m)=>{setMachine(list=>[...list,m])}
  useEffect(() => {
    fetch("/machine.json").then(res=>res.json()).then(data=>setMachine(data))
    },[])

  return (
   

     <>

      <Nav />   
      
      <Routes>
        
    <Route path='/' element={<Dashboard machine={machine}/>}/>
      
      <Route path='/machines' element={<Machine machine={machine}/>}/>
        
        <Route path='/add' element={<AddMachine onadd={Add} />}/>
      </Routes>
</>
  )
}


export default App



    