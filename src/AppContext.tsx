import { ReactNode, createContext, useReducer } from "react";
import { AppContextInterface } from "./types";
import { appReducer } from "./reducer";
import { useAuth } from "./useAuth";

export const AppContext = createContext<AppContextInterface>({
    dispatch: () => { return },
    prompt: '',
    synopsis: '',
    actors: '',
    title: '',
    imageDescription: '',
    imageUrl: '',
    viewPitch: false,
    showPitchButton: false,
    movieBossText: `Give me a one-sentence concept and I'll give you an eye-catching title, a synopsis the studios will love, a movie poster...AND choose the cast!`
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