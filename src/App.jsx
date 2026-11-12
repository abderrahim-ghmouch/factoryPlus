import Dashboard from './pages/dashboard'

import { Route,Routes } from 'react-router-dom'
import AddMachine from './pages/addMachine'

import { useState, useEffect } from 'react'


import Machine from './pages/machines'

import Nav from './components/nav'

function App(){

  const [machine, setMachine] = useState([])

  useEffect(() => {
    fetch("/public/machine.json").then(res=>res.json()).then(data=>setMachine(data))
    },[])

  return (
   

     <>

    <Nav/>  
    <Routes>
    <Route path='/' element={<Dashboard machine={machine}/>}/>
      
      <Route path='/machines' element={<Machine machine={machine}/>}/>
        
      <Route path='/machines/new' element={<AddMachine machine={machine}/>}/>
      </Routes>
</>
  )
}


export default App



    