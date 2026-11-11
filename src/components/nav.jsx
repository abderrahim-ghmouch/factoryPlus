import Logo from '../assets/navlogo.png' 

import { NavLink } from 'react-router-dom'


const Nav= function () {
    
    return (

        <>
            <img src={Logo}/>
            
            <div className='sections'>  
    
                <NavLink to="/">dashboard</NavLink>     

                < NavLink to ="/machines">machines</NavLink> 

                <NavLink to="/machines/new">new machine</NavLink> 

                <NavLink to="/kanban">/kanbas</NavLink>    
        
</div>
</>
)}

export default Nav