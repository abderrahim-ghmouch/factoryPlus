const Card = function (data) {

const {name,zone,status,dailyProduction}=data

    return (
        <div className="w-72 rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
            <h1 className="text-lg font-bold text-gray-900">{name}</h1>

            <p className="mt-1 text-sm text-gray-500">{zone}</p>

            <span className={`mt-3 inline-block rounded-full px-3 py-1 text-xs font-medium ${
                status === "En fonctionnement" ? "bg-green-100 text-green-700"
                : status === "En panne" ? "bg-red-100 text-red-700"
                : "bg-yellow-100 text-yellow-700"
            }`}>
                {status}
            </span>

            <p className="mt-4 text-sm text-gray-600">
                Production journalière : <span className="font-semibold text-gray-900">{dailyProduction}</span>
            </p>
        </div>
    )
}

export default Card
