import React from 'react';
import './App.css'
import Layout from './components/Layout';
import Scroll from './components/Scroll'; //no confundir ScrolltoTop con ScrollToTop OJO AHI MAL NOMBRE
import { useEffect} from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';


function App() {
 useEffect(() => {
  AOS.init({ duration: 1000, once: true });
}, []);
  return (
    <>
    <Scroll /> 
    <Layout />
    </>
  );
}
export default App;