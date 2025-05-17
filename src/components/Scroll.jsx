import { useEffect } from 'react';
import { useLocation } from 'wouter';

const Scroll = () => {
  const [location] = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location]);

  return null;
};

export default Scroll;
