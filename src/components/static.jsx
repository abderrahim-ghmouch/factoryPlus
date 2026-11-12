export default function Static({ machine, status }) {

    const FiltredMachines=machine.filter((m)=>m.status===status)

    const length=FiltredMachines.length
    return (

        <div className="flex gap-4 bg-amber-800 m-2 " >
            <h2 classNa>{status}</h2>
            <p>{length}</p>
        </div>
    )
}
