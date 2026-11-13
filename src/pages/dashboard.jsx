import Static from "../components/static"

const Dashboard = function ({machine}) {

    return (
        <>
            <div className="flex justify-around">

            <Static
                machine={machine}
                status={"En panne"} />

                    <Static
                machine={machine}
                status = {"En fonctionnement"}
                />
            
            <Static machine={machine}
                status={"À l'arrêt"}/>
                </div>

            </>
)
}

export default Dashboard