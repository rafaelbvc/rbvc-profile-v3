import { ReactNode, createContext, useContext, useMemo, useState } from 'react'
import { screenH, screenW } from '../../utils/windowResolution';

interface IOrientationContext {
    orientation: boolean | undefined
}


interface IOrientationProvider {
    children: ReactNode
}


export const OrientationContext = createContext({} as IOrientationContext)

export const OrientationProvider = ({ children }: IOrientationProvider) => {

    const [orientation, setOrientation] = useState<boolean | undefined>(undefined)


    useMemo(() => {
        if (screenW >= screenH) {
            setOrientation(false)
        } else {
            setOrientation(true)
        }
    }, [orientation])


    return (
        <OrientationContext.Provider
            value={{
                orientation
            }}>
            {children}
        </OrientationContext.Provider>
    )
}

export default OrientationProvider

export const UseOrientationContext = () => {
    const orientation = useContext(OrientationContext)
    return orientation
}
