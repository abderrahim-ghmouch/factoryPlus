export default function Filter({ value, onChange }){

    return (
        <select
            className="rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
        
            value={value}
            onChange={(e)=>onChange(e.target.value) }
        >

            <option value="all">Toutes les machines</option>

            <option value="En fonctionnement">En fonctionnement</option>

            <option value="En panne">En panne</option>

            <option value="À l'arrêt">À l'arrêt</option>

        </select>
    )

}
