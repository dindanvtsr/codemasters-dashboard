import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const ProtectedRoute = props => {
  const navigate = useNavigate();
  const isAuthenticated = localStorage.getItem('accessToken');

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/signin');
    }
  }, []);

  return props.children;
};

export default ProtectedRoute;
