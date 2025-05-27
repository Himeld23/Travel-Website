import logo from './logo.svg';
import './App.css';
import Allpackage from './pages/mainpackagepage/Allpackage';
import Digha from './pages/digha/Digha';
import Digha_sea_beach from './pages/digha/digha-sea-beach';
import Digha_Tajpur from './pages/digha/digha-tajpur';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Allpackage />} />
        <Route path="/digha" element={<Digha/>} />
        <Route path="/digha_sea_beach" element={<Digha_sea_beach/>} />
        <Route path='/package/DIGHA-001' element ={<Digha_Tajpur/>} />
      </Routes>
    </Router>
  );
}

export default App;
