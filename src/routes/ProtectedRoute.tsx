import React from 'react';
import { Navigate, RouteProps } from 'react-router-dom';
import { isAuthenticated } from './auth'; // Importe a função de verificação de autenticação

interface ProtectedRouteProps {
    element: JSX.Element;
    path: string;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ element, path }) => {
    return isAuthenticated() ? element : <Navigate to="/login" />;
};

export default ProtectedRoute;
