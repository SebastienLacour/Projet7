// Importation de react
import React from "react";

// Importation du css pour la mise en page
import './styles/style.css';

// Importation des fonctions routes pouir créer des routes pour notre application
import {Routes, Route} from "react-router-dom"

// Importation des fonctions useState et useEffect pour faire notre fetch qui va récupérer les données à afficher
import { useState, useEffect } from 'react';

// Importation des différents composants qui affichera les différentes pages de l'application
import Home from './components/home/home';
import Apropos from './components/a_propos/aPropos';
import Logement from './components/logement/logement';
import NotFound from './components/pageNotFound';

function App() {

  // Créons notre fonction useState et initialisons la à un tableau vide
  const [data, setData] = useState([])

  // Créons la fonction fetchData qui va récupérer les données de l'api et les afficher dans la variable data
  const fetchData = () => {
    fetch('https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/Front-End+V2/P9+React+1/logements.json')
      .then((response) => response.json())
      .then((json) => {
        setData(json)
      })
      .catch((error) => console.log(error))
  }

  // Appelons la fonction fetchData dans le useEffect pour récupérer le résultat de l'appel à l'api
  useEffect(() => {
    fetchData()
  }, [])

  return (
    // Mise en place des routes permettant d'afficher les 4 pages de l'application, en plaçant en props la variable data permettant l'affichage des différents appartements ainsi que leurs informations
    <div className="App">
      <Routes>
        <Route path='/' element={<Home data ={data} />} />
        <Route path='/a-propos' element={<Apropos />}/>
        <Route path='/logement/:id' element={<Logement data ={data}/>}/>
        <Route path='*' element={<NotFound />}/>
      </Routes>
    </div>
  );
}

export default App;
