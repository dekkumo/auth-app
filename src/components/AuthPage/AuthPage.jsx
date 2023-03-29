import React from 'react'
import { Navigate, Outlet, useLocation } from 'react-router-dom'
import { useAuth } from '../../hooks/use-auth'

const AuthPage = () => {
  const location = useLocation()
  let {isAuth} = useAuth()

  return isAuth ? (
    <Navigate to='/mainpage' state={{from: location}} />
  ) : (
    <Outlet />
  )
}

export default AuthPage