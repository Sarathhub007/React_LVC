import { createContext, useState, useContext } from "react";

const AuthContext = createContext(null);
const DEMO_USERS = [
  {
    email: "sarath@gmail.com",
    password: "123",
    name: "Alex",
    role: "Student",
  },
  {
    email: "admin@gmail.com",
    password: "123",
    name: "admin",
    role: "admin",
  },
];
export default function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem("studenthub_user");
    return saved ? JSON.parse(saved) : null;
  });

  function login(email, password) {
    const found = DEMO_USERS.find(
      (u) => u.email === email && u.password === password,
    );
    if (!found) {
      throw new Error("Invalid credentials");
    }
    setUser(found);
    localStorage.setItem("studethub_user", JSON.stringify(found));
  }
  function logout() {
    setUser(null);
    localStorage.removeItem("studenthub_user");
  }
  return (
    <AuthContext.Provider value={{ user,login,logout }}>
      {children}
    </AuthContext.Provider>
  );
}
export function useAuth() {
  return useContext(AuthContext);
}
