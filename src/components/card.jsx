const Card = function (data) {

const {name,zone,status,dailyProduction}=data

    return (
        < div className = "w-72 rounded-sm bg-orange-100 border-4 border-r-2 border-t-2 border-orange-500 p-5 " >
            <h1 className="text-lg font-bold text-gray-900">{name}</h1>

            <p className="mt-1 text-md ">{zone}</p>

            <     span className={`mt-3 inline-block  border-2  px-3 py-1 text-xs
            bg-yellow-100 text-yellow-700`}>
                {status}
            </span>

            <p className="mt-4 text-sm font-bold text-black">
                Production:<span className="text-yellow-700  font-normal">{dailyProduction}</span>
            </p>
        </div>
    )
}

export default Card
