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

        <div className="mx-auto mt-6 max-w-md rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
            <h1 className="mb-4 text-lg font-bold text-gray-900">Ajouter une machine</h1>

            <form className="flex flex-col gap-4" onSubmit={hundeleSubmit}>
                <label className="flex flex-col gap-1 text-sm text-gray-700">
                    Nom
                    <input
                        type="text"


                        placeholder="Ex : Robot de soudage"
                        value={Name}

                        onChange={(e)=>{SetName(e.target.value)}}
                        className="rounded-lg border border-gray-300 px-3 py-2 text-sm text-gray-900 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
                    />
                </label>

                <label className="flex flex-col gap-1 text-sm text-gray-700">
                    Zone
                    <select value={Zone} onChange={(e) => { SetZone(e.target.value) }}
                    
                className="rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200">
                        <option value="Atelier A">Atelier A</option>

                        <option value="Atelier B">Atelier B</option>

                        <option value="Atelier C">Atelier C</option>

                        <option value="Atelier D">Atelier D</option>

                    </select>
                </label>

                <label className="flex flex-col gap-1 text-sm text-gray-700">
                    Statut
                    <select value={Status} onChange={(e) => { SetStatus(e.target.value) }} className="rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200">
                        <option value="En fonctionnement">En fonctionnement</option>
                        <option value="En panne">En panne</option>
                        <option value="À l'arrêt">À l'arrêt</option>
                    </select>
                </label>

                <label className="flex flex-col gap-1 text-sm text-gray-700">
                    Production journalière
                    <input
                        type="number"
                        min="0"
                        placeholder="0"
                        value={dailyProduction}
                        onChange={(e) => { SetDailyProduction(e.target.value) }}
                        className="rounded-lg border border-gray-300 px-3 py-2 text-sm text-gray-900 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
                    />
                </label>

                <button
                    type="submit"
                    className="mt-2 rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
                >
                    Ajouter
                </button>

            </form>
        </div>
    )
}

export default AddMachine