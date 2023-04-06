import './App.css';
import React, {useState} from 'react';
import Home from './pages/home';
import DetailCard from './components/DetailCard';
import About from './pages/about';
import Newsletter from './pages/newsletter';
import Header from './components/Header/Header';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  const [properyDetail, setPropertyDetail] = useState({});
  return (
    <div className="App">
      <Header />
      <div className="container">
      <Routes>       
         <Route path="/" element={<Home setPropertyDetail={setPropertyDetail}/>} />         
         <Route path="/about" element={<About />} />
         <Route path="/newsletter" element={<Newsletter />} />
         <Route path="/property/:id" element={<DetailCard propertyDetail={properyDetail} />} />
      </Routes>
     </div>
    </div>
  );
}

export default App;
