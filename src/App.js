import './App.css';
import Title from './components/Title';
import POPOSList from './pages/PropertyList';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import ABOUTPAGE from './pages/About';

function App() {
  return (
    <div className="App">
      <Title />
      <div className="container">
      <Routes>       
         <Route path="/" element={<POPOSList />} />         
         <Route path="/about" element={<ABOUTPAGE />} />
      </Routes>
     </div>
    </div>
  );
}

export default App;
