import { useEffect, useState, type ReactNode } from "react"
import { AuthContext } from "./AuthContext"
import { supabase } from "../services/supabaseClient"
import type { User } from "@supabase/supabase-js"
import { toast } from "react-toastify"

type AuthProviderProps = {
  children: ReactNode
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)

  // ✅ Recuperar usuário do Supabase (ou localStorage) ao iniciar app
  useEffect(() => {
   supabase.auth.getSession().then(({ data, error }) => {
  console.log('Sessão atual:', data.session)
  if (data.session?.user) {
    setUser(data.session.user)
  }
    if (error) {
    console.error('Erro ao obter sessão:', error)
    toast.error('Erro ao obter sessão')
    setUser(null)
    localStorage.removeItem('usuario')
    }
    // sessão verificada (tem ou não usuário)
    setLoading(false)
})


    // ✅ Ouvir mudanças no auth (ex: login, logout de outras abas)
    const { data: listener } = supabase.auth.onAuthStateChange((event, session) => {
      if (event === 'SIGNED_IN' && session?.user) {
        setUser(session.user)
        localStorage.setItem('usuario', JSON.stringify(session.user))
      }

      if (event === 'SIGNED_OUT') {
        setUser(null)
        localStorage.removeItem('usuario')
      }
    })

    return () => {
      listener?.subscription.unsubscribe()
    }
  }, [])

  // ✅ Função genérica para salvar usuário localmente e no estado
  function salvarUsuario(usuario: User) {
    setUser(usuario)
    localStorage.setItem('usuario', JSON.stringify(usuario))
  }

  async function login(email: string, senha: string) {
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password: senha,
      })

      if (error || !data.user) {
        toast.error(`Erro ao logar: ${error?.message}`)
        return
      }

      salvarUsuario(data.user)
      
      toast.success("Usuário logado com sucesso")
    } catch (err) {
      toast.error("Erro inesperado no login")
      console.error(err)
    }
  }

  async function cadastro(nome: string, email: string, senha: string) {
    try {
      const { data, error } = await supabase.auth.signUp({
        email,
        password: senha,
        options: {
          data: { nome },
        },
      })

      if (error || !data.user) {
        toast.error(`Erro ao cadastrar: ${error?.message}`)
        return
      }

      salvarUsuario(data.user)
      toast.success("Usuário cadastrado com sucesso")
    } catch (err) {
      toast.error("Erro inesperado no cadastro")
      console.error(err)
    }
  }

  async function logout() {
    const { error } = await supabase.auth.signOut()
    if (error) {
      toast.error(`Erro ao sair: ${error.message}`)
      return
    }

    setUser(null)
    localStorage.removeItem('usuario')
    toast.success("Logout realizado")
  }

  return (
    <AuthContext.Provider value={{ user, loading, login, registre: cadastro, logout }}>
      {children}
    </AuthContext.Provider>
  )
}
