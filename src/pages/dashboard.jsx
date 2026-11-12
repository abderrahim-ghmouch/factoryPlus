import Static from "../components/static"

const Dashboard = function ({machine}) {

    return (
        <>
            <Static
                machine={machine}
                status={"En panne"} />

                    <Static
                machine={machine}
                status = {"En fonctionnement"}
            />
            
            <Static machine={machine}
                status={"À l'arrêt"}/>

            </>
)
}

export default Dashboard