import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../components/Button";
import Input from "../components/Input";
import { showDummyUsers, getDummyUsers } from "../lib/faker";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    if (!email || !password) {
      setError("Email and password required");
      return;
    }
    const ls = localStorage.getItem("users");
    const users = ls ? JSON.parse(ls) : getDummyUsers();
    const user = users.find((u: {email: string, password: string}) => u.email === email && u.password === password);
    if (user) {
      localStorage.setItem("auth", "true");
      localStorage.setItem("sessionUser", email);
      navigate("/");
    } else {
      setError("Invalid credentials");
    }
  };

  const dummies = showDummyUsers();

  return (
    <div className="h-screen flex items-center justify-center">
      <form className="bg-white p-6 rounded shadow-md min-w-[320px] flex flex-col gap-4" onSubmit={handleLogin}>
        <h2 className="text-2xl font-bold text-center">Login</h2>
        <Input placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
        <Input placeholder="Password" type="password" value={password} onChange={e => setPassword(e.target.value)} />
        {error && <div className="text-red-500 text-sm">{error}</div>}
        <Button type="submit">Login</Button>
        <Button type="button" variant="secondary" onClick={() => navigate('/register')}>Go to Register</Button>
        {/* Show dummy users for testing/demo purposes */}
        <div className="border-t pt-4 mt-4">
          <div className="text-xs font-semibold mb-2 text-gray-700">Dummy Users (for testing):</div>
          <ul className="text-xs text-gray-600">
            {dummies.map(u => (
              <li key={u.email} className="mb-1">
                <span className="font-mono">{u.email}</span> / <span className="font-mono">{u.password}</span>
              </li>
            ))}
          </ul>
        </div>
      </form>
    </div>
  );
}
