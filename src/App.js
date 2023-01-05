import './styles/style.css';
import React from "react";
import  ReactDOM  from "react-dom";
import {Routes, Route} from "react-router-dom"
import Home from './components/home';
import Apropos from './components/aPropos/aPropos';
import Logement from './components/logement/logement';
import appartList from './components/apparts';
import NotFound from './components/pageNotFound';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/a-propos' element={<Apropos />}/>
        <Route path='/logement/:id' element={<Logement/>}/>
        <Route path='*' element={<NotFound />}/>
      </Routes>
    </div>
  );
}

export default App;
