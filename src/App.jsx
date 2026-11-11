import Dashboard from './pages/dashboard'

import { Route,Routes } from 'react-router-dom'
import AddMachine from './pages/addMachine'

import Machine from './pages/machines'

import Nav from './components/nav'

function App(){

  return (

<>
    <Nav/>  
    <Routes>
    <Route path='/' element={<Dashboard/>}/>
      
      <Route path='/machines' element={<Machine/>}/>
        
      <Route path='/machines/new' element={<AddMachine/>}/>
      </Routes>
</>
  )
}


export default App



    