import Filter from "./filter"

const Search = function ({statusFilter,setStatusFilter,Searched,SetSearch}) {
    return (
        <div className="mx-auto mb-6 flex w-full max-w-2xl flex-col gap-3 rounded-xl bg-white p-4 shadow-sm ring-1 ring-gray-200 sm:flex-row sm:items-center">

            <input
                type="text"
                placeholder="Rechercher une machine..."
                className="flex-1 rounded-lg border border-gray-300 px-3 py-2 text-sm text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
                value={Searched} 
                
                onChange={ (e)=>SetSearch(e.target.value)}   
                />

            

            <Filter value={statusFilter} onChange={setStatusFilter} />

        </div>
    )
}


export default Search
