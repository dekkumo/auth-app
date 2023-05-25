import React from 'react'
import { Navigate, Outlet, useLocation } from 'react-router-dom'
import { useAuth } from '../../hooks/use-auth'


const PrivatePage = () => {
  const location = useLocation()
  const {isAuth} = useAuth()

  return isAuth ? (
    <Outlet />
  ) : (
    <Navigate to='/signup' state={{from: location}} />
  )
}

export default PrivatePage