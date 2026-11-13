import Logo from '../assets/navlogo.png' 

import { NavLink } from 'react-router-dom'


const Nav= function () {
    
    return (

        <nav>
            <img src={Logo}/>
            
            <div className='sections'>  
    
                <NavLink to="/">dashboard</NavLink>     

                <NavLink to="/machines">machines</NavLink> 

                <NavLink to="/add">new machine</NavLink> 

                <NavLink to="/kanban">/kanbas</NavLink>    
        
            </div>
        </nav>
)}

export default Nav