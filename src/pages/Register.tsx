import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '../components/Button';
import Input from '../components/Input';
import { useAuth } from '../hooks/useAuth';
import { CheckSquare } from 'lucide-react';

export default function Register() {
  const navigate = useNavigate();
  const { register } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const isValidEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    if (!email || !password) {
      setError('Email and password required');
      return;
    }
    if (!isValidEmail(email)) {
      setError('Invalid email format');
      return;
    }

    if (register(email, password)) {
      navigate('/');
    } else {
      setError('Email already registered');
    }
  };

  return (
    <div className="h-screen flex items-center justify-center">
      <form className="bg-white p-6 rounded shadow-md w-full max-w-md flex flex-col gap-4" onSubmit={handleRegister}>
        <div className="flex items-center justify-center">
          <CheckSquare className="text-blue-600 mr-2" size={32} />
          <h1 className="text-3xl font-bold text-gray-900">TaskMaster</h1>
        </div>

        <h2 className="text-xl font-semibold text-gray-900 mb-6 text-center">
          Create Account
        </h2>
        <Input placeholder="Email" value={email} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)} />
        <Input placeholder="Password" type="password" value={password} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)} />
        {error && <div className="text-red-500 text-sm">{error}</div>}
        <Button type="submit">Register</Button>
        <p className="mt-6 text-center text-sm text-gray-600">
          Already have an account?{' '}
          <Link to="/login" className="text-blue-600 hover:text-blue-700 font-medium">
            Sign in
          </Link>
        </p>
      </form>
    </div>
  );
}
