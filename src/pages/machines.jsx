import Search from "../components/search"

import { useState } from "react"
import Card from "../components/card"


const Machines = function ({machine}) {
    
    const [Searched,SetSearched]=useState('')
    

    const [statusFilter,setStatusFilter] = useState('all')

    const visible = machine.filter((e) =>

       
     e.name.toLowerCase().includes(Searched.toLowerCase()) &&
        
        (statusFilter === 'all' || e.status === statusFilter))
    return (<>
        
        <Search Searched={Searched}
            
            SetSearch={SetSearched}
            statusFilter={statusFilter}
            setStatusFilter={setStatusFilter} />
        
    
    <div className="flex flex-wrap gap-4 justify-center">
        {visible.map((m) =>(<Card key={m.id} {...m}/>))}
    </div>

        
        </>
    )
    
}

export default Machines