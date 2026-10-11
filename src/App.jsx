import { Routes, Route } from "react-router-dom";
import Home from "./Component/Pages/Home";
import Login from "./Component/Pages/Login";
import Register from "./Component/Pages/Register";
import Dashboard from "./Component/Pages/Dashboard";
import CourseDetails from "./Component/Pages/CourseDetails";
import Courses from "./Component/Pages/Courses";
import Settings from "./Component/Pages/Settings";
import Profile from "./Component/Pages/Profile";
import DashboardLayout from "./Component/layouts/DashboardLayout";
import ProtectedRoute from "./Component/ProtectedRoute";
import Unauthorized from "./Component/Pages/Unauthorized";
import RoleRoute from "./Component/RoleRoute";
import AdminDashboard from "./Component/Pages/AdminDashboard";

// import { useState } from "react";
// import Profile from "./Pratice/Profile";
// import MessageForm from "./Pratice/MessageForm";
// import AddItem from "./Pratice/AddItem";
// import ItemList from "./Pratice/ItemList";

function App() {

  // const [items, setItems] = useState([]);
  // function additems(newitems) {
  //   setItems((previtems) => [...previtems, newitems]);
  // }
  // function deleteItems(delitem){
  // setItems((previtems)=>
  // previtems.filter((num)=>num!==delitem))
  // }

 
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard/courses" element={<Courses />} />
        <Route
          path="/dashboard/courses/:courseId"
          element={<CourseDetails />}
        />

        <Route element={<ProtectedRoute />}>
          <Route path="/dashboard" element={<DashboardLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="profile" element={<Profile />} />
            <Route path="courses" element={<Courses />} />
            <Route path="courses/:courseId" element={<CourseDetails />} />
            <Route path="settings" element={<Settings />} />
          </Route>
        </Route>
        <Route path="/unauthorized" element={<Unauthorized />} />

        <Route element={<RoleRoute allowedRoles={["admin"]} />}>
          <Route path="/admin" element={<AdminDashboard />} />
        </Route>
      </Routes>
   


    </>
  );
}

export default App;
