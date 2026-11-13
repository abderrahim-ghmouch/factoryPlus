import { useState } from "react"


const AddMachine = function ({onadd}) {
    const [Name, SetName] = useState("")
  
    
    const [Zone, SetZone] = useState('Atelier A')

    const [Status, SetStatus] = useState('En fonctionnement')

    const [dailyProduction, SetDailyProduction] = useState('0')


    const hundeleSubmit = function (e) {
        e.preventDefault()
     onadd({
         id: "M-" + Date.now(),
         
         name: Name.trim(), 
     
         zone: Zone,
     
         status: Status,
     
     dailyProduction: Number(dailyProduction)
     })
     

  
        
    }
    return (

        <div div className = "mx-auto mt-6 max-w-md  border-4 border-r-2 border-t-2 border-orange-500 bg-orange-100 p-6 shadow-sm" >
            <h1 className="mb-4 text-lg font-bold text-black">Ajouter une machine</h1>

            <form className="flex flex-col gap-4" onSubmit={hundeleSubmit}>
           
                <label className="flex flex-col gap-1 text-sm text-black">
                    Nom
                    <input
            


                        placeholder="write somthing"
                        value={Name}

                        onChange={(e)=>{SetName(e.target.value)}}
                        className = "rounded-sm border border-orange-400  bg-orange-200 px-3 py-2 text-sm text-black "
                    />
                </label>

                <label className="flex flex-col gap-1 text-sm text-black">
                    Zone
                    <select value={Zone} onChange={(e) => { SetZone(e.target.value) }}
                    
                className="rounded-sm border border-orange-400 bg-orange-200 px-3 py-2 text-sm text-black ">
                        <option value="Atelier A">Atelier A</option>

                        <option value="Atelier B">Atelier B</option>

                        <option value="Atelier C">Atelier C</option>

                        <option value="Atelier D">Atelier D</option>

                    </select>
                </label>

                <label className="flex flex-col gap-1 text-sm text-black">
                 
                    Statut
                    <select select value = {
                        Status
                    }
                    onChange = {
                        (e) => {
                            SetStatus(e.target.value)
                        }
                    }
                    className = "rounded-sm border border-orange-400  bg-orange-200 px-3 py-2 text-sm text-black" >
                      
                        <option value="En fonctionnement">En fonctionnement</option>
                      
                        <option value="En panne">En panne</option>
                       
                        <option value="À l'arrêt">À l'arrêt</option>
                    </select>
                </label>

                <label className="flex flex-col gap-1 text-sm text-black">
                    Production journalière
                    <input
                        type="number"
                        min="0"
                        placeholder="0"
                        value={dailyProduction}
                        onChange={(e) => { SetDailyProduction(e.target.value) }}
                        className="rounded-sm border border-orange-600 bg-orange-200 px-3 py-2 text-sm text-black"
                    />
                </label>

                <button
                    type="submit"
                    className="mt-2 rounded-sm bg-orange-600 border-2 border-blackpx-4 py-2 text-sm font-medium text-black- hover:bg-orange-700"
                >
                    Ajouter
                </button>

            </form>
        </div>
    )
}

export default AddMachine