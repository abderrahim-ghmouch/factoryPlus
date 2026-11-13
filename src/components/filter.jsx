export default function Filter({ value, onChange }){

    return (
        <select
            className="rounded-sm border border-orange-400 bg-orange-100 px-3 py-2 text-sm text-black"
        
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
