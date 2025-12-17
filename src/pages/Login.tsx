import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "../components/Button";
import Input from "../components/Input";
import { showDummyUsers } from "../lib/faker";
import { useAuth } from "../hooks/useAuth";
import { CheckSquare, Eye, EyeOff } from "lucide-react";

export default function Login() {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    if (!email || !password) {
      setError("Email and password required");
      return;
    }
    if (login(email, password)) {
      navigate("/");
    } else {
      setError("Invalid credentials");
    }
  };

  const dummies = showDummyUsers();

  return (
    <div className="h-screen flex items-center justify-center">
      <form className="bg-white p-6 rounded shadow-md max-w-md w-full flex flex-col gap-4" onSubmit={handleLogin}>
        <div className="flex items-center justify-center">
          <CheckSquare className="text-blue-600 mr-2" size={32} />
          <h1 className="text-3xl font-bold text-gray-900">TaskMaster</h1>
        </div>
        <h2 className="text-xl font-bold text-center">Welcome Back</h2>
        <Input placeholder="Email" value={email} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)} />
        <div className="relative">
          <Input placeholder="Password" type={showPassword ? "text" : "password"} value={password} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)} />
          <button
            type="button"
            className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
        </div>
        {error && <div className="text-red-500 text-sm">{error}</div>}
        <Button type="submit">Login</Button>
        <p className="mt-6 text-center text-sm text-gray-600">
          Don't have an account?{' '}
          <Link to="/register" className="text-blue-600 hover:text-blue-700 font-medium">
            Sign up
          </Link>
        </p>
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
