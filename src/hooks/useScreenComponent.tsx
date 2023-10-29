import { useEffect, useState } from "react"
import HomeScreen from "../components/profileMenuScreens/HomeScreen"
import HireScreen from "../components/profileMenuScreens/HireScreen"
import Public from "../pages/Public"



// type TUseScreenComponent = {
//     renderComponent: number
// }

//TODO CLEANAGE
const useScreenComponent = (renderComponent: number) => {

    const [screenComponent] = useState<number>(renderComponent)
    const [componentToRender, setComponentToRender] = useState<JSX.Element>(<Public />)


    const handleScreenComponent = () => {
        if (screenComponent === 0) {
            setComponentToRender(<HomeScreen />)
        }
        else if (screenComponent === 4) {
            setComponentToRender(<HireScreen />)
        }
    }


    useEffect(() => {
        handleScreenComponent()
    }, [screenComponent])




    return componentToRender
}

export default useScreenComponent