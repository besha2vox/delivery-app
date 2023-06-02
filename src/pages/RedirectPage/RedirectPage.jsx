import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const RedirectPage = () => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate('/shop');
  }, [navigate]);
};

export default RedirectPage;
