import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createRoot } from 'react-dom/client'
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import POPOSList from './components/PropertyList';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
  <Routes>
    <Route path="/" element={<App />}>
      <Route path="/" element={<POPOSList />} />
      {/* <Route path="about" element={<About />} /> */}
    </Route>
  </Routes>
</Router>
);
