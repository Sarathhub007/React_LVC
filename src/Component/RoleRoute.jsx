import React from 'react'
import { useAuth } from '../context/AuthContext'
import { Navigate, Outlet } from 'react-router-dom';

export default function RoleRoute({allowed}) {
  const{user}=useAuth();

  if(!user){
    return <Navigate to="/login" replace/>
  }
  if(!allowed.includes(user.role)){
    return <Navigate to="/unauthorized" replace/>
  }
  return (
    <Outlet/>
  )
}
