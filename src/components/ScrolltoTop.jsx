import { useEffect } from 'react';
import { useLocation } from 'wouter';

const ScrollToTop = () => {
  const [location] = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location]);

  return null;
};

export default ScrollToTop;
// This component will scroll to the top of the page whenever the location changes.
// You can use it in your main App component or any other component where you want this behavior.
// To use this component, simply import it and include it in your main App component or any other component where you want this behavior.