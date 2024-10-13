import { Navigate, Outlet } from 'react-router-dom'
import { isTokenValid } from './lib/validate-token'

export const ProtectedRoutes: React.FC = () => {
  const token = localStorage.getItem('@to-do:Token')

  if (!token || !isTokenValid(token)) {
    return <Navigate to="/signin" replace />
  }

  return <Outlet />
}
