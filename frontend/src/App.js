import React from "react";
import LandingPage from "./LandingPage";
import LearnMorePage from "./LearnMorePage";
import {BrowserRouter as Router, Route,Routes} from 'react-router-dom';


export default function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/more' element={<LearnMorePage/>}/>
      </Routes>
    </Router>
  );
}
