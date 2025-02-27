import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import Home from './routes/Home.jsx';
import Workouts from './routes/Workouts.jsx';
import { FaArrowUp } from 'react-icons/fa'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="home" element={<Home />} />

          <Route path='workout' element={<Workouts />} />
            {" "}
            <Route 
              index 
              element={
                <main className="card bg-orange-3">Please Select a Day</main>} 
            />
          <Route 
            path="*" 
            element={
              <main>
                <p>There's nothing here!</p>
              </main>
            }
          />
        </Route>
      </Routes>
    </Router>
  </StrictMode>
);
