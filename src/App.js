import './App.css';
import Allpackage from './pages/mainpackagepage/Allpackage';
import Digha from './pages/digha/Digha';
import Mandarmani from './pages/mandarmani/mandarmani';
import Digha_Tajpur from './pages/digha/digha-tajpur';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Talsari from './pages/digha/talsari';
import Dighaseabeach from './pages/digha/digha-sea-beach';
import Mandtalsari from './pages/mandarmani/MandTalsari';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Allpackage />} />
        <Route path="/digha" element={<Digha/>} />
        <Route path="/mandarmani" element={<Mandarmani/>} />
        <Route path='/package/DIGHA-001' element ={<Digha_Tajpur/>} />
        <Route path='/package/DIGHA-002' element={<Talsari/>}/>
         <Route path='/package/DIGHA-003' element={<Dighaseabeach/>}/>
         <Route path='/package/MANDARMONI-001' element={<Mandtalsari/>}/>
      </Routes>
    </Router>
  );
}

export default App;
