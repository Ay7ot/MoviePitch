import { ReactNode, createContext, useReducer } from "react";
import { AppContextInterface } from "./types";
import { appReducer } from "./reducer";
import { useAuth } from "./useAuth";

export const AppContext = createContext<AppContextInterface>({
    theme: 'light',
    dispatch: () => {return},
    prompt: ''
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