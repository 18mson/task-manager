import type { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

if (!sessionStorage.getItem('sessionInit')) {
  sessionStorage.setItem('sessionInit', 'true');
  localStorage.setItem('auth', 'false');
  localStorage.removeItem('sessionUser');
}

type ProtectedRouteProps = {
  children: ReactNode;
};

export const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? <>{children}</> : <Navigate to="/login" />;
};
