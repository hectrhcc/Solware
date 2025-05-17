import React from 'react';
import './App.css'
import Layout from './components/Layout';
import ScrollToTop from './components/ScrollToTop';
import { useEffect} from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';


function App() {
 useEffect(() => {
  AOS.init({ duration: 1000, once: true });
}, []);
  return (
    <>
    <ScrollToTop /> {/* 👈 Este es el que hace el scroll al cambiar de ruta */}
    <Layout />
    </>
  );
}
export default App;