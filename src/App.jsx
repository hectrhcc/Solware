import React from 'react';
import './App.css'
import Layout from './components/Layout';
import { useEffect} from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
 useEffect(() => {
  AOS.init({ duration: 1000, once: true });
}, []);
  return (
    <Layout>
    </Layout>
  );
}
export default App;