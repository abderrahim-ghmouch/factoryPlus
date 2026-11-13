import Filter from "./filter"

const Search = function ({statusFilter,setStatusFilter,Searched,SetSearch}) {
    return (
        <div className="mx-auto mb-6 flex w-full max-w-2xl flex-col gap-3 rounded-xl bg-gray-200 shadow-md ring-1 ring-gray-200 sm:flex-row sm:items-center">

            <input
                type="text"
                placeholder="Rechercher une machine"
                className="flex-1 rounded-sm border-r-2 border-t-2 border-orange-400 px-3 py-2 text-mono text-black place-content-center focus:border-orange-400 focus:outline-none focus:shadow-amber-400 shadow-md focus:ring-orange-400"
                value={Searched} 
                
                onChange={ (e)=>SetSearch(e.target.value)}   
                />

            

            <Filter value={statusFilter} onChange={setStatusFilter} />

        </div>
    )
}


export default Search
