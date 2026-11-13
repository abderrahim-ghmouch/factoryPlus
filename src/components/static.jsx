export default function Static({ machine, status }) {

    const FiltredMachines=machine.filter((m)=>m.status===status)

    const length=FiltredMachines.length
    return (

        <div div className ="flex flex-col gap-4 border-4 border-r-2 border-t-2  bg-orange-100 border-orange-500 m-2 w-50 h-20 " >
            <h2 className="">{status}:</h2>
            <p className="font-bold">{length}</p>
        </div>
    )
}
