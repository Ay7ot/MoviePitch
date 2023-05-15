import { ReactNode, createContext, useReducer } from "react";
import { AppContextInterface } from "./types";
import { appReducer } from "./reducer";
import { useAuth } from "./useAuth";

export const AppContext = createContext<AppContextInterface>({
    dispatch: () => {return},
    prompt: '',
    synopsis: '',
    actors: '',
    title: '',
    imageDescription: '',
    imageUrl: '',
    viewPitch: false
})

export function AppProvider({children}: {children: ReactNode}){

    const initialState = useAuth()

    const [mainstate, dispatch] = useReducer(appReducer, initialState)
    console.log(mainstate)
    return (
        <AppContext.Provider value={{...mainstate, dispatch}}>
            {children}
        </AppContext.Provider>
    )
}