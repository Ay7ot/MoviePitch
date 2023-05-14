import { useContext } from "react"
import { AppContext } from "./AppContext"


export const useAuth = () => {
    return useContext(AppContext)
}