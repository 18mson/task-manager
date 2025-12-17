import { createContext } from 'react';

type User = { email: string; password: string };

type AuthContextType = {
  isAuthenticated: boolean;
  user: string | null;
  login: (email: string, password: string) => boolean;
  register: (email: string, password: string) => boolean;
  logout: () => void;
  getUsers: () => User[];
};

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export type { User, AuthContextType };