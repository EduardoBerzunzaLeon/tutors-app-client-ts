import { Navigate, useLocation } from 'react-router-dom';

interface User {
    name: string;
}

const PublicRoute = ({ children }: {children: JSX.Element}) => {
  const currentUser: User = { name: 'Eduardo' };
  const location = useLocation();

  if (!currentUser) {
    return <Navigate to="/admin" state={{ from: location }} replace />;
  }

  return children;
};

export default PublicRoute;
