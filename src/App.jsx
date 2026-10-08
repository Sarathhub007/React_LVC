import { Routes, Route } from "react-router-dom";
import Home from "./Component/Pages/Home";
import Login from "./Component/Pages/Login";
import Register from "./Component/Pages/Register";
import Dashboard from "./Component/Pages/Dashboard";
import CourseDetails from "./Component/Pages/CourseDetails";
import Courses from "./Component/Pages/Courses";
import Settings from "./Component/Pages/Settings"
import Profile  from "./Component/Pages/Profile"
import DashboardLayout from "./Component/layouts/DashboardLayout";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard/courses" element={<Courses/>}/>
        <Route path="/dashboard/courses/:courseId" element={<CourseDetails/>}/>

        

        <Route path="/dashboard" element={<DashboardLayout />}>
  <Route index element={<Dashboard />} />
  <Route path="profile" element={<Profile />} />
  <Route path="courses" element={<Courses />} />
  <Route path="courses/:courseId" element={<CourseDetails />} />
  <Route path="settings" element={<Settings />} />
</Route>

        

      </Routes>
    </>
  );
}

export default App;
