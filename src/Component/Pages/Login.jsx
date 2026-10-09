import  { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  async function handlSubmit(e) {
    e.preventDefault();
    setError("");
    try {
      login(email, password);
      navigate("/dashboard");
    } catch (err) {
      setError(err.message);
    }
  }
  return (
    <form onSubmit={handlSubmit}>
      <h1>Login</h1>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter the Email"
        required
      />
      <br />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Enter the Password"
        required
      />
      <br />
      <button type="submit">Login</button>
    </form>
  );
}
