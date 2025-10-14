// src/context/AuthContext.ts
import { createContext } from 'react'
// import { supabase } from '../services/supabaseClient'
// import type { ReactNode } from 'react'
// Session
import type { User } from '@supabase/supabase-js'

type AuthContextType = {
  user: User | null
  loading: boolean
  login: (email: string, password: string) => Promise<void>
  registre: ( nome:string ,email: string, password: string) => Promise<void>
  logout: () => Promise<void>

//   session: Session | null
//   signIn: (email: string, password: string) => Promise<void>
//   signOut: () => Promise<void>
}

// Exporta apenas o contexto
export const AuthContext = createContext({} as AuthContextType)


