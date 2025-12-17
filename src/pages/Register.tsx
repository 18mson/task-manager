import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/Button';
import Input from '../components/Input';
import { getDummyUsers } from '../lib/faker';

export default function Register() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    if (!email || !password) {
      setError('Email and password required');
      return;
    }
    // Simulated registration: save to localStorage along with dummy users
    const newUser = { email, password };
    const users = getDummyUsers();
    users.push(newUser); // Add new user to dummy
    localStorage.setItem('users', JSON.stringify(users));
    localStorage.setItem("auth", "true");
    localStorage.setItem("sessionUser", email);
    navigate('/');
  };

  return (
    <div className="h-screen flex items-center justify-center">
      <form className="bg-white p-6 rounded shadow-md min-w-[320px] flex flex-col gap-4" onSubmit={handleRegister}>
        <h2 className="text-2xl font-bold text-center">Register</h2>
        <Input placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
        <Input placeholder="Password" type="password" value={password} onChange={e => setPassword(e.target.value)} />
        {error && <div className="text-red-500 text-sm">{error}</div>}
        <Button type="submit">Register</Button>
        <Button type="button" variant="secondary" onClick={() => navigate('/login')}>Go to Login</Button>
      </form>
    </div>
  );
}
