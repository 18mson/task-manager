import type { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';

if (!sessionStorage.getItem('sessionInit')) {
  sessionStorage.setItem('sessionInit', 'true');
  localStorage.setItem('auth', 'false');
  localStorage.removeItem('sessionUser');
}

type ProtectedRouteProps = {
  children: ReactNode;
};

export const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const isAuth = localStorage.getItem('auth') === 'true';
  return isAuth ? <>{children}</> : <Navigate to="/login" />;
};
