import logo from './logo.svg';
import './App.css';
import Body from './components/body';
import Footer from './components/footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from './components/navbar';
import Tamagotchi from './components/tamagotchi';
import RPSLS from './components/RPSLS';
import TamagotchiResults from './components/tamagotchiResults';
import PPTLSResults from './components/PPTLSResults';

function App() {
  return (
    <div className="App">
      <Navbar />
      <>
        <Routes>
          <Route path="/home" />
          <Route path="/tamagotchi" element={<Tamagotchi />} />
          <Route path="/rpsls" element={<RPSLS />} />
          <Route path="/resultsTamagotchi" element={<><h2 className='m-2'>Tamagotchi Results</h2><TamagotchiResults /></>} />
          <Route path="/resultsPPTLS" element={<><h2 className='m-2'>PPTLS Results</h2><PPTLSResults /></>} />
        </Routes>
      </>
      <Body />
      <Footer />
    </div>
  );
}

export default App;
