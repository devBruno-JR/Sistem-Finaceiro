import {  type ReactNode } from "react"
import { AuthContext } from "./AuthContext"
// import type { User } from "@supabase/supabase-js"



type AuthProviderProps = {
  children: ReactNode
}

export function AuthProvider({ children }: AuthProviderProps) {
    // const [user, setUser] = useState(null)

    async function login(email: string, senha: string) {
        console.log('esse e meu email', email, senha);
        
    }

    async function Cadastro(nome:string, email: string, senha: string) {
        console.log('esse meu email', nome, email, senha);
        
    }

    return (
        <AuthContext.Provider value={{ user: null, login, registre: Cadastro }}>
            {children}
        </AuthContext.Provider>
    )
}