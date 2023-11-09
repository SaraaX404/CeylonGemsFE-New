import { createContext, useState, useContext } from "react"
import { ContextType, User } from "./types"


const AuthContext = createContext<ContextType | null>(null)

type PropTypes = {
    children:React.ReactNode
}

export const AuthContextProvider = (props:PropTypes)=>{
    const [auth, setAuth] = useState<User | null>(null)

    const login = (user:User)=> setAuth(user)
    const logout = () => setAuth(null)
    

    return(
        <AuthContext.Provider value={{
            user:auth,
            login,
            logout
        }}>
            {props.children}
        </AuthContext.Provider>
    )

}

export const useUserContext = () =>{
    const context = useContext(AuthContext)
    if(!context) throw new Error('Context is null')
    return {...context}
}