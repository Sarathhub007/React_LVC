import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

export default function DashboardLayout() {
  return (
    <div>
        <nav style={{display:'flex'}}>
            <NavLink to="/dashboard">Home</NavLink>
             <NavLink to="/dashboard/profile">Profile</NavLink>
              <NavLink to="/dashboard/courses">Courses</NavLink>
               <NavLink to="/dashboard/settings">Settings</NavLink>

        </nav>
        <main style={{flex:1,padding:20}}>
            <Outlet/>

        </main>
    </div>
  )
}
