import About from './components/About';
import './App.css';
import Prizes from './components/Prizes';

function App() {
  return (
    <div className='min-h-screen flex flex-col bg-slate-900'>
      <About/>
      <Prizes/>
    </div>
  )
}

export default App;
