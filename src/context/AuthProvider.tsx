import { useState, useEffect } from 'react';
import type { ReactNode } from 'react';
import { AuthContext, type User } from './context';
import { getDummyUsers } from '../lib/faker';

type AuthProviderProps = {
  children: ReactNode;
};

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [isAuthenticated, setIsAuthenticated] = useState(() => localStorage.getItem('auth') === 'true');
  const [user, setUser] = useState<string | null>(() => localStorage.getItem('sessionUser'));

  const getUsers = (): User[] => {
    const ls = localStorage.getItem('users');
    return ls ? JSON.parse(ls) : [];
  };

  useEffect(() => {
    const users = getUsers();
    if (users.length === 0) {
      const dummies = getDummyUsers();
      localStorage.setItem('users', JSON.stringify(dummies));
    }
  }, []);

  const login = (email: string, password: string): boolean => {
    const users = getUsers();
    const foundUser = users.find(u => u.email === email && u.password === password);
    if (foundUser) {
      localStorage.setItem('auth', 'true');
      localStorage.setItem('sessionUser', email);
      setIsAuthenticated(true);
      setUser(email);
      return true;
    }
    return false;
  };

  const register = (email: string, password: string): boolean => {
    const users = getUsers();
    if (users.some(u => u.email === email)) {
      return false; // already exists
    }
    const newUsers = [...users, { email, password }];
    localStorage.setItem('users', JSON.stringify(newUsers));
    localStorage.setItem('auth', 'true');
    localStorage.setItem('sessionUser', email);
    setIsAuthenticated(true);
    setUser(email);
    return true;
  };

  const logout = () => {
    localStorage.removeItem('auth');
    localStorage.removeItem('sessionUser');
    setIsAuthenticated(false);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, login, register, logout, getUsers }}>
      {children}
    </AuthContext.Provider>
  );
};