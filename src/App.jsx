import './App.css';
import Home from './components/Home';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
    AOS.refresh();
  }, [])
  return (
    <div className='min-h-screen flex flex-col font-sans bg-black min-w-fit'>
      <Home/>
    </div>
  )
}

export default App;
