import { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'
import type { ReactNode } from 'react'

interface ProtectedRouteProps {
  children: ReactNode
}

export default function ProtectedRoute({ children }: ProtectedRouteProps) {
  const { user, loading } = useContext(AuthContext)
  console.log('ProtectedRoute user:', user, 'loading:', loading);

  // while we are checking the session, don't redirect
  if (loading) return null

  if (user === null) {
    return <Navigate to="/" replace />
  }

  return <>{children}</>

}
