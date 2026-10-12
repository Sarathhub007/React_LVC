// import { Routes, Route } from "react-router-dom";
// import Home from "./Component/Pages/Home";
// import Login from "./Component/Pages/Login";
// import Register from "./Component/Pages/Register";
// import Dashboard from "./Component/Pages/Dashboard";
// import CourseDetails from "./Component/Pages/CourseDetails";
// import Courses from "./Component/Pages/Courses";
// import Settings from "./Component/Pages/Settings";
// import Profile from "./Component/Pages/Profile";
// import DashboardLayout from "./Component/layouts/DashboardLayout";
// import ProtectedRoute from "./Component/ProtectedRoute";
// import Unauthorized from "./Component/Pages/Unauthorized";
// import RoleRoute from "./Component/RoleRoute";
// import AdminDashboard from "./Component/Pages/AdminDashboard";

import { useState } from "react";
import Child from "./Pratice/Child";

// import { useMemo, useState } from "react";
// import Student from "./Pratice/Student";
// import Profile from "./Pratice/Profile";
// import MessageForm from "./Pratice/MessageForm";
// import AddItem from "./Pratice/AddItem";
// import ItemList from "./Pratice/ItemList";
// import Card from "./Pratice/Card";
// import FocusInput from "./Pratice/FocusInput";
// import { ThemeContext } from "./Pratice/ThemeContext";
// import ThemeButton from "./Pratice/ThemeButton";
// import UserContext from "./Pratice/UserContext";

function App() {
  // const [items, setItems] = useState([]);
  // const[showdetails,setShowdetails]=useState(false);
  // function additems(newitems) {
  //   setItems((previtems) => [...previtems, newitems]);
  // }
  // function deleteItems(delitem){
  // setItems((previtems)=>
  // previtems.filter((num)=>num!==delitem))

  // }
  // const[theme,setTheme]=useState("light");
  // const[name,setName]=useState("Sarath")

  const [count, setCount] = useState(0);
  // const [number, setNumber] = useState(10);

  // const result = useMemo(() => {
  //   console.log("Calculating...");
  //   return number * 2;
  // }, [number]);


  function handleClick() {
    console.log("Child button clicked");
  }


  return (
    <>
      {/* <Routes>
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
      </Routes> */}

      {/* 
      <AddItem additem={additems} />
     <ItemList items={items} deleteItems={deleteItems} />
     <Card>
  <h1>Game of Thrones</h1>
  <p>Jon Snow</p>
</Card>

<Card>
  <h1>Breaking Bad</h1>
  <p>Walter White</p>
</Card>
<button onClick={()=>setShowdetails(!showdetails)}>
  {showdetails ? "Hide Details" : "Show Details"}
</button>

{
  showdetails && (
    <div>
      <h2>
        Game of thrones
      </h2>
      <p>
        Character: John snow
      </p>
    </div>
  )
}

<FocusInput/> */}

      {/* <ThemeContext.Provider value={{theme,setTheme,name,setName}}>
  <h1>StudentHub</h1>
  <p>
    Current theme:{theme}
  </p>
  <ThemeButton/>
  <UserContext/>
</ThemeContext.Provider> */}

      {/* <div>
      <h1>Count: {count}</h1>

      <button onClick={() => setCount(count + 1)}>
        Increase
      </button>

      <Student name="chinnu" />
    </div> */}

      <div>
        {/* <h2>Count: {count}</h2>
        <button onClick={() => setCount(count + 1)}>Increase Count</button>

        <h2>Result: {result}</h2>
        <button onClick={() => setNumber(number + 1)}>Increase Number</button> */}


            <>
      <h2>Count: {count}</h2>

      <button onClick={() => setCount(count + 1)}>
        Increase Count
      </button>

      <Child onClick={handleClick} />
    </>
      </div>
    </>
  );
}

export default App;
