import React, { useState, useEffect } from 'react';
import './App.css';
import Heroes from "./components/Heroes.js";
import Pagination from "./components/Pagination.js";
import axios from "axios";
import api_hero from "./token.json";
import Loader from 'react-loader-spinner'
import Home from "./components/Home.js";
import HeroInfo from "./components/HeroInfo.js";
import { useRoutes } from 'hookrouter';

const routes = {
  '/': ()=> <Home />,
  '/info/:heroId': ({ heroId })=> <HeroInfo heroId={ heroId } />,
}

function App(){

  const match = useRoutes(routes);

    return (  
      match || console.log("DEU RUIM")
    )
 

  
}

export default App;

